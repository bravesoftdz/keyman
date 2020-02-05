FasdUAS 1.101.10   ��   ��    k             l     ��  ��     
 main.scpt     � 	 	    m a i n . s c p t   
  
 l     ��  ��      Install Keyman     �      I n s t a l l   K e y m a n      l     ��������  ��  ��        l     ��  ��    = 7 Copyright 2020 SIL International. All rights reserved.     �   n   C o p y r i g h t   2 0 2 0   S I L   I n t e r n a t i o n a l .   A l l   r i g h t s   r e s e r v e d .      l     ��������  ��  ��        l     ��  ��    P J This script automates the installation of Keyman on macOS. It is intended     �   �   T h i s   s c r i p t   a u t o m a t e s   t h e   i n s t a l l a t i o n   o f   K e y m a n   o n   m a c O S .   I t   i s   i n t e n d e d      l     ��   ��    J D as a stop-gap for a full-featured installer which provides clearer       � ! ! �   a s   a   s t o p - g a p   f o r   a   f u l l - f e a t u r e d   i n s t a l l e r   w h i c h   p r o v i d e s   c l e a r e r     " # " l     �� $ %��   $ $  instructions to the end user.    % � & & <   i n s t r u c t i o n s   t o   t h e   e n d   u s e r . #  ' ( ' l     �� ) *��   ) P J The script application expects a notarized Keyman.app to be placed inside    * � + + �   T h e   s c r i p t   a p p l i c a t i o n   e x p e c t s   a   n o t a r i z e d   K e y m a n . a p p   t o   b e   p l a c e d   i n s i d e (  , - , l     �� . /��   . 7 1 its folder in order for installation to succeed.    / � 0 0 b   i t s   f o l d e r   i n   o r d e r   f o r   i n s t a l l a t i o n   t o   s u c c e e d . -  1 2 1 l     ��������  ��  ��   2  3 4 3 l     5���� 5 r      6 7 6 J      8 8  9�� 9 m      : : � ; ;  s y s l o g��   7 o      ���� 0 dlog_targets DLOG_TARGETS��  ��   4  < = < l     ��������  ��  ��   =  > ? > h     �� @�� 0 installkeyman installKeyman @ k       A A  B C B l     ��������  ��  ��   C  D E D l     ��������  ��  ��   E  F G F l     �� H I��   H   Display welcome dialog    I � J J .   D i s p l a y   w e l c o m e   d i a l o g G  K L K l     ��������  ��  ��   L  M N M l     ��������  ��  ��   N  O P O l     Q���� Q I     �� R���� 0 dlog   R  S�� S m     T T � U U B # # #   S t a r t i n g   K e y m a n   i n s t a l l e r   # # #��  ��  ��  ��   P  V W V l   G X���� X Q    G Y Z [ Y k   
   \ \  ] ^ ] l  
 
�� _ `��   _   dialog    ` � a a    d i a l o g ^  b c b r   
  d e d I  
 �� f g
�� .sysodlogaskr        TEXT f l 	 
  h���� h m   
  i i � j j� T h i s   a p p   w i l l   h e l p   y o u   i n s t a l l   K e y m a n   o n   y o u r   M a c . 
 
 T h i s   i n s t a l l e r   w i l l   c o p y   K e y m a n   i n t o   y o u r   I n p u t   M e t h o d s   f o l d e r ,   a n d   c o n f i g u r e   K e y m a n   a s   a n   i n p u t   s o u r c e .   A f t e r   i n s t a l l a t i o n ,   K e y m a n   w i l l   b e   f o u n d   i n   t h e   m e n u   b a r   u p   n e a r   t h e   c l o c k .��  ��   g �� k l
�� 
btns k l 
   m���� m J     n n  o p o m     q q � r r  I n s t a l l p  s�� s m     t t � u u  E x i t��  ��  ��   l �� v w
