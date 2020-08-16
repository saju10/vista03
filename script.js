(function(){
    var script = {
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_E1326FC2_F69E_404F_41D9_CD1E297F51A3], 'cardboardAvailable'); this.syncPlaylists([this.ThumbnailList_F85CFFB3_F59E_40CC_41E5_39996A6AB97F_playlist,this.mainPlayList])",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  {
   "horizontalAlign": "center",
   "scrollBarOpacity": 0.5,
   "left": "0%",
   "children": [
    "this.Container_5645B517_5EBA_61DA_41CE_5170204AEC9E"
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0,
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "borderRadius": 0,
   "minHeight": 1,
   "scrollBarWidth": 10,
   "propagateClick": false,
   "paddingRight": 0,
   "bottom": "0%",
   "height": 142,
   "verticalAlign": "middle",
   "minWidth": 1,
   "layout": "horizontal",
   "class": "Container",
   "paddingTop": 0,
   "paddingBottom": 0,
   "gap": 10,
   "borderSize": 0,
   "paddingLeft": 0,
   "contentOpaque": false,
   "scrollBarColor": "#000000",
   "data": {
    "name": "Container44746"
   },
   "shadow": false
  },
  "this.ThumbnailList_F85CFFB3_F59E_40CC_41E5_39996A6AB97F",
  "this.IconButton_E1326FC2_F69E_404F_41D9_CD1E297F51A3",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "duration": 1000,
 "id": "effect_E7445F50_F5B2_404B_41D2_772BE8ABE3E7",
 "class": "FadeOutEffect",
 "easing": "cubic_in_out"
},
{
 "initialPosition": {
  "yaw": 170.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_EF55669E_F676_40F7_41C7_9517644D6F36",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_FEC33102_F593_C1CC_41E8_41AA5862F850",
   "camera": "this.panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FFCED060_F592_404B_41B2_249721CCC3C3",
   "end": "this.setComponentVisibility(this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2, true, -1, this.effect_E4C6A381_F5B2_C0CD_41D3_ECCC6B923758, 'showEffect', false)",
   "start": "this.keepComponentVisibility(this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2, true)",
   "camera": "this.panorama_FFCED060_F592_404B_41B2_249721CCC3C3_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2); this.keepComponentVisibility(this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2, false); this.setComponentVisibility(this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2, false, -1, this.effect_E7445F50_F5B2_404B_41D2_772BE8ABE3E7, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7",
   "camera": "this.panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FFC295DF_F592_4075_41EE_2CE718DB0960",
   "camera": "this.panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_camera",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "01 Entry1",
 "hfovMin": "135%",
 "id": "panorama_FFCED060_F592_404B_41B2_249721CCC3C3",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E35A4C50_F693_C04C_41EC_A5C31A212947",
  "this.overlay_E31E0779_F692_403D_41E9_E72380C8F8E8",
  "this.overlay_E10D5ED4_F696_404B_41D9_7C7757B849F4",
  "this.popup_E11FD6F0_F697_C04B_41E9_F2DEF2798152"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 103.44,
   "yaw": 169.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7"
  },
  {
   "backwardYaw": -45.03,
   "yaw": -0.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FEC33102_F593_C1CC_41E8_41AA5862F850"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_t.jpg",
 "hfovMax": 130
},
{
 "autoplay": true,
 "audio": {
  "oggUrl": "media/audio_EE1E1862_F68E_404F_41E9_24D012EDB2C3.ogg",
  "mp3Url": "media/audio_EE1E1862_F68E_404F_41E9_24D012EDB2C3.mp3",
  "class": "AudioResource"
 },
 "id": "audio_EE1E1862_F68E_404F_41E9_24D012EDB2C3",
 "data": {
  "label": "Pigeon Home"
 },
 "class": "PanoramaAudio"
},
{
 "initialPosition": {
  "yaw": 162.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_EC8776C1_F676_404D_41CD_FB458BDA435D",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "duration": 1000,
 "id": "effect_E4C6A381_F5B2_C0CD_41D3_ECCC6B923758",
 "class": "FadeInEffect",
 "easing": "cubic_in_out"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": -100.62,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_E11FD6F0_F697_C04B_41E9_F2DEF2798152",
 "image": {
  "levels": [
   {
    "url": "media/popup_E11FD6F0_F697_C04B_41E9_F2DEF2798152_0_0.jpg",
    "width": 1000,
    "class": "ImageResourceLevel",
    "height": 580
   },
   {
    "url": "media/popup_E11FD6F0_F697_C04B_41E9_F2DEF2798152_0_1.jpg",
    "width": 512,
    "class": "ImageResourceLevel",
    "height": 296
   }
  ],
  "class": "ImageResource"
 },
 "pitch": 11.44,
 "hideEasing": "cubic_out",
 "hfov": 10.34
},
{
 "initialPosition": {
  "yaw": -76.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E13396F8_F676_403B_41D4_7237FF8B12F0",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 134.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_E1360705_F676_41D5_41EA_CC1A54723320",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "buttonZoomOut": "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
 "buttonMoveDown": "this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonMoveLeft": "this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "class": "PanoramaPlayer",
 "buttonZoomIn": "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
 "buttonPlayLeft": "this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
 "buttonPause": "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
 "buttonPlayRight": "this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveRight": "this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
 "buttonCardboardView": "this.IconButton_E1326FC2_F69E_404F_41D9_CD1E297F51A3",
 "buttonRestart": "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
 "buttonMoveUp": "this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
 "displayPlaybackBar": true
},
{
 "items": [
  {
   "media": "this.panorama_FEC33102_F593_C1CC_41E8_41AA5862F850",
   "camera": "this.panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F85CFFB3_F59E_40CC_41E5_39996A6AB97F_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FFCED060_F592_404B_41B2_249721CCC3C3",
   "end": "this.setComponentVisibility(this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2, true, -1, this.effect_E4C6A381_F5B2_C0CD_41D3_ECCC6B923758, 'showEffect', false)",
   "start": "this.keepComponentVisibility(this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2, true)",
   "camera": "this.panorama_FFCED060_F592_404B_41B2_249721CCC3C3_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F85CFFB3_F59E_40CC_41E5_39996A6AB97F_playlist, 1, 2); this.keepComponentVisibility(this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2, false); this.setComponentVisibility(this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2, false, -1, this.effect_E7445F50_F5B2_404B_41D2_772BE8ABE3E7, 'hideEffect', false)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7",
   "camera": "this.panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F85CFFB3_F59E_40CC_41E5_39996A6AB97F_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_FFC295DF_F592_4075_41EE_2CE718DB0960",
   "camera": "this.panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F85CFFB3_F59E_40CC_41E5_39996A6AB97F_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "media": "this.panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F",
   "camera": "this.panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_camera",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_F85CFFB3_F59E_40CC_41E5_39996A6AB97F_playlist, 4, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_F85CFFB3_F59E_40CC_41E5_39996A6AB97F_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": 170.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_EF7706B6_F676_4037_41E4_E7CFDA2A06CE",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "00 Garden",
 "hfovMin": "135%",
 "id": "panorama_FEC33102_F593_C1CC_41E8_41AA5862F850",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E2AA666D_F692_4055_41D7_59162961D552"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.07,
   "yaw": -45.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FFCED060_F592_404B_41B2_249721CCC3C3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_t.jpg",
 "hfovMax": 130
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "03 Kitchen Outside",
 "hfovMin": "135%",
 "id": "panorama_FFC295DF_F592_4075_41EE_2CE718DB0960",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E3EC90B9_F696_403D_41E3_3FA6846BC97C",
  "this.overlay_E070ABB0_F691_C0CB_41DB_E5B73BF9D5A4",
  "this.overlay_EE1E9C22_F68E_47CF_41ED_3CE746F5BF45",
  "this.popup_EE847AB4_F68E_C0CB_41ED_12ED80A44367"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.86,
   "yaw": 172.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7"
  },
  {
   "backwardYaw": -17.15,
   "yaw": -9.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_t.jpg",
 "hfovMax": 130
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_FFCED060_F592_404B_41B2_249721CCC3C3_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/f/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/u/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/r/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/b/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/d/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/l/0/{row}_{column}.jpg",
      "colCount": 4,
      "height": 2048,
      "width": 2048,
      "tags": "ondemand",
      "rowCount": 4,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "02 Outside Stairs",
 "hfovMin": "135%",
 "id": "panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E3158048_F691_C05C_41DA_28EDDCE48212",
  "this.overlay_E0F49931_F696_41CC_41E0_AA8F11467C38",
  "this.overlay_E1FC15D5_F691_C075_41EB_B87ABFC462BD"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": 172.02,
   "yaw": -9.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FFC295DF_F592_4075_41EE_2CE718DB0960"
  },
  {
   "backwardYaw": 169.26,
   "yaw": 103.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FFCED060_F592_404B_41B2_249721CCC3C3"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "vfov": 180,
 "thumbnailUrl": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_t.jpg",
 "hfovMax": 130
},
{
 "levels": [
  {
   "url": "media/popup_EE847AB4_F68E_C0CB_41ED_12ED80A44367_0_0.png",
   "width": 12500,
   "class": "ImageResourceLevel",
   "height": 6250
  },
  {
   "url": "media/popup_EE847AB4_F68E_C0CB_41ED_12ED80A44367_0_1.png",
   "width": 8192,
   "class": "ImageResourceLevel",
   "height": 4096
  },
  {
   "url": "media/popup_EE847AB4_F68E_C0CB_41ED_12ED80A44367_0_2.png",
   "width": 4096,
   "class": "ImageResourceLevel",
   "height": 2048
  },
  {
   "url": "media/popup_EE847AB4_F68E_C0CB_41ED_12ED80A44367_0_3.png",
   "width": 2048,
   "class": "ImageResourceLevel",
   "height": 1024
  },
  {
   "url": "media/popup_EE847AB4_F68E_C0CB_41ED_12ED80A44367_0_4.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 512
  },
  {
   "url": "media/popup_EE847AB4_F68E_C0CB_41ED_12ED80A44367_0_5.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 256
  }
 ],
 "id": "ImageResource_EC58E979_F68E_C03C_41EA_E1A7DA27CDB6",
 "class": "ImageResource"
},
{
 "hideDuration": 500,
 "rotationX": 0,
 "yaw": 89.06,
 "rotationZ": 0,
 "showEasing": "cubic_in",
 "rotationY": 0,
 "showDuration": 500,
 "popupMaxWidth": "95%",
 "popupDistance": 100,
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "id": "popup_EE847AB4_F68E_C0CB_41ED_12ED80A44367",
 "image": {
  "levels": [
   {
    "url": "media/popup_EE847AB4_F68E_C0CB_41ED_12ED80A44367_0_4.png",
    "width": 1024,
    "class": "ImageResourceLevel",
    "height": 512
   }
  ],
  "class": "ImageResource"
 },
 "pitch": -0.44,
 "hideEasing": "cubic_out",
 "hfov": 7.54
},
{
 "shadowVerticalLength": 0,
 "titleFontColor": "#000000",
 "horizontalAlign": "center",
 "titleFontFamily": "Arial",
 "id": "window_E137D4C2_F692_404F_41E7_553E4A482D37",
 "backgroundOpacity": 1,
 "width": 400,
 "closeButtonIconHeight": 12,
 "titlePaddingTop": 5,
 "overflow": "scroll",
 "scrollBarMargin": 2,
 "closeButtonRollOverBackgroundColor": [
  "#C13535"
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "minHeight": 20,
 "veilColorDirection": "horizontal",
 "propagateClick": false,
 "modal": true,
 "scrollBarWidth": 10,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "verticalAlign": "middle",
 "shadowHorizontalLength": 3,
 "paddingRight": 0,
 "titleFontWeight": "normal",
 "showEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "minWidth": 20,
 "backgroundColor": [],
 "bodyBackgroundOpacity": 1,
 "borderSize": 0,
 "class": "Window",
 "height": 600,
 "headerPaddingRight": 10,
 "titlePaddingLeft": 5,
 "title": "This is a title",
 "titleFontStyle": "normal",
 "backgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "bodyPaddingLeft": 5,
 "contentOpaque": false,
 "headerBorderColor": "#000000",
 "footerHeight": 5,
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "headerBackgroundOpacity": 1,
 "scrollBarColor": "#000000",
 "veilShowEffect": {
  "duration": 500,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "shadow": true,
 "bodyBorderSize": 0,
 "shadowBlurRadius": 6,
 "titleTextDecoration": "none",
 "closeButtonBackgroundColorRatios": [],
 "scrollBarOpacity": 0.5,
 "closeButtonIconLineWidth": 2,
 "bodyPaddingTop": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "layout": "vertical",
 "children": [
  "this.htmlText_E13014C2_F692_404F_41B8_9C3D0C46F4E4"
 ],
 "scrollBarVisible": "rollOver",
 "shadowColor": "#000000",
 "shadowOpacity": 0.5,
 "closeButtonRollOverIconColor": "#FFFFFF",
 "borderRadius": 5,
 "headerPaddingTop": 10,
 "veilColorRatios": [
  0,
  1
 ],
 "titleFontSize": "1.29vmin",
 "closeButtonBorderRadius": 11,
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "backgroundColorRatios": [],
 "headerBackgroundColorDirection": "vertical",
 "titlePaddingBottom": 5,
 "headerPaddingBottom": 10,
 "titlePaddingRight": 5,
 "footerBackgroundColorDirection": "vertical",
 "veilHideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "closeButtonPressedIconColor": "#FFFFFF",
 "headerBorderSize": 0,
 "closeButtonIconWidth": 12,
 "veilOpacity": 0.4,
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "closeButtonPressedBackgroundColor": [
  "#3A1D1F"
 ],
 "bodyBorderColor": "#000000",
 "gap": 10,
 "paddingTop": 0,
 "paddingBottom": 0,
 "headerPaddingLeft": 10,
 "closeButtonIconColor": "#000000",
 "paddingLeft": 0,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerVerticalAlign": "middle",
 "bodyPaddingRight": 5,
 "bodyPaddingBottom": 5,
 "bodyBackgroundColorDirection": "vertical",
 "shadowSpread": 1,
 "hideEffect": {
  "duration": 500,
  "class": "FadeOutEffect",
  "easing": "cubic_in_out"
 },
 "closeButtonBackgroundColor": [],
 "data": {
  "name": "Window23702"
 }
},
{
 "initialPosition": {
  "yaw": 179.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_EF6556AA_F676_40DF_41E8_D0957E3CC856",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/f/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/f/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/f/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/f/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/u/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/u/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/u/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/u/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/r/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/r/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/r/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/r/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/b/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/b/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/b/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/b/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/d/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/d/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/d/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/d/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/l/0/{row}_{column}.jpg",
      "colCount": 5,
      "height": 2560,
      "width": 2560,
      "tags": "ondemand",
      "rowCount": 5,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/l/1/{row}_{column}.jpg",
      "colCount": 3,
      "height": 1536,
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/l/2/{row}_{column}.jpg",
      "colCount": 2,
      "height": 1024,
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0/l/3/{row}_{column}.jpg",
      "colCount": 1,
      "height": 512,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "label": "Original",
 "hfovMin": "135%",
 "id": "panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F",
 "class": "Panorama",
 "overlays": [
  "this.overlay_E06E4BFF_F692_C035_41D7_11A106A2685A"
 ],
 "partial": false,
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.61,
   "yaw": -17.15,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_FFC295DF_F592_4075_41EE_2CE718DB0960"
  }
 ],
 "hfov": 360,
 "audios": [
  "this.audio_EE1E1862_F68E_404F_41E9_24D012EDB2C3"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_t.jpg",
 "hfovMax": 130,
 "pitch": 0
},
{
 "initialPosition": {
  "yaw": -7.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_EF43F686_F676_40D7_41ED_FCC11F643491",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -10.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_EF4B8692_F676_40CF_41EE_023B68D22F4A",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_camera",
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 4,
 "progressBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 10,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 2,
 "transitionDuration": 500,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "borderSize": 0,
 "class": "ViewerArea",
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowColor": "#000000",
 "toolTipBackgroundColor": "#F6F6F6",
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "progressBottom": 1,
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "progressBorderRadius": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "paddingLeft": 0,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeight": 20,
 "toolTipFontWeight": "normal",
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_5645B517_5EBA_61DA_41CE_5170204AEC9E",
 "backgroundOpacity": 0,
 "width": 360,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
  "this.IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
  "this.IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
  "this.IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
  "this.Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD",
  "this.IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
  "this.IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
  "this.IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
  "this.IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "96.479%",
 "minWidth": 360,
 "layout": "horizontal",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container31983"
 },
 "shadow": false
},
{
 "itemLabelFontFamily": "Arial",
 "horizontalAlign": "left",
 "id": "ThumbnailList_F85CFFB3_F59E_40CC_41E5_39996A6AB97F",
 "left": "35%",
 "itemBorderRadius": 0,
 "backgroundOpacity": 0.2,
 "right": "35%",
 "scrollBarMargin": 2,
 "itemVerticalAlign": "middle",
 "itemPaddingLeft": 3,
 "minHeight": 1,
 "propagateClick": false,
 "scrollBarWidth": 10,
 "verticalAlign": "top",
 "paddingRight": 20,
 "itemOpacity": 1,
 "backgroundColor": [
  "#000000"
 ],
 "playList": "this.ThumbnailList_F85CFFB3_F59E_40CC_41E5_39996A6AB97F_playlist",
 "itemThumbnailShadowSpread": 1,
 "minWidth": 1,
 "height": 130,
 "itemBackgroundColor": [],
 "itemThumbnailOpacity": 1,
 "borderSize": 0,
 "class": "ThumbnailList",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemPaddingRight": 3,
 "backgroundColorDirection": "vertical",
 "itemThumbnailShadowOpacity": 0.8,
 "scrollBarColor": "#FFFFFF",
 "shadow": false,
 "itemLabelTextDecoration": "none",
 "itemBackgroundOpacity": 0,
 "itemLabelFontWeight": "normal",
 "layout": "horizontal",
 "itemThumbnailHeight": 75,
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontSize": 14,
 "itemThumbnailShadowBlurRadius": 4,
 "borderRadius": 5,
 "itemLabelGap": 5,
 "backgroundColorRatios": [
  0
 ],
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailShadow": true,
 "top": "0%",
 "itemThumbnailWidth": 100,
 "itemLabelFontColor": "#FFFFFF",
 "itemThumbnailShadowVerticalLength": 3,
 "itemHorizontalAlign": "center",
 "gap": 10,
 "selectedItemLabelFontWeight": "bold",
 "itemThumbnailShadowHorizontalLength": 3,
 "itemThumbnailShadowColor": "#000000",
 "itemPaddingBottom": 3,
 "paddingTop": 10,
 "itemLabelHorizontalAlign": "center",
 "itemLabelFontStyle": "normal",
 "paddingBottom": 10,
 "paddingLeft": 20,
 "itemMode": "normal",
 "data": {
  "name": "ThumbnailList"
 },
 "itemLabelPosition": "bottom",
 "itemThumbnailBorderRadius": 5
},
{
 "horizontalAlign": "center",
 "maxHeight": 43,
 "maxWidth": 42,
 "id": "IconButton_E1326FC2_F69E_404F_41D9_CD1E297F51A3",
 "backgroundOpacity": 0,
 "width": 42,
 "right": "1.93%",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "bottom": "46.99%",
 "height": 43,
 "minWidth": 1,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_E1326FC2_F69E_404F_41D9_CD1E297F51A3.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "IconButton13821"
 },
 "cursor": "hand"
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "minWidth": 0,
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "borderSize": 0,
 "class": "UIComponent",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "data": {
  "name": "UIComponent26260"
 },
 "shadow": false,
 "visible": false
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "right": 0,
 "borderRadius": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "minHeight": 0,
 "top": 0,
 "paddingRight": 0,
 "bottom": 0,
 "backgroundColor": [],
 "minWidth": 0,
 "borderSize": 0,
 "class": "ZoomImage",
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "paddingLeft": 0,
 "scaleMode": "custom",
 "data": {
  "name": "ZoomImage26261"
 },
 "shadow": false,
 "visible": false
},
{
 "textDecoration": "none",
 "fontFamily": "Arial",
 "horizontalAlign": "center",
 "id": "closeButtonPopupPanorama",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "iconColor": "#000000",
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "minHeight": 0,
 "top": 10,
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "paddingRight": 5,
 "pressedIconColor": "#888888",
 "iconBeforeLabel": true,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "borderColor": "#000000",
 "minWidth": 0,
 "mode": "push",
 "showEffect": {
  "duration": 350,
  "class": "FadeInEffect",
  "easing": "cubic_in_out"
 },
 "fontSize": "1.29vmin",
 "class": "CloseButton",
 "paddingTop": 5,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 5,
 "label": "",
 "fontStyle": "normal",
 "borderSize": 0,
 "iconLineWidth": 5,
 "paddingLeft": 5,
 "gap": 5,
 "layout": "horizontal",
 "data": {
  "name": "CloseButton26262"
 },
 "shadow": false,
 "iconWidth": 20,
 "visible": false,
 "shadowBlurRadius": 6,
 "shadowSpread": 1,
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "fontWeight": "normal"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41CB_7C4DBBC2A8E5.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31994"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -0.07,
   "hfov": 8.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.2
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FEC33102_F593_C1CC_41E8_41AA5862F850, this.camera_E1360705_F676_41D5_41EA_CC1A54723320); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -0.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0_HS_0_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.2,
   "hfov": 8.65
  }
 ],
 "id": "overlay_E35A4C50_F693_C04C_41EC_A5C31A212947",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 169.26,
   "hfov": 8.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.97
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7, this.camera_E13396F8_F676_403B_41D4_7237FF8B12F0); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 169.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0_HS_1_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.97,
   "hfov": 8.6
  }
 ],
 "id": "overlay_E31E0779_F692_403D_41E9_E72380C8F8E8",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0_HS_2_1_0_map.gif",
      "width": 94,
      "class": "ImageResourceLevel",
      "height": 72
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -100.62,
   "hfov": 11.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": 11.44
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_E11FD6F0_F697_C04B_41E9_F2DEF2798152, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, null, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -100.62,
   "class": "HotspotPanoramaOverlayImage",
   "roll": 0,
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFCED060_F592_404B_41B2_249721CCC3C3_0_HS_2_0.png",
      "width": 189,
      "class": "ImageResourceLevel",
      "height": 145
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 11.44,
   "hfov": 11.2
  }
 ],
 "id": "overlay_E10D5ED4_F696_404B_41D9_7C7757B849F4",
 "data": {
  "label": "Polygon"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D3_52532616D552",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D3_52532616D552.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31984"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31991"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41A9_0D8835A41A7C.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31987"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D2_D639DF8052CA.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31995"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D1_EAD81768A56B.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31986"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "PauseButton"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41C5_1BC8156F8BCF.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31993"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41BA_A43ED1B1FB40.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31992"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D4_85AB00D87A76.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31985"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
 "backgroundOpacity": 0,
 "width": 32,
 "borderRadius": 0,
 "rollOverIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_rollover.png",
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": 32,
 "minWidth": 0,
 "mode": "push",
 "class": "IconButton",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "iconURL": "skin/IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F.png",
 "transparencyActive": true,
 "shadow": false,
 "data": {
  "name": "Button31989"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -45.03,
   "hfov": 8.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.96
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FFCED060_F592_404B_41B2_249721CCC3C3, this.camera_EF6556AA_F676_40DF_41E8_D0957E3CC856); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -45.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FEC33102_F593_C1CC_41E8_41AA5862F850_0_HS_0_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.96,
   "hfov": 8.63
  }
 ],
 "id": "overlay_E2AA666D_F692_4055_41D7_59162961D552",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -9.61,
   "hfov": 8.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.48
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F, this.camera_EC8776C1_F676_404D_41CD_FB458BDA435D); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -9.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0_HS_0_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.48,
   "hfov": 8.57
  }
 ],
 "id": "overlay_E3EC90B9_F696_403D_41E3_3FA6846BC97C",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 172.02,
   "hfov": 8.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.73
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7, this.camera_EF7706B6_F676_4037_41E4_E7CFDA2A06CE); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 172.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0_HS_1_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.73,
   "hfov": 8.56
  }
 ],
 "id": "overlay_E070ABB0_F691_C0CB_41DB_E5B73BF9D5A4",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 89.06,
   "hfov": 7.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -0.44
  }
 ],
 "areas": [
  {
   "click": "this.showPopupPanoramaOverlay(this.popup_EE847AB4_F68E_C0CB_41ED_12ED80A44367, {'pressedBackgroundOpacity':0.3,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconColor':'#888888','rollOverBorderSize':0,'backgroundOpacity':0.3,'iconWidth':20,'borderSize':0,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconHeight':20,'paddingBottom':5,'pressedBorderColor':'#000000','rollOverBackgroundColorDirection':'vertical','backgroundColorDirection':'vertical','iconColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'paddingLeft':5,'pressedIconLineWidth':5,'pressedBorderSize':0,'rollOverBorderColor':'#000000','iconLineWidth':5,'rollOverBackgroundOpacity':0.3,'backgroundColorRatios':[0,0.09803921568627451,1],'rollOverIconHeight':20,'rollOverIconColor':'#666666','rollOverIconWidth':20,'pressedBackgroundColorDirection':'vertical','pressedIconWidth':20,'pressedIconHeight':20,'paddingRight':5,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverIconLineWidth':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'borderColor':'#000000'}, this.ImageResource_EC58E979_F68E_C03C_41EA_E1A7DA27CDB6, null, null, null, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_EC6C8971_F68E_C04C_41DB_0A143EEDEE79",
   "pitch": -0.44,
   "yaw": 89.06,
   "hfov": 7.54,
   "distance": 100
  }
 ],
 "id": "overlay_EE1E9C22_F68E_47CF_41ED_3CE746F5BF45",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 103.44,
   "hfov": 8.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.2
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FFCED060_F592_404B_41B2_249721CCC3C3, this.camera_EF4B8692_F676_40CF_41EE_023B68D22F4A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": 103.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0_HS_0_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.2,
   "hfov": 8.65
  }
 ],
 "id": "overlay_E3158048_F691_C05C_41DA_28EDDCE48212",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0_HS_1_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -9.86,
   "hfov": 8.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.71
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FFC295DF_F592_4075_41EE_2CE718DB0960, this.camera_EF43F686_F676_40D7_41ED_FCC11F643491); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -9.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0_HS_1_0.png",
      "width": 146,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.71,
   "hfov": 8.64
  }
 ],
 "id": "overlay_E0F49931_F696_41CC_41E0_AA8F11467C38",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 61.17,
   "hfov": 7.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.96
  }
 ],
 "areas": [
  {
   "click": "this.showWindow(this.window_E137D4C2_F692_404F_41E7_553E4A482D37, null, false)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "items": [
  {
   "class": "HotspotPanoramaOverlayImage",
   "image": "this.AnimatedImageResource_EC70E96E_F68E_C057_41ED_FEBC34BBF2AE",
   "pitch": -3.96,
   "yaw": 61.17,
   "hfov": 7.52,
   "distance": 100
  }
 ],
 "id": "overlay_E1FC15D5_F691_C075_41EB_B87ABFC462BD",
 "data": {
  "label": "Info 02"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "scrollBarOpacity": 0.5,
 "id": "htmlText_E13014C2_F692_404F_41B8_9C3D0C46F4E4",
 "backgroundOpacity": 0,
 "width": "100%",
 "scrollBarVisible": "rollOver",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 0,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "paddingRight": 10,
 "height": "100%",
 "minWidth": 0,
 "class": "HTMLText",
 "paddingTop": 10,
 "paddingBottom": 10,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">This tutorial will teach you the basics of creating multimedia virtual tours with 3DVista Virtual Tour Suite.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">The tours that you create can be viewed online and offline on any device and without the need of having</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">any special software or plugins installed. Feel free to try out the program with our 30-days full-feature trial</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\">version \u2013 We\u00b4re sure, you\u00b4ll like it</SPAN></DIV></div>",
 "paddingLeft": 10,
 "scrollBarColor": "#000000",
 "data": {
  "name": "HTMLText23703"
 },
 "shadow": false
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0_HS_0_0_0_map.gif",
      "width": 18,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -17.15,
   "hfov": 8.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.46
  }
 ],
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_FFC295DF_F592_4075_41EE_2CE718DB0960, this.camera_EF55669E_F676_40F7_41C7_9517644D6F36); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "yaw": -17.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50,
   "image": {
    "levels": [
     {
      "url": "media/panorama_E553D81E_F672_CFF7_41E0_E90A921F1C0F_0_HS_0_0.png",
      "width": 184,
      "class": "ImageResourceLevel",
      "height": 160
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.46,
   "hfov": 8.63
  }
 ],
 "id": "overlay_E06E4BFF_F692_C035_41D7_11A106A2685A",
 "data": {
  "label": "Image"
 },
 "class": "HotspotPanoramaOverlay"
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_5645B517_5EBA_61DA_41AF_FC7FEB37EBCD",
 "backgroundOpacity": 0,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_5645B517_5EBA_61DA_41D6_9282B67C524F",
  "this.IconButton_5645B517_5EBA_61DA_41BC_DB59BC8AC3A2",
  "this.IconButton_5645B517_5EBA_61DA_41D6_E94D03438B44"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "paddingRight": 0,
 "height": "100%",
 "minWidth": 20,
 "layout": "vertical",
 "class": "Container",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container31988"
 },
 "shadow": false
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FFC295DF_F592_4075_41EE_2CE718DB0960_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_EC6C8971_F68E_C04C_41DB_0A143EEDEE79",
 "rowCount": 6,
 "class": "AnimatedImageResource"
},
{
 "colCount": 4,
 "frameCount": 24,
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_FFC2DB07_F592_41D5_41DA_7435323FCBB7_0_HS_2_0.png",
   "width": 460,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ],
 "id": "AnimatedImageResource_EC70E96E_F68E_C057_41ED_FEBC34BBF2AE",
 "rowCount": 6,
 "class": "AnimatedImageResource"
}],
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "paddingTop": 0,
 "paddingBottom": 0,
 "borderSize": 0,
 "paddingLeft": 0,
 "contentOpaque": false,
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "unregisterKey": function(key){  delete window[key]; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "existsKey": function(key){  return key in window; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); }
 },
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player43899"
 },
 "mouseWheelEnabled": true,
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser",
 "gap": 10
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
