package com.tavultesoft.kmea.data;

import android.app.DownloadManager;
import android.app.ProgressDialog;
import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.Build;
import android.os.Bundle;
import android.util.Log;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.tavultesoft.kmea.JSONParser;
import com.tavultesoft.kmea.KMManager;

import com.tavultesoft.kmea.R;

import org.json.JSONArray;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;

class CloudDownloadTask extends AsyncTask<CloudApiTypes.CloudApiParam, Integer, CloudApiTypes.CloudDownloadReturns> {


  private final boolean hasConnection;
  private ProgressDialog progressDialog;

  private final Context context;

  private final Dataset dataset;

  private final CloudApiDownloadCallback callback;



  public CloudDownloadTask(Context context, Dataset dataset, CloudRepository.UpdateHandler updateHandler, Runnable success, Runnable failure) {
    this.context = context;
    this.dataset = dataset;

    this.hasConnection = KMManager.hasConnection(context);


    callback = new CloudApiDownloadCallback(context,dataset,updateHandler,success,failure);
  }

  protected void showProgressDialog(final Runnable finishCallback) {
    if (Build.VERSION.SDK_INT < Build.VERSION_CODES.LOLLIPOP) {
      progressDialog = new ProgressDialog(context, R.style.AppTheme_Dialog_Progress);
    } else {
      progressDialog = new ProgressDialog(context);
    }
    progressDialog.setMessage(context.getString(R.string.getting_cloud_catalog));
    progressDialog.setButton(DialogInterface.BUTTON_NEGATIVE, context.getString(R.string.label_cancel),
      new DialogInterface.OnClickListener() {

        @Override
        public void onClick(DialogInterface dialogInterface, int which) {
          cancel(true);
          progressDialog.dismiss();
          progressDialog = null;
          if (finishCallback != null) {
            finishCallback.run();
          }
          return;
        }
      });
    progressDialog.setCancelable(true);
    if (!((AppCompatActivity) context).isFinishing()) {
      progressDialog.show();
    } else {
      cancel(true);
      progressDialog = null;
    }
  }

  @Override
  protected void onPreExecute() {
    super.onPreExecute();

    if (hasConnection) {
      showProgressDialog(new Runnable() {
        @Override
        public void run() { // runs on 'cancel' selection.
          callback.handleDownloadError();
        }
      });
    }
  }

  @Override
  protected CloudApiTypes.CloudDownloadReturns doInBackground(CloudApiTypes.CloudApiParam... params) {
    if (isCancelled()) {
      return null;
    }

    List<CloudApiTypes.CloudApiReturns> retrievedJSON = new ArrayList<>(params.length);
    if (progressDialog != null) {
      progressDialog.setMax(params.length);
    }

    for (CloudApiTypes.CloudApiParam param : params) {
      JSONParser jsonParser = new JSONParser();
      JSONArray dataArray = null;
      JSONObject dataObject = null;

      if (hasConnection) {
        try {
          String remoteUrl = param.url;

          if (param.type == CloudApiTypes.JSONType.Array) {
            dataArray = jsonParser.getJSONObjectFromUrl(remoteUrl, JSONArray.class);
          } else {
            dataObject = jsonParser.getJSONObjectFromUrl(remoteUrl, JSONObject.class);
          }
        } catch (Exception e) {
          Log.d(CloudRepository.TAG, e.getMessage());
        }
      } else {
        // Offline trouble!  That said, we can't get anything, so we simply shouldn't add anything.
      }

      if (param.type == CloudApiTypes.JSONType.Array) {
        retrievedJSON.add(new CloudApiTypes.CloudApiReturns(param.target, dataArray));  // Null if offline.
      } else {
        retrievedJSON.add(new CloudApiTypes.CloudApiReturns(param.target, dataObject)); // Null if offline.
      }
      if (progressDialog != null) {
        progressDialog.setProgress(progressDialog.getProgress());
      }
    }

    return new CloudApiTypes.CloudDownloadReturns(retrievedJSON); // Will report empty arrays/objects if offline.
  }



  @Override
  protected void onPostExecute(CloudApiTypes.CloudDownloadReturns jsonTuple) {

    callback.saveDataToCache(jsonTuple);

    if (progressDialog != null && progressDialog.isShowing()) {
      try {
        progressDialog.dismiss();
        progressDialog = null;
      } catch (Exception e) {
        progressDialog = null;
      }
    }

    callback.ensureInitCloudReturn(context,jsonTuple);

    callback.processCloudReturns(jsonTuple, true);
  }




}