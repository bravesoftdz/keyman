/**
 * Copyright (C) 2020 SIL International. All rights reserved.
 */

package com.tavultesoft.kmapro;

import android.annotation.SuppressLint;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.Color;
import android.net.Uri;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;
import android.widget.FrameLayout;
import android.widget.RelativeLayout;

import androidx.appcompat.app.AppCompatActivity;

import com.tavultesoft.kmea.KMManager;
import com.tavultesoft.kmea.KeyboardEventHandler;
import com.tavultesoft.kmea.util.KMPLink;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class KMPBrowserActivity extends AppCompatActivity implements KeyboardEventHandler.OnKeyboardEventListener {
  private static final String TAG = "KMPBrowserActivity";

  // URL for keyboard search web page presented to user when they add a keyboard in the app.
  private static final String KMP_SEARCH_KEYBOARDS_FORMATSTR = "https://%s/go/android/%s/download-keyboards%s";
  private static final String KMP_SEARCH_KEYBOARDS_LANGUAGES = "/languages/%s";

  // Patterns for determining if a link should be opened in external browser
  // 1. Host isn't keyman.com (production/staging)
  // 2. Host is keyman.com but not /keyboards/
  private static final String INTERNAL_KEYBOARDS_LINK_FORMATSTR = "^http(s)?://(%s|%s)/keyboards([/?].*)?$";
  private static final String keyboardPatternFormatStr = String.format(INTERNAL_KEYBOARDS_LINK_FORMATSTR,
    KMPLink.KMP_PRODUCTION_HOST,
    KMPLink.KMP_STAGING_HOST);
  private static final Pattern keyboardPattern = Pattern.compile(keyboardPatternFormatStr);

  private WebView webView;
  private static RelativeLayout keyboardLayout;
  private boolean isLoading = false;
  private boolean didFinishLoading = false;

  @SuppressLint({"SetJavaScriptEnabled", "InflateParams"})
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    final Context context = this;

    setContentView(R.layout.activity_kmp_browser);
    if (keyboardLayout == null) {
      keyboardLayout = new RelativeLayout(context.getApplicationContext());
      keyboardLayout.setLayoutParams(new FrameLayout.LayoutParams(FrameLayout.LayoutParams.MATCH_PARENT, FrameLayout.LayoutParams.MATCH_PARENT));
      keyboardLayout.setBackgroundColor(Color.TRANSPARENT);
      keyboardLayout.setVisibility(View.GONE);
      keyboardLayout.setEnabled(false);
    }

    if (KMManager.InAppKeyboard != null && KMManager.InAppKeyboard.getParent() == null) {
      keyboardLayout.addView(KMManager.InAppKeyboard);
    }

    webView = (WebView) findViewById(R.id.kmpBrowserWebView);
    webView.getSettings().setLayoutAlgorithm(WebSettings.LayoutAlgorithm.NORMAL);
    webView.getSettings().setJavaScriptEnabled(true);
    webView.getSettings().setUseWideViewPort(true);
    webView.getSettings().setLoadWithOverviewMode(true);
    webView.getSettings().setBuiltInZoomControls(true);
    webView.getSettings().setSupportZoom(true);
    webView.setLayerType(View.LAYER_TYPE_SOFTWARE, null);

    webView.setWebChromeClient(new WebChromeClient() {
      public void onProgressChanged(WebView view, int progress) {
      }
    });
    webView.setWebViewClient(new WebViewClient() {
      @Override
      public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
        didFinishLoading = true;
        isLoading = false;
      }

      @Override
      public boolean shouldOverrideUrlLoading(WebView view, String url) {
        String lowerURL = url.toLowerCase();
        if (lowerURL.equals("about:blank")) {
          return true; // never load a blank page, e.g. when the component initializes
        }

        if (KMPLink.isKeymanInstallLink(url)) {
          Uri downloadURI = KMPLink.getKeyboardDownloadLink(url);

          // Create intent with keyboard download link for KMAPro main activity to handle
          Intent intent = new Intent(context, MainActivity.class);
          intent.setData(downloadURI);
          startActivity(intent);

          // Finish activity
          finish();
        } else if (!isKeymanKeyboardsLink(url)) {
          Uri uri = Uri.parse(url);

          // All links that aren't internal Keyman keyboard links open in user's browser
          Intent intent = new Intent(Intent.ACTION_VIEW, uri);
          startActivity(intent);
          return true;
        }
        if (lowerURL.startsWith("keyman:")) {
          // Warn for unsupported keyman schemes
          Log.d(TAG, "Scheme for " + url + " not handled");
          return true;
        }

        // Display URL
        return false;
      }

      @Override
      public void onPageStarted(WebView view, String url, Bitmap favicon) {
        isLoading = true;
        didFinishLoading = false;
      }

      @Override
      public void onPageFinished(WebView view, String url) {
        didFinishLoading = true;
        isLoading = false;
      }
    });

    // Tier determines the keyboard search host
    String host = KMPLink.getHost();
    // If language ID is provided, include it in the keyboard search
    String languageID = getIntent().getStringExtra("languageCode");
    String languageStr = (languageID != null) ? String.format(KMP_SEARCH_KEYBOARDS_LANGUAGES, languageID) : "";
    String appMajorVersion = KMManager.getMajorVersion();
    String kmpSearchUrl = String.format(KMP_SEARCH_KEYBOARDS_FORMATSTR, host, appMajorVersion, languageStr);
    webView.loadUrl(kmpSearchUrl);
  }

  @Override
  protected void onResume() {
    super.onResume();
    KMManager.addKeyboardEventListener(this);

    if (webView != null) {
      webView.reload();
    }

    KMManager.onResume();
    KMManager.hideSystemKeyboard();
  }

  @Override
  protected void onPause() {
    super.onPause();
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
  }

  @Override
  public void onKeyboardLoaded(KMManager.KeyboardType keyboardType) {
    // Mitigation for https://github.com/keymanapp/keyman/issues/1963
    // Due to latency, switch from Keyman system keyboard to another
    if (KMManager.getKMKeyboard(KMManager.KeyboardType.KEYBOARD_TYPE_SYSTEM) != null) {
      Toast.makeText(getApplicationContext(), getString(R.string.switching_keyboard),
        Toast.LENGTH_SHORT).show();
      KMManager.advanceToNextInputMode();
    }
  }

  @Override
  public void onKeyboardChanged(String newKeyboard) {
    // Do nothing
  }

  @Override
  public void onKeyboardShown() {
    //
  }

  @Override
  public void onKeyboardDismissed() {
    // Do nothing
  }

  @Override
  protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    super.onActivityResult(requestCode, resultCode, data);

    if (webView != null) {
      if (resultCode == RESULT_OK && data != null) {
        String url = data.getStringExtra("url");
        if (url != null)
          webView.loadUrl(url);
      }
    }
  }

  @Override
  protected void onNewIntent(Intent intent) {
    super.onNewIntent(intent);
  }

  @Override
  public void onBackPressed() {
    if (webView != null && webView.canGoBack()) {
      webView.goBack();
    } else {
      super.onBackPressed();
      finish();
    }
  }

  /**
   * Check if a URL is a valid internal Keyman keyboard link
   * @param url String of the URL to parse
   * @return boolean
   */
  public boolean isKeymanKeyboardsLink(String url) {
    boolean status = false;
    if (url == null || url.isEmpty()) {
      return status;
    }
    Matcher matcher = keyboardPattern.matcher(url);
    if (matcher.matches()) {
      status = true;
    }

    return status;
  }
}