�� 
dflt v l 	   x���� x m     y y � z z  I n s t a l l��  ��   w �� { |
�� 
cbtn { l 	   }���� } m     ~ ~ �    E x i t��  ��   | �� � �
�� 
appr � l 	   ����� � l 	   ����� � m     � � � � � 0 I n s t a l l   K e y m a n   f o r   m a c O S��  ��  ��  ��   � �� ���
�� 
disp � l 	   ����� � m     � � � � �  a p p l e t . i c n s��  ��  ��   e o      ���� 0 dialogreply dialogReply c  ��� � l   ��������  ��  ��  ��   Z R      �� � �
�� .ascrerr ****      � **** � o      ���� 0 errtext errText � �� ���
�� 
errn � o      ���� 0 errnum errNum��   [ Z   ( G � ����� � l  ( - ����� � =  ( - � � � o   ( )���� 0 errnum errNum � m   ) ,��������  ��   � k   0 C � �  � � � l  0 0�� � ���   �   User cancelled.    � � � �     U s e r   c a n c e l l e d . �  � � � I   0 8�� ����� 0 dlog   �  ��� � m   1 4 � � � � � @ U s e r   c a n c e l l e d   a t   W e l c o m e   d i a l o g��  ��   �  ��� � O  9 C � � � I  = B������
�� .aevtquitnull��� ��� null��  ��   �  f   9 :��  ��  ��  ��  ��   W  � � � l     ��������  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l     �� � ���   � Q K Tell application "Keyman" to quit (if running, for upgrade; ignore result)    � � � � �   T e l l   a p p l i c a t i o n   " K e y m a n "   t o   q u i t   ( i f   r u n n i n g ,   f o r   u p g r a d e ;   i g n o r e   r e s u l t ) �  � � � l     ��������  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l  H P ����� � I   H P�� ����� 0 dlog   �  ��� � m   I L � � � � � d # # #   S h u t t i n g   d o w n   e x i s t i n g   i n s t a n c e s   o f   K e y m a n   # # #��  ��  ��  ��   �  � � � l  Q Z ����� � r   Q Z � � � I  Q X�� ���
�� .sysoexecTEXT���     TEXT � m   Q T � � � � � ( p k i l l   K e y m a n   | |   t r u e��   � o      ���� 0 scriptresult scriptResult��  ��   �  � � � l  [ a ����� � I   [ a�� ����� 0 dlog   �  ��� � o   \ ]���� 0 scriptresult scriptResult��  ��  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l     ��������  ��  ��   �  � � � l     � � ��   � 3 - Remove old version of Keyman (ignore result)    � � � � Z   R e m o v e   o l d   v e r s i o n   o f   K e y m a n   ( i g n o r e   r e s u l t ) �  � � � l     �~�}�|�~  �}  �|   �  � � � l     �{�z�y�{  �z  �y   �  � � � l  b j ��x�w � I   b j�v ��u�v 0 dlog   �  ��t � m   c f � � � � � L # # #   R e m o v i n g   o l d   v e r s i o n   o f   K e y m a n   # # #�t  �u  �x  �w   �  � � � l  k t ��s�r � r   k t � � � I  k r�q ��p
�q .sysoexecTEXT���     TEXT � m   k n � � � � � f r m   - v r f   ~ / L i b r a r y / I n p u t \   M e t h o d s / K e y m a n . a p p   | |   t r u e�p   � o      �o�o 0 scriptresult scriptResult�s  �r   �  � � � l  u { ��n�m � I   u {�l ��k�l 0 dlog   �  ��j � o   v w�i�i 0 scriptresult scriptResult�j  �k  �n  �m   �  � � � l     �h�g�f�h  �g  �f   �  � � � l     �e�d�c�e  �d  �c   �  � � � l     �b � ��b   � ( " Install Keyman (copy app folder)	    � � � � D   I n s t a l l   K e y m a n   ( c o p y   a p p   f o l d e r ) 	 �  � � � l     �a�`�_�a  �`  �_   �  � � � l     �^�]�\�^  �]  �\   �  � � � l  | � ��[�Z � r   | � � � � c   | � � � � n   | � � � � 1   � ��Y
�Y 
strq � n   | � � � � 1   � ��X
�X 
psxp � l  | � ��W�V � I  | ��U ��T
�U .earsffdralis        afdr � m   | �S
�S misccura�T  �W  �V   � m   � ��R
�R 
TEXT � o      �Q�Q "0 scriptcontainer scriptContainer�[  �Z   �  � � � l  � � �P�O  I   � ��N�M�N 0 dlog   �L b   � � b   � � m   � � � 8 # # #   C o p y i n g   n e w   K e y m a n   f r o m   o   � ��K�K "0 scriptcontainer scriptContainer m   � �		 �

 T K e y m a n . a p p   t o   ~ / L i b r a r y / I n p u t \   M e t h o d s   # # #�L  �M  �P  �O   �  l  � ��J�I r   � � b   � � b   � � m   � � �  c p   - v R   o   � ��H�H "0 scriptcontainer scriptContainer m   � � � f C o n t e n t s / M a c O S / K e y m a n . a p p   ~ / L i b r a r y / I n p u t \   M e t h o d s / o      �G�G 0 cmd  �J  �I    l  � ��F�E r   � � I  � ��D�C
�D .sysoexecTEXT���     TEXT o   � ��B�B 0 cmd  �C   o      �A�A 0 scriptresult scriptResult�F  �E    l  � � �@�?  I   � ��>!�=�> 0 dlog  ! "�<" o   � ��;�; 0 scriptresult scriptResult�<  �=  �@  �?   #$# l     �:�9�8�:  �9  �8  $ %&% l     �7�6�5�7  �6  �5  & '(' l     �4)*�4  ) + % remove quarantine extended attribute   * �++ J   r e m o v e   q u a r a n t i n e   e x t e n d e d   a t t r i b u t e( ,-, l     �3�2�1�3  �2  �1  - ./. l     �0�/�.�0  �/  �.  / 010 l  � �2�-�,2 I   � ��+3�*�+ 0 dlog  3 4�)4 m   � �55 �66 z # # #   R e m o v i n g   q u a r a n t i n e   a t t r i b u t e   o n   i n s t a l l e d   K e y m a n . a p p   # # #�)  �*  �-  �,  1 787 l  � �9�(�'9 r   � �:;: I  � ��&<�%
�& .sysoexecTEXT���     TEXT< m   � �== �>> � x a t t r   - d   - r   c o m . a p p l e . q u a r a n t i n e   ~ / L i b r a r y / I n p u t \   M e t h o d s / K e y m a n . a p p�%  ; o      �$�$ 0 scriptresult scriptResult�(  �'  8 ?@? l  � �A�#�"A I   � ��!B� �! 0 dlog  B C�C o   � ��� 0 scriptresult scriptResult�  �   �#  �"  @ DED l     ����  �  �  E FGF l     ����  �  �  G HIH l     �JK�  J 2 , Enable Keyman in Privacy / Input Monitoring   K �LL X   E n a b l e   K e y m a n   i n   P r i v a c y   /   I n p u t   M o n i t o r i n gI MNM l     �OP�  O A ; TODO: this will come in a future version of the installer.   P �QQ v   T O D O :   t h i s   w i l l   c o m e   i n   a   f u t u r e   v e r s i o n   o f   t h e   i n s t a l l e r .N RSR l     �TU�  T E ? In the current version, the user will be prompted post-install   U �VV ~   I n   t h e   c u r r e n t   v e r s i o n ,   t h e   u s e r   w i l l   b e   p r o m p t e d   p o s t - i n s t a l lS WXW l     ����  �  �  X YZY l      �[\�  [E?	dlog("### Helping user enable Keyman in Input Monitoring ###")		try		tell application "System Preferences"			set the current pane to pane id "com.apple.preference.security"			reveal anchor "Privacy" of pane id "com.apple.preference.security"			activate		end tell	on error errText number errNum		dlog("An error " & errText & " (" & errNum & ") occurred trying to open System Preferences")		if (errNum is equal to -1743) then			-- User did not give permission to app, let's show the dialog anyway.			dlog("Attempting to continue")		else			display dialog "An error occurred trying to open System Preferences: " & errNum & return & errText		end if	end try		tell me to activate		try		set dialogReply to display dialog �			"In the Privacy pane of Security & Privacy in System Preferences, select 'Input Monitoring', " & �			"then click the lock to make changes, and make sure Keyman in the list is checked." & return & return & �			"Once Keyman is checked, click OK here to continue." buttons {"OK", "Exit"} �			default button �			"OK" cancel button �			"Exit" with title �			�				�					"Install Keyman for macOS" with icon �			"applet.icns"	on error errText number errNum		if (errNum is equal to -128) then			-- User cancelled.			dlog("User cancelled at Input Monitoring")			tell me to quit		end if	end try	   \ �]]
~  	 d l o g ( " # # #   H e l p i n g   u s e r   e n a b l e   K e y m a n   i n   I n p u t   M o n i t o r i n g   # # # " )  	  	 t r y  	 	 t e l l   a p p l i c a t i o n   " S y s t e m   P r e f e r e n c e s "  	 	 	 s e t   t h e   c u r r e n t   p a n e   t o   p a n e   i d   " c o m . a p p l e . p r e f e r e n c e . s e c u r i t y "  	 	 	 r e v e a l   a n c h o r   " P r i v a c y "   o f   p a n e   i d   " c o m . a p p l e . p r e f e r e n c e . s e c u r i t y "  	 	 	 a c t i v a t e  	 	 e n d   t e l l  	 o n   e r r o r   e r r T e x t   n u m b e r   e r r N u m  	 	 d l o g ( " A n   e r r o r   "   &   e r r T e x t   &   "   ( "   &   e r r N u m   &   " )   o c c u r r e d   t r y i n g   t o   o p e n   S y s t e m   P r e f e r e n c e s " )  	 	 i f   ( e r r N u m   i s   e q u a l   t o   - 1 7 4 3 )   t h e n  	 	 	 - -   U s e r   d i d   n o t   g i v e   p e r m i s s i o n   t o   a p p ,   l e t ' s   s h o w   t h e   d i a l o g   a n y w a y .  	 	 	 d l o g ( " A t t e m p t i n g   t o   c o n t i n u e " )  	 	 e l s e  	 	 	 d i s p l a y   d i a l o g   " A n   e r r o r   o c c u r r e d   t r y i n g   t o   o p e n   S y s t e m   P r e f e r e n c e s :   "   &   e r r N u m   &   r e t u r n   &   e r r T e x t  	 	 e n d   i f  	 e n d   t r y  	  	 t e l l   m e   t o   a c t i v a t e  	  	 t r y  	 	 s e t   d i a l o g R e p l y   t o   d i s p l a y   d i a l o g   �  	 	 	 " I n   t h e   P r i v a c y   p a n e   o f   S e c u r i t y   &   P r i v a c y   i n   S y s t e m   P r e f e r e n c e s ,   s e l e c t   ' I n p u t   M o n i t o r i n g ' ,   "   &   �  	 	 	 " t h e n   c l i c k   t h e   l o c k   t o   m a k e   c h a n g e s ,   a n d   m a k e   s u r e   K e y m a n   i n   t h e   l i s t   i s   c h e c k e d . "   &   r e t u r n   &   r e t u r n   &   �  	 	 	 " O n c e   K e y m a n   i s   c h e c k e d ,   c l i c k   O K   h e r e   t o   c o n t i n u e . "   b u t t o n s   { " O K " ,   " E x i t " }   �  	 	 	 d e f a u l t   b u t t o n   �  	 	 	 " O K "   c a n c e l   b u t t o n   �  	 	 	 " E x i t "   w i t h   t i t l e   �  	 	 	 �  	 	 	 	 �  	 	 	 	 	 " I n s t a l l   K e y m a n   f o r   m a c O S "   w i t h   i c o n   �  	 	 	 " a p p l e t . i c n s "  	 o n   e r r o r   e r r T e x t   n u m b e r   e r r N u m  	 	 i f   ( e r r N u m   i s   e q u a l   t o   - 1 2 8 )   t h e n  	 	 	 - -   U s e r   c a n c e l l e d .  	 	 	 d l o g ( " U s e r   c a n c e l l e d   a t   I n p u t   M o n i t o r i n g " )  	 	 	 t e l l   m e   t o   q u i t  	 	 e n d   i f  	 e n d   t r y  	Z ^_^ l     ����  �  �  _ `a` l     ����  �  �  a bcb l     �
de�
  d ' ! Enable Keyman as an input method   e �ff B   E n a b l e   K e y m a n   a s   a n   i n p u t   m e t h o dc ghg l     �	���	  �  �  h iji l     ����  �  �  j klk l  � �m��m I   � ��n� � 0 dlog  n o��o m   � �pp �qq ` # # #   H e l p i n g   u s e r   a d d   K e y m a n   t o   I n p u t   M e t h o d s   # # #��  �   �  �  l rsr l  � �t����t r   � �uvu b   � �wxw o   � ����� "0 scriptcontainer scriptContainerx m   � �yy �zz P C o n t e n t s / M a c O S / t e x t i n p u t s o u r c e   - e   K e y m a nv o      ���� 0 cmd  ��  ��  s {|{ l  � �}����} r   � �~~ I  � ������
�� .sysoexecTEXT���     TEXT� o   � ����� 0 cmd  ��   o      ���� 0 scriptresult scriptResult��  ��  | ��� l  � ������� I   � �������� 0 dlog  � ���� o   � ����� 0 scriptresult scriptResult��  ��  ��  ��  � ��� l     ��������  ��  ��  � ��� l     ������  � E ? TODO: check the output result and if Keyman is not found, then   � ��� ~   T O D O :   c h e c k   t h e   o u t p u t   r e s u l t   a n d   i f   K e y m a n   i s   n o t   f o u n d ,   t h e n� ��� l     ������  � %  we go to troubleshooting mode?   � ��� >   w e   g o   t o   t r o u b l e s h o o t i n g   m o d e ?� ��� l     ��������  ��  ��  � ��� l      ������  ���		tell application "System Preferences"		set the current pane to pane id "com.apple.preference.keyboard"		# set r to get the name of every anchor of pane id "com.apple.preference.keyboard"		reveal anchor "InputSources" of pane id "com.apple.preference.keyboard"		activate	end tell		tell me to activate		try		set dialogReply to display dialog �			"In the Input Sources pane of Keyboard Preferences, click + " & �			"to add Keyman, which will be under 'Multiple Languages' in the " & �			�				"list presented to you.

Once you have added Keyman, click OK here to continue." buttons {"OK", "Exit"} �			default button �			"OK" cancel button �			"Exit" with title �			�				�					"Install Keyman for macOS" with icon �			"applet.icns"	on error errText number errNum		if (errNum is equal to -128) then			-- User cancelled.
			dlog("User cancelled at Input Sources")			tell me to quit		end if	end try	   � ���4 	  	 t e l l   a p p l i c a t i o n   " S y s t e m   P r e f e r e n c e s "  	 	 s e t   t h e   c u r r e n t   p a n e   t o   p a n e   i d   " c o m . a p p l e . p r e f e r e n c e . k e y b o a r d "  	 	 #   s e t   r   t o   g e t   t h e   n a m e   o f   e v e r y   a n c h o r   o f   p a n e   i d   " c o m . a p p l e . p r e f e r e n c e . k e y b o a r d "  	 	 r e v e a l   a n c h o r   " I n p u t S o u r c e s "   o f   p a n e   i d   " c o m . a p p l e . p r e f e r e n c e . k e y b o a r d "  	 	 a c t i v a t e  	 e n d   t e l l  	  	 t e l l   m e   t o   a c t i v a t e  	  	 t r y  	 	 s e t   d i a l o g R e p l y   t o   d i s p l a y   d i a l o g   �  	 	 	 " I n   t h e   I n p u t   S o u r c e s   p a n e   o f   K e y b o a r d   P r e f e r e n c e s ,   c l i c k   +   "   &   �  	 	 	 " t o   a d d   K e y m a n ,   w h i c h   w i l l   b e   u n d e r   ' M u l t i p l e   L a n g u a g e s '   i n   t h e   "   &   �  	 	 	 �  	 	 	 	 " l i s t   p r e s e n t e d   t o   y o u . 
 
 O n c e   y o u   h a v e   a d d e d   K e y m a n ,   c l i c k   O K   h e r e   t o   c o n t i n u e . "   b u t t o n s   { " O K " ,   " E x i t " }   �  	 	 	 d e f a u l t   b u t t o n   �  	 	 	 " O K "   c a n c e l   b u t t o n   �  	 	 	 " E x i t "   w i t h   t i t l e   �  	 	 	 �  	 	 	 	 �  	 	 	 	 	 " I n s t a l l   K e y m a n   f o r   m a c O S "   w i t h   i c o n   �  	 	 	 " a p p l e t . i c n s "  	 o n   e r r o r   e r r T e x t   n u m b e r   e r r N u m  	 	 i f   ( e r r N u m   i s   e q u a l   t o   - 1 2 8 )   t h e n  	 	 	 - -   U s e r   c a n c e l l e d . 
 	 	 	 d l o g ( " U s e r   c a n c e l l e d   a t   I n p u t   S o u r c e s " )  	 	 	 t e l l   m e   t o   q u i t  	 	 e n d   i f  	 e n d   t r y  	� ��� l     ��������  ��  ��  � ��� l     ��������  ��  ��  � ��� l     ������  �  	 Success!   � ���    S u c c e s s !� ��� l     ��������  ��  ��  � ��� l     ��������  ��  ��  � ��� l  ������� I  �����
�� .sysodlogaskr        TEXT� b   �	��� b   ���� b   ���� b   � ���� m   � ��� ��� � K e y m a n   h a s   b e e n   s u c c e s s f u l l y   i n s t a l l e d ! 
 
 Y o u   c a n   n o w   s e l e c t   K e y m a n   f r o m   t h e  � l 	 � ������� m   � ��� ��� p I n p u t   S o u r c e s   m e n u   i n   t h e   m e n u   b a r ,   u p   n e a r   t h e   c l o c k . 
 
��  ��  � l 	 � ������ m   � �� ���  Y o u   m a y   b e   p r o m p t e d   t o   a l l o w   K e y m a n   t o   m o n i t o r   i n p u t ;   w h e n   p r o m p t e d ,   f o l l o w   t h e   i n s t r u c t i o n s   o n   s c r e e n   t o   a l l o w   K e y m a n   t o   r u n . 
 
��  ��  � l 	������ m  �� ��� � W h e n   r e a d y ,   s e l e c t   K e y m a n   f r o m   t h e   I n p u t   S o u r c e s   m e n u ,   t h e n   o p e n   t h e  ��  ��  � l 	������ l 	������ m  �� ��� � I n p u t   S o u r c e s   m e n u   o n c e   m o r e   a n d   s e l e c t   K e y m a n   C o n f i g u r a t i o n   t o   a d d   y o u r   f i r s t   k e y b o a r d .��  ��  ��  ��  � ����
�� 
btns� J  
�� ���� m  
�� ���  O K��  � �����
�� 
disp� m  �� ���  a p p l e t . i c n s��  ��  ��  � ��� l     ��������  ��  ��  � ��� l "������ I  "������� 0 dlog  � ���� m  �� ��� > # # #   S u c c e s s f u l   i n s t a l l a t i o n   # # #��  ��  ��  ��  � ��� l     ��������  ��  ��  � ��� l #-������ O #-��� I ',������
�� .aevtquitnull��� ��� null��  ��  �  f  #$��  ��  � ���� l     ������  �   display alert r   � ���     d i s p l a y   a l e r t   r��   ? ��� l     ��������  ��  ��  � ��� l   ������ I   �����
�� .aevtoappnull  �   � ****� o    ���� 0 installkeyman installKeyman��  ��  ��  � ��� l     ��������  ��  ��  � ��� l     ������  � 9 3 From: https://stackoverflow.com/a/21341372/1836776   � ��� f   F r o m :   h t t p s : / / s t a c k o v e r f l o w . c o m / a / 2 1 3 4 1 3 7 2 / 1 8 3 6 7 7 6� ��� l     ������  � x r Logs a text representation of the specified object or objects, which may be of any type, typically for debugging.   � ��� �   L o g s   a   t e x t   r e p r e s e n t a t i o n   o f   t h e   s p e c i f i e d   o b j e c t   o r   o b j e c t s ,   w h i c h   m a y   b e   o f   a n y   t y p e ,   t y p i c a l l y   f o r   d e b u g g i n g .� ��� l     ������  � J D Works hard to find a meaningful text representation of each object.   � ��� �   W o r k s   h a r d   t o   f i n d   a   m e a n i n g f u l   t e x t   r e p r e s e n t a t i o n   o f   e a c h   o b j e c t .� ��� l     ������  �  	 SYNOPSIS   � ���    S Y N O P S I S� ��� l     ������  � $    dlog(anyObjOrListOfObjects)   � ��� <       d l o g ( a n y O b j O r L i s t O f O b j e c t s )�    l     ����     USE EXAMPLES    �    U S E   E X A M P L E S  l     ����   ( "   dlog("before")  # single object    �		 D       d l o g ( " b e f o r e " )     #   s i n g l e   o b j e c t 

 l     ����   E ?     dlog({ "front window: ", front window }) # list of objects    � ~           d l o g ( {   " f r o n t   w i n d o w :   " ,   f r o n t   w i n d o w   } )   #   l i s t   o f   o b j e c t s  l     ����     SETUP    �    S E T U P  l     ����   � �   At the top of your script, define global variable DLOG_TARGETS and set it to a *list* of targets (even if you only have 1 target).    �
       A t   t h e   t o p   o f   y o u r   s c r i p t ,   d e f i n e   g l o b a l   v a r i a b l e   D L O G _ T A R G E T S   a n d   s e t   i t   t o   a   * l i s t *   o f   t a r g e t s   ( e v e n   i f   y o u   o n l y   h a v e   1   t a r g e t ) .  l     ����   u o     set DLOG_TARGETS to {} # must be a list with any combination of: "log", "syslog", "alert", <posixFilePath>    � �           s e t   D L O G _ T A R G E T S   t o   { }   #   m u s t   b e   a   l i s t   w i t h   a n y   c o m b i n a t i o n   o f :   " l o g " ,   " s y s l o g " ,   " a l e r t " ,   < p o s i x F i l e P a t h >  l     �� !��    A ;   An *empty* list means that logging should be *disabled*.   ! �"" v       A n   * e m p t y *   l i s t   m e a n s   t h a t   l o g g i n g   s h o u l d   b e   * d i s a b l e d * . #$# l     ��%&��  % j d   If you specify a POSIX file path, the file will be *appended* to; variable references in the path   & �'' �       I f   y o u   s p e c i f y   a   P O S I X   f i l e   p a t h ,   t h e   f i l e   w i l l   b e   * a p p e n d e d *   t o ;   v a r i a b l e   r e f e r e n c e s   i n   t h e   p a t h$ ()( l     ��*+��  * ^ X   are allowed, and as a courtesy the path may start with "~" to refer to your home dir.   + �,, �       a r e   a l l o w e d ,   a n d   a s   a   c o u r t e s y   t h e   p a t h   m a y   s t a r t   w i t h   " ~ "   t o   r e f e r   t o   y o u r   h o m e   d i r .) -.- l     ��/0��  / ~ x   Caveat: while you can *remove* the variable definition to disable logging, you'll take an additional performance hit.   0 �11 �       C a v e a t :   w h i l e   y o u   c a n   * r e m o v e *   t h e   v a r i a b l e   d e f i n i t i o n   t o   d i s a b l e   l o g g i n g ,   y o u ' l l   t a k e   a n   a d d i t i o n a l   p e r f o r m a n c e   h i t .. 232 l     ��45��  4   SETUP EXAMPLES   5 �66    S E T U P   E X A M P L E S3 787 l     ��9:��  9 ] W    For instance, to use both AppleScript's log command *and* display a GUI alert, use:   : �;; �         F o r   i n s t a n c e ,   t o   u s e   b o t h   A p p l e S c r i p t ' s   l o g   c o m m a n d   * a n d *   d i s p l a y   a   G U I   a l e r t ,   u s e :8 <=< l     ��>?��  > 3 -       set DLOG_TARGETS to { "log", "alert" }   ? �@@ Z               s e t   D L O G _ T A R G E T S   t o   {   " l o g " ,   " a l e r t "   }= ABA l     ��CD��  C   Note:    D �EE    N o t e :  B FGF l     ��HI��  H Y S   - Since the subroutine is still called even when DLOG_TARGETS is an empty list,    I �JJ �       -   S i n c e   t h e   s u b r o u t i n e   i s   s t i l l   c a l l e d   e v e n   w h e n   D L O G _ T A R G E T S   i s   a n   e m p t y   l i s t ,  G KLK l     ��MN��  M O I     you pay a performancy penalty for leaving dlog() calls in your code.   N �OO �           y o u   p a y   a   p e r f o r m a n c y   p e n a l t y   f o r   l e a v i n g   d l o g ( )   c a l l s   i n   y o u r   c o d e .L PQP l     ��RS��  R ` Z   - Unlike with the built-in log() method, you MUST use parentheses around the parameter.   S �TT �       -   U n l i k e   w i t h   t h e   b u i l t - i n   l o g ( )   m e t h o d ,   y o u   M U S T   u s e   p a r e n t h e s e s   a r o u n d   t h e   p a r a m e t e r .Q UVU l     ��WX��  W o i   - To specify more than one object, pass a *list*. Note that while you could try to synthesize a single   X �YY �       -   T o   s p e c i f y   m o r e   t h a n   o n e   o b j e c t ,   p a s s   a   * l i s t * .   N o t e   t h a t   w h i l e   y o u   c o u l d   t r y   t o   s y n t h e s i z e   a   s i n g l eV Z[Z l     ��\]��  \ q k     output string by concatenation yourself, you'd lose the benefit of this subroutine's ability to derive   ] �^^ �           o u t p u t   s t r i n g   b y   c o n c a t e n a t i o n   y o u r s e l f ,   y o u ' d   l o s e   t h e   b e n e f i t   o f   t h i s   s u b r o u t i n e ' s   a b i l i t y   t o   d e r i v e[ _`_ l     ��ab��  a g a     readable text representations even of objects that can't simply be converted with `as text`.   b �cc �           r e a d a b l e   t e x t   r e p r e s e n t a t i o n s   e v e n   o f   o b j e c t s   t h a t   c a n ' t   s i m p l y   b e   c o n v e r t e d   w i t h   ` a s   t e x t ` .` d��d i    efe I      ��g���� 0 dlog  g h��h o      ���� .0 anyobjorlistofobjects anyObjOrListOfObjects��  ��  f k    �ii jkj p      ll ������ 0 dlog_targets DLOG_TARGETS��  k mnm Q     opqo Z   rs����r =   tut n    vwv 1    ��
�� 
lengw o    ���� 0 dlog_targets DLOG_TARGETSu m    ����  s L    ����  ��  ��  p R      ������
�� .ascrerr ****      � ****��  ��  q L    ����  n xyx l   ��z{��  z ] W The following tries hard to derive a readable representation from the input object(s).   { �|| �   T h e   f o l l o w i n g   t r i e s   h a r d   t o   d e r i v e   a   r e a d a b l e   r e p r e s e n t a t i o n   f r o m   t h e   i n p u t   o b j e c t ( s ) .y }~} Z   -���~ >   !��� n    ��� m    �}
�} 
pcls� o    �|�| .0 anyobjorlistofobjects anyObjOrListOfObjects� m     �{
�{ 
list� r   $ )��� J   $ '�� ��z� o   $ %�y�y .0 anyobjorlistofobjects anyObjOrListOfObjects�z  � o      �x�x .0 anyobjorlistofobjects anyObjOrListOfObjects�  �~  ~ ��� q   . .�� �w��w 0 lst  � �v��v 0 i  � �u��u 0 txt  � �t��t 0 errmsg errMsg� �s��s 0 orgtids orgTids� �r��r 0 oname oName� �q��q 
0 oid oId� �p��p 
0 prefix  � �o��o 0 	logtarget 	logTarget� �n��n 0 txtcombined txtCombined� �m��m 0 
prefixtime 
prefixTime� �l�k�l  0 prefixdatetime prefixDateTime�k  � ��� r   . 2��� J   . 0�j�j  � o      �i�i 0 lst  � ��� X   3���h�� k   C��� ��� r   C F��� m   C D�� ���  � o      �g�g 0 txt  � ��� Y   G ���f���e� k   Q ��� ��� Q   Q ����� Z   T ����d�� =  T W��� o   T U�c�c 0 i  � m   U V�b�b � Z   Z ����a�� =  Z _��� n   Z ]��� m   [ ]�`
�` 
pcls� o   Z [�_�_ 0 anyobj anyObj� m   ] ^�^
�^ 
list� k   b ��� ��� l  b {���� r   b {��� J   b j�� ��� n  b e��� 1   c e�]
�] 
txdl� 1   b c�\
�\ 
ascr� ��[� J   e h�� ��Z� m   e f�� ���  ,  �Z  �[  � J      �� ��� o      �Y�Y 0 orgtids orgTids� ��X� n     ��� 1   w y�W
�W 
txdl� 1   v w�V
�V 
ascr�X  �   '   � ���    '� ��� r   | ���� b   | ���� l  | ���U�T� c   | ���� b   | ��� m   | }�� ���  {� o   } ~�S�S 0 anyobj anyObj� m    ��R
�R 
TEXT�U  �T  � m   � ��� ���  }� o      �Q�Q 0 txt  � ��P� l  � ����� r   � ���� o   � ��O�O 0 orgtids orgTids� n     ��� 1   � ��N
�N 
txdl� 1   � ��M
�M 
ascr�   '   � ���    '�P  �a  � r   � ���� c   � ���� o   � ��L�L 0 anyobj anyObj� m   � ��K
�K 
TEXT� o      �J�J 0 txt  �d  � r   � ���� c   � ���� n   � ���� 1   � ��I
�I 
pALL� o   � ��H�H 0 anyobj anyObj� m   � ��G
�G 
TEXT� o      �F�F 0 txt  � R      �E��D
�E .ascrerr ****      � ****� o      �C�C 0 errmsg errMsg�D  � k   � ��� ��� l  � ��B���B  � 3 - Trick for records and record-*like* objects:   � ��� Z   T r i c k   f o r   r e c o r d s   a n d   r e c o r d - * l i k e *   o b j e c t s :� � � l  � ��A�A   � � We exploit the fact that the error message contains the desired string representation of the record, so we extract it from there. This (still) works as of AS 2.3 (OS X 10.9).    �^   W e   e x p l o i t   t h e   f a c t   t h a t   t h e   e r r o r   m e s s a g e   c o n t a i n s   t h e   d e s i r e d   s t r i n g   r e p r e s e n t a t i o n   o f   t h e   r e c o r d ,   s o   w e   e x t r a c t   i t   f r o m   t h e r e .   T h i s   ( s t i l l )   w o r k s   a s   o f   A S   2 . 3   ( O S   X   1 0 . 9 ) .  �@ Q   � ��? r   � � I  � ��>	�=
�> .sysoexecTEXT���     TEXT	 b   � �

 m   � � � , e g r e p   - o   ' \ { . * \ } '   < < <   n   � � 1   � ��<
�< 
strq o   � ��;�; 0 errmsg errMsg�=   o      �:�: 0 txt   R      �9�8�7
�9 .ascrerr ****      � ****�8  �7  �?  �@  � �6 Z  � ��5�4 >  � � o   � ��3�3 0 txt   m   � � �    S   � ��5  �4  �6  �f 0 i  � m   J K�2�2 � m   K L�1�1 �e  �  r   � � m   � � �   o      �0�0 
0 prefix    Z   �� �/�. F   �!"! H   � �## E  � �$%$ J   � �&& '(' m   � ��-
�- 
ctxt( )*) m   � ��,
�, 
long* +,+ m   � ��+
�+ 
doub, -.- m   � ��*
�* 
bool. /0/ m   � ��)
�) 
ldt 0 121 m   � ��(
�( 
list2 3�'3 m   � ��&
�& 
reco�'  % n   � �454 m   � ��%
�% 
pcls5 o   � ��$�$ 0 anyobj anyObj" >  � 676 o   � ��#�# 0 anyobj anyObj7 m   � ��"
�" 
msng  k  �88 9:9 r  ;<; b  =>= m  
?? �@@  [> n  
ABA m  �!
�! 
pclsB o  
� �  0 anyobj anyObj< o      �� 
0 prefix  : CDC r  EFE m  GG �HH  F o      �� 0 oname oNameD IJI r  KLK m  MM �NN  L o      �� 
0 oid oIdJ OPO Q  JQR�Q k   ASS TUT r   'VWV n   %XYX 1  !%�
� 
pnamY o   !�� 0 anyobj anyObjW o      �� 0 oname oNameU Z�Z Z (A[\��[ > (-]^] o  ()�� 0 oname oName^ m  ),�
� 
msng\ r  0=_`_ b  0;aba b  07cdc b  05efe o  01�� 
0 prefix  f m  14gg �hh    n a m e = "d o  56�� 0 oname oNameb m  7:ii �jj  "` o      �� 
0 prefix  �  �  �  R R      ���
� .ascrerr ****      � ****�  �  �  P klk Q  Ktmn�m k  Nkoo pqp r  NUrsr n  NStut 1  OS�
� 
ID  u o  NO�� 0 anyobj anyObjs o      �
�
 
0 oid oIdq v�	v Z Vkwx��w > V[yzy o  VW�� 
0 oid oIdz m  WZ�
� 
msngx r  ^g{|{ b  ^e}~} b  ^c� o  ^_�� 
0 prefix  � m  _b�� ���    i d =~ o  cd�� 
0 oid oId| o      �� 
0 prefix  �  �  �	  n R      �� ��
� .ascrerr ****      � ****�   ��  �  l ��� r  u|��� b  uz��� o  uv���� 
0 prefix  � m  vy�� ���  ]  � o      ���� 
0 prefix  � ���� r  }���� b  }���� o  }~���� 
0 prefix  � o  ~���� 0 txt  � o      ���� 0 txt  ��  �/  �.   ���� r  ����� b  ����� o  ������ 0 lst  � o  ������ 0 txt  � o      ���� 0 lst  ��  �h 0 anyobj anyObj� o   6 7���� .0 anyobjorlistofobjects anyObjOrListOfObjects� ��� l ������ r  ����� J  ���� ��� n ����� 1  ����
�� 
txdl� 1  ����
�� 
ascr� ���� J  ���� ���� m  ���� ���   ��  ��  � J      �� ��� o      ���� 0 orgtids orgTids� ���� n     ��� 1  ����
�� 
txdl� 1  ����
�� 
ascr��  �   '   � ���    '� ��� r  ����� c  ����� o  ������ 0 lst  � m  ����
�� 
TEXT� o      ���� 0 txtcombined txtCombined� ��� r  ����� b  ����� b  ����� m  ���� ���  [� n  ����� 1  ����
�� 
tstr� l �������� I ��������
�� .misccurdldt    ��� null��  ��  ��  ��  � m  ���� ���  ]  � o      ���� 0 
prefixtime 
prefixTime� ��� r  ����� b  ����� b  ����� b  ����� m  ���� ���  [� n  ����� 1  ����
�� 
shdt� l �������� I ��������
�� .misccurdldt    ��� null��  ��  ��  ��  � m  ���� ���   � n  ����� 7 ������
�� 
ctxt� m  ������ � m  ��������� o  ������ 0 
prefixtime 
prefixTime� o      ����  0 prefixdatetime prefixDateTime� ��� l ������ r  ����� o  ������ 0 orgtids orgTids� n     ��� 1  ����
�� 
txdl� 1  ����
�� 
ascr�   '   � ���    '� ��� l ��������  � 0 * Log the result to every target specified.   � ��� T   L o g   t h e   r e s u l t   t o   e v e r y   t a r g e t   s p e c i f i e d .� ���� X  ������� Z   ������ =  	��� n   ��� 1  ��
�� 
pcnt� o   ���� 0 	logtarget 	logTarget� m  �� ���  l o g� I �����
�� .ascrcmnt****      � ****� b  ��� o  ���� 0 
prefixtime 
prefixTime� o  ���� 0 txtcombined txtCombined��  � ��� = ��� n  ��� 1  ��
�� 
pcnt� o  ���� 0 	logtarget 	logTarget� m  �� ��� 
 a l e r t� ��� I ")�� ��
�� .sysodisAaleR        TEXT  b  "% o  "#���� 0 
prefixtime 
prefixTime o  #$���� 0 txtcombined txtCombined��  �  = ,5 n  ,1 1  -1��
�� 
pcnt o  ,-���� 0 	logtarget 	logTarget m  14		 �

  s y s l o g �� k  8[  l 88����   m g display alert "logger -t " & quoted form of ("AS: " & (name of me)) & " " & quoted form of txtCombined    � �   d i s p l a y   a l e r t   " l o g g e r   - t   "   &   q u o t e d   f o r m   o f   ( " A S :   "   &   ( n a m e   o f   m e ) )   &   "   "   &   q u o t e d   f o r m   o f   t x t C o m b i n e d  r  8Y I 8W����
�� .sysoexecTEXT���     TEXT b  8S b  8M b  8I m  8; �  l o g g e r   - t   n  ;H  1  DH��
�� 
strq  l ;D!����! b  ;D"#" m  ;>$$ �%%  A S :  # l >C&����& n  >C'(' 1  ?C��
�� 
pnam(  f  >?��  ��  ��  ��   m  IL)) �**    n  MR+,+ 1  NR��
�� 
strq, o  MN���� 0 txtcombined txtCombined��   o      ���� 0 res   -��- l ZZ��./��  .   display alert res   / �00 $   d i s p l a y   a l e r t   r e s��  ��  � l ^�1231 k  ^�44 565 r  ^e787 n  ^c9:9 1  _c��
�� 
pcnt: o  ^_���� 0 	logtarget 	logTarget8 o      ���� 	0 fpath  6 ;<; Z f�=>����= C  fk?@? o  fg���� 	0 fpath  @ m  gjAA �BB  ~ /> r  n�CDC b  nEFE m  nqGG �HH  $ H O M E /F n  q~IJI 7 r~��KL
�� 
ctxtK m  xz���� L m  {}������J o  qr���� 	0 fpath  D o      ���� 	0 fpath  ��  ��  < M��M I ����N��
�� .sysoexecTEXT���     TEXTN b  ��OPO b  ��QRQ b  ��STS b  ��UVU m  ��WW �XX  p r i n t f   ' % s \ n '  V n  ��YZY 1  ����
�� 
strqZ l ��[����[ b  ��\]\ o  ������  0 prefixdatetime prefixDateTime] o  ������ 0 txtcombined txtCombined��  ��  T m  ��^^ �__ 
   > >   "R o  ������ 	0 fpath  P m  ��`` �aa  "��  ��  2 6 0 assumed to be a POSIX file path to *append* to.   3 �bb `   a s s u m e d   t o   b e   a   P O S I X   f i l e   p a t h   t o   * a p p e n d *   t o .�� 0 	logtarget 	logTarget� o  ������ 0 dlog_targets DLOG_TARGETS��  ��       ��cdef��  c �������� 0 installkeyman installKeyman�� 0 dlog  
�� .aevtoappnull  �   � ****d �� @  g�� 0 installkeyman installKeymang  hih ��
�� .aevtoappnull  �   � ****i ��j����kl��
�� .aevtoappnull  �   � ****j k    -mm  Onn  Voo  �pp  �qq  �rr  �ss  �tt  �uu  �vv  �ww xx yy zz 0{{ 7|| ?}} k~~ r {�� ��� ��� ��� �����  ��  ��  k �������������� 0 dialogreply dialogReply�� 0 errtext errText�� 0 errnum errNum�� 0 scriptresult scriptResult�� "0 scriptcontainer scriptContainer�� 0 cmd  l 0 T�� i�� q t�� y�� ~�� ��� ���������� ��� � ��� � �������~�}	5=py��������|��� 0 dlog  
�� 
btns
�� 
dflt
�� 
cbtn
�� 
appr
�� 
disp�� 

�� .sysodlogaskr        TEXT�� 0 errtext errText� �{�z�y
�{ 
errn�z 0 errnum errNum�y  ����
�� .aevtquitnull��� ��� null
�� .sysoexecTEXT���     TEXT
�� misccura
�� .earsffdralis        afdr
� 
psxp
�~ 
strq
�} 
TEXT�| ��.*�k+ O ����lv��������� E�OPW &X  �a   *a k+ O) *j UY hO*a k+ Oa j E�O*�k+ O*a k+ Oa j E�O*�k+ Oa j a ,a ,a &E�O*a �%a  %k+ Oa !�%a "%E�O�j E�O*�k+ O*a #k+ Oa $j E�O*�k+ O*a %k+ O�a &%E�O�j E�O*�k+ Oa 'a (%a )%a *%a +%�a ,kv�a -a . O*a /k+ O) *j Ue �xf�w�v���u�x 0 dlog  �w �t��t �  �s�s .0 anyobjorlistofobjects anyObjOrListOfObjects�v  � �r�q�p�o�n�m�l�k�j�i�h�g�f�e�d�c�r .0 anyobjorlistofobjects anyObjOrListOfObjects�q 0 lst  �p 0 i  �o 0 txt  �n 0 errmsg errMsg�m 0 orgtids orgTids�l 0 oname oName�k 
0 oid oId�j 
0 prefix  �i 0 	logtarget 	logTarget�h 0 txtcombined txtCombined�g 0 
prefixtime 
prefixTime�f  0 prefixdatetime prefixDateTime�e 0 anyobj anyObj�d 0 res  �c 	0 fpath  � >�b�a�`�_�^�]�\�[�Z��Y�X���W��V�U�T�S�R�Q�P�O�N�M�L�K?GM�Jgi�I�����H�G���F��E��D��C	$)AGW^`�b 0 dlog_targets DLOG_TARGETS
�a 
leng�`  �_  
�^ 
pcls
�] 
list
�\ 
kocl
�[ 
cobj
�Z .corecnte****       ****
�Y 
ascr
�X 
txdl
�W 
TEXT
�V 
pALL�U 0 errmsg errMsg
�T 
strq
�S .sysoexecTEXT���     TEXT
�R 
ctxt
�Q 
long
�P 
doub
�O 
bool
�N 
ldt 
�M 
reco�L 
�K 
msng
�J 
pnam
�I 
ID  
�H .misccurdldt    ��� null
�G 
tstr
�F 
shdt
�E 
pcnt
�D .ascrcmnt****      � ****
�C .sysodisAaleR        TEXT�u� ��,j  hY hW 	X  hO��,� 
�kvE�Y hOjvE�O]�[��l kh �E�O �klkh  P�k  >��,�  .��,�kvlvE[�k/E�Z[�l/��,FZO��%�&�%E�O���,FY ��&E�Y �a ,�&E�W "X   a �a ,%j E�W X  hO�a  Y h[OY�{Oa E�Oa a a a a �a a v��,	 �a a & �a ��,%E�Oa  E�Oa !E�O &�a ",E�O�a  �a #%�%a $%E�Y hW X  hO "�a %,E�O�a  �a &%�%E�Y hW X  hO�a '%E�O��%E�Y hO��%E�[OY��O��,a (kvlvE[�k/E�Z[�l/��,FZO��&E�Oa )*j *a +,%a ,%E�Oa -*j *a .,%a /%�[a \[Zl\Zi2%E�O���,FO ��[��l kh 	�a 0,a 1  ��%j 2Y ��a 0,a 3  ��%j 4Y u�a 0,a 5  (a 6a 7)a ",%a ,%a 8%�a ,%j E�OPY C�a 0,E�O�a 9 a :�[a \[Zm\Zi2%E�Y hOa ;��%a ,%a <%�%a =%j [OY�[f �B��A�@���?
�B .aevtoappnull  �   � ****� k     ��  3�� ��>�>  �A  �@  �  �  :�=�<�= 0 dlog_targets DLOG_TARGETS
�< .aevtoappnull  �   � ****�? �kvE�Ob   j  ascr  ��ޭ