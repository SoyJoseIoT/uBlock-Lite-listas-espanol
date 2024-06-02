/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock

*/

/* jshint esversion:11 */
/* global cloneInto */

'use strict';

// ruleset: default

/******************************************************************************/

// Important!
// Isolate from global scope

// Start of local scope
(( ) => {

/******************************************************************************/

// Start of code to inject
const uBOL_setConstant = function() {

const scriptletGlobals = {}; // jshint ignore: line

const argsList = [["ytInitialPlayerResponse.playerAds","undefined"],["ytInitialPlayerResponse.adPlacements","undefined"],["ytInitialPlayerResponse.adSlots","undefined"],["playerResponse.adPlacements","undefined"],["ov.advertising.tisoomi.loadScript","noopFunc"],["abp","false"],["oeo","noopFunc"],["nsShowMaxCount","0"],["objVc.interstitial_web",""],["console.clear","trueFunc"],["_ml_ads_ns","null"],["_sp_.config","undefined"],["isAdBlockActive","false"],["AdController","noopFunc"],["check_adblock","true"],["console.clear","noopFunc"],["console.log","noopFunc"],["String.prototype.charCodeAt","trueFunc"],["attachEvent","trueFunc"],["Object.prototype._getSalesHouseConfigurations","noopFunc"],["vast_urls","{}"],["sadbl","false"],["adblockcheck","false"],["arrvast","[]"],["blurred","false"],["flashvars.adv_pre_src",""],["showPopunder","false"],["page_params.holiday_promo","true"],["adsEnabled","true"],["hommy","{}"],["hommy.waitUntil","noopFunc"],["String.prototype.charAt","trueFunc"],["ad_blocker","false"],["blockAdBlock","true"],["is_adblocked","false"],["showPopunder","noopFunc"],["VikiPlayer.prototype.pingAbFactor","noopFunc"],["player.options.disableAds","true"],["flashvars.adv_pre_vast",""],["flashvars.adv_pre_vast_alt",""],["x_width","1"],["_site_ads_ns","true"],["luxuretv.config",""],["Object.prototype.AdOverlay","noopFunc"],["tkn_popunder","null"],["can_run_ads","true"],["adsBlockerDetector","noopFunc"],["globalThis","null"],["adblock","false"],["__ads","true"],["FlixPop.isPopGloballyEnabled","falseFunc"],["console.clear","undefined"],["fuckAdBlock","false"],["$.magnificPopup.open","noopFunc"],["adsenseadBlock","noopFunc"],["flashvars.adv_pause_html",""],["adblockSuspected","false"],["xRds","true"],["cRAds","false"],["disasterpingu","false"],["CnnXt.Event.fire","noopFunc"],["App.views.adsView.adblock","false"],["$.fx.off","true"],["adsClasses","undefined"],["gsecs","0"],["isAdb","false"],["adBlockEnabled","false"],["puShown","true"],["ads_b_test","true"],["showAds","true"],["clicked","true"],["eClicked","true"],["number","0"],["sync","true"],["attr","{}"],["scriptSrc",""],["Object.prototype.adReinsertion","noopFunc"],["Object.prototype.disableAds","true"],["cxStartDetectionProcess","noopFunc"],["isAdBlocked","false"],["adblock","noopFunc"],["path",""],["adBlock","false"],["_ctrl_vt.blocked.ad_script","false"],["blockAdBlock","noopFunc"],["caca","noopFunc"],["Ok","true"],["isBlocked","false"],["safelink.adblock","false"],["ClickUnder","noopFunc"],["flashvars.adv_pre_url",""],["flashvars.protect_block",""],["flashvars.video_click_url",""],["spoof","noopFunc"],["adBlockerDetected","undefined"],["odabd","false"],["btoa","null"],["sp_ad","true"],["adsBlocked","false"],["_sp_.msg.displayMessage","noopFunc"],["isAdblock","false"],["CaptchmeState.adb","undefined"],["bb","false"],["indexedDB.open","trueFunc"],["UhasAB","false"],["adNotificationDetected","false"],["atob","noopFunc"],["flashvars.popunder_url",""],["_pop","noopFunc"],["_ti_update_user","noopFunc"],["valid","1"],["vastAds","[]"],["adblock","1"],["frg","1"],["time","0"],["vpPrerollVideo","undefined"],["ads","true"],["GNCA_Ad_Support","true"],["Date.now","noopFunc"],["jQuery.adblock","1"],["VMG.Components.Adblock","false"],["_n_app.popunder","null"],["adblockDetector","trueFunc"],["hasPoped","true"],["flashvars.video_click_url","undefined"],["flashvars.adv_start_html",""],["jQuery.adblock","false"],["google_jobrunner","true"],["sec","0"],["gadb","false"],["checkadBlock","noopFunc"],["clientSide.adbDetect","noopFunc"],["cmnnrunads","true"],["adBlocker","false"],["adBlockDetected","noopFunc"],["StileApp.somecontrols.adBlockDetected","noopFunc"],["MDCore.adblock","0"],["google_tag_data","noopFunc"],["noAdBlock","true"],["adsOk","true"],["Object.prototype._parseVAST","noopFunc"],["Object.prototype.createAdBlocker","noopFunc"],["Object.prototype.isAdPeriod","falseFunc"],["check","true"],["dvsize","51"],["isal","true"],["count","0"],["document.hidden","true"],["awm","true"],["adblockEnabled","false"],["ABLK","false"],["pogo.intermission.staticAdIntermissionPeriod","0"],["SubmitDownload1","noopFunc"],["t","0"],["ckaduMobilePop","noopFunc"],["tieneAdblock","0"],["adsAreBlocked","false"],["cmgpbjs","false"],["displayAdblockOverlay","false"],["google","false"],["Math.pow","noopFunc"],["openInNewTab","noopFunc"],["adblockDetector","noopFunc"],["loadingAds","true"],["runAdBlocker","false"],["td_ad_background_click_link","undefined"],["Adblock","false"],["flashvars.logo_url",""],["flashvars.logo_text",""],["nlf.custom.userCapabilities","false"],["decodeURIComponent","trueFunc"],["LoadThisScript","true"],["showPremLite","true"],["closeBlockerModal","false"],["adBlockDetector.isEnabled","falseFunc"],["testerli","false"],["areAdsDisplayed","true"],["gkAdsWerbung","true"],["document.bridCanRunAds","true"],["pop_target","null"],["is_banner","true"],["$easyadvtblock","false"],["show_dfp_preroll","false"],["show_youtube_preroll","false"],["show_ads_gr8_lite","true"],["doads","true"],["jsUnda","noopFunc"],["abp","noopFunc"],["AlobaidiDetectAdBlock","true"],["Advertisement","1"],["adBlockDetected","false"],["abp1","1"],["pr_okvalida","true"],["$.ajax","trueFunc"],["getHomadConfig","noopFunc"],["adsbygoogle.loaded","true"],["cnbc.canShowAds","true"],["Adv_ab","false"],["chrome","undefined"],["firefaucet","true"],["cRAds","true"],["app.addonIsInstalled","trueFunc"],["flashvars.popunder_url","undefined"],["adv","true"],["prerollMain","undefined"],["canRunAds","true"],["Fingerprint2","true"],["dclm_ajax_var.disclaimer_redirect_url",""],["load_pop_power","noopFunc"],["adBlockDetected","true"],["Time_Start","0"],["blockAdBlock","trueFunc"],["ezstandalone.enabled","true"],["CustomEvent","noopFunc"],["ab","false"],["go_popup","{}"],["noBlocker","true"],["adsbygoogle","null"],["fabActive","false"],["gWkbAdVert","true"],["noblock","true"],["ai_dummy","true"],["ulp_noadb","true"],["wgAffiliateEnabled","false"],["ads","null"],["detectAdblock","noopFunc"],["adsLoadable","true"],["ASSetCookieAds","null"],["letShowAds","true"],["tidakAdaPenghalangAds","true"],["timeSec","0"],["ads_unblocked","true"],["xxSetting.adBlockerDetection","false"],["better_ads_adblock","null"],["open","undefined"],["importFAB","undefined"],["Drupal.behaviors.adBlockerPopup","null"],["fake_ad","true"],["flashvars.mlogo",""],["koddostu_com_adblock_yok","null"],["adsbygoogle","trueFunc"],["player.ads.cuePoints","undefined"],["adBlockDetected","null"],["better_ads_adblock","1"],["hold_click","false"],["sgpbCanRunAds","true"],["hasAdBlocker","false"],["initials.yld-pdpopunder",""],["Object.prototype.setNeedShowAdblockWarning","noopFunc"],["DHAntiAdBlocker","true"],["adsConfigs","{}"],["adsConfigs.0","{}"],["adsConfigs.0.enabled","0"],["NoAdBlock","noopFunc"],["adList","[]"],["ifmax","true"],["nitroAds.abp","true"],["onloadUI","noopFunc"],["Object.prototype.isAdblock","undefined"],["PageLoader.DetectAb","0"],["adSettings","[]"],["one_time","1"],["consentGiven","true"],["GEMG.GPT.Interstitial","noopFunc"],["amiblock","0"],["nitroAds","{}"],["nitroAds.createAd","noopFunc"],["karte3","18"],["protection","noopFunc"],["sandDetect","noopFunc"],["amodule.data","emptyArr"],["checkAdsStatus","noopFunc"],["document.hasFocus","trueFunc"],["detectAdBlock","noopFunc"],["Object.prototype.isAllAdClose","true"],["isRequestPresent","true"],["fouty","true"],["Notification","undefined"],["private","false"],["showadas","true"],["iktimer","0"],["pubAdsService","trueFunc"],["config.pauseInspect","false"],["appContext.adManager.context.current.adFriendly","false"],["blockAdBlock._options.baitClass","null"],["document.blocked_var","1"],["____ads_js_blocked","false"],["wIsAdBlocked","false"],["WebSite.plsDisableAdBlock","null"],["ads_blocked","false"],["samDetected","false"],["countClicks","0"],["settings.adBlockerDetection","false"],["mixpanel.get_distinct_id","true"],["bannersLoaded","4"],["notEmptyBanners","4"],["fuckAdBlock._options.baitClass","null"],["bscheck.adblocker","noopFunc"],["qpcheck.ads","noopFunc"],["isContentBlocked","falseFunc"],["CloudflareApps.installs.Ik7rmQ4t95Qk.options.measureDomain","undefined"],["detectAB1","noopFunc"],["uBlockOriginDetected","false"],["googletag._vars_","{}"],["googletag._loadStarted_","true"],["googletag._loaded_","true"],["google_unique_id","1"],["google.javascript","{}"],["google.javascript.ads","{}"],["google_global_correlator","1"],["paywallGateway.truncateContent","noopFunc"],["adBlockDisabled","true"],["blockedElement","noopFunc"],["popit","false"],["adBlockerDetected","false"],["abu","falseFunc"],["countdown","0"],["decodeURI","noopFunc"],["flashvars.adv_postpause_vast",""],["univresalP","noopFunc"],["xv_ad_block","0"],["vidorev_jav_plugin_video_ads_object.vid_ads_m_video_ads",""],["adsProvider.init","noopFunc"],["SDKLoaded","true"],["blockAdBlock._creatBait","null"],["POPUNDER_ENABLED","false"],["plugins.preroll","noopFunc"],["errcode","0"],["showada","true"],["showax","true"],["p18","undefined"],["asc","2"],["ADBLOCKED","false"],["adb","0"],["String.fromCharCode","trueFunc"],["adblock_use","false"],["nitroAds.loaded","true"],["createCanvas","noopFunc"],["playerAdSettings.adLink",""],["playerAdSettings.waitTime","0"],["AdHandler.adblocked","0"],["adsHeight","11"],["checkCap","0"],["isAdsLoaded","true"],["adblockerAlert","noopFunc"],["Object.prototype.parseXML","noopFunc"],["Object.prototype.blackscreenDuration","1"],["Object.prototype.adPlayerId",""],["isadb","false"],["adblockDetect","noopFunc"],["style","noopFunc"],["history.pushState","noopFunc"],["google_unique_id","6"],["__NEXT_DATA__.props.pageProps.adsConfig","undefined"],["new_config.timedown","0"],["Object.prototype.isAdDisabled","true"],["hiddenProxyDetected","false"],["SteadyWidgetSettings.adblockActive","false"],["proclayer","noopFunc"],["timeleft","0"],["load_ads","trueFunc"],["starPop","1"],["Object.prototype.ads","noopFunc"],["detectBlockAds","noopFunc"],["ga","trueFunc"],["enable_dl_after_countdown","true"],["isGGSurvey","true"],["D4zz","noopFunc"],["ad_link",""],["App.AdblockDetected","false"],["SF.adblock","true"],["startfrom","0"],["Object.prototype.ads.nopreroll_","true"],["HP_Scout.adBlocked","false"],["SD_IS_BLOCKING","false"],["Object.prototype.isPremium","true"],["__BACKPLANE_API__.renderOptions.showAdBlock",""],["Object.prototype.isNoAds","{}"],["countDownDate","0"],["setupSkin","noopFunc"],["count","1"],["Object.prototype.enableInterstitial","false"],["ads","undefined"],["ADBLOCK","false"],["POSTPART_prototype.ADKEY","noopFunc"],["adBlockDetected","falseFunc"],["noAdBlock","noopFunc"],["AdService.info.abd","noopFunc"],["adBlockDetectionResult","undefined"],["popped","true"],["google.ima.OmidVerificationVendor","{}"],["Object.prototype.omidAccessModeRules","{}"],["puShown1","true"],["stop","noopFunc"],["passthetest","true"],["timeset","0"],["pandaAdviewValidate","true"],["verifica_adblock","noopFunc"],["canGetAds","true"],["ad_blocker_active","false"],["init_welcome_ad","noopFunc"],["moneyAbovePrivacyByvCDN","true"],["window.googletag.apiReady","false"],["aLoad","noopFunc"],["mtCanRunAdsSoItCanStillBeOnTheWeb","true"],["document.body.contains","trueFunc"],["popunder","undefined"],["distance","0"],["document.onclick",""],["adEnable","true"],["displayAds","0"],["Overlayer","{}"],["pop3getcookie","undefined"],["pop3setcookie1","undefined"],["pop3setCookie2","undefined"],["_adshrink.skiptime","0"],["AbleToRunAds","true"],["PreRollAd.timeCounter","0"],["TextEncoder","undefined"],["abpblocked","undefined"],["app.showModalAd","noopFunc"],["paAddUnit","noopFunc"],["adt","0"],["test_adblock","noopFunc"],["Object.prototype.adBlockerDetected","falseFunc"],["Object.prototype.adBlocker","false"],["Object.prototype.tomatoDetected","falseFunc"],["vastEnabled","false"],["detectadsbocker","false"],["two_worker_data_js.js","[]"],["FEATURE_DISABLE_ADOBE_POPUP_BY_COUNTRY","true"],["questpassGuard","noopFunc"],["isAdBlockerEnabled","false"],["smartLoaded","true"],["timeLeft","0"],["Cookiebot","noopFunc"],["feature_flags.interstitial_ads_flag","false"],["feature_flags.interstitials_every_four_slides","false"],["waldoSlotIds","true"],["adblockstatus","false"],["adScriptLoaded","true"],["adblockEnabled","noopFunc"],["banner_is_blocked","false"],["Object.prototype.adBlocked","false"],["myFunc","noopFunc"],["chp_adblock_browser","noopFunc"],["googleAd","true"],["Brid.A9.prototype.backfillAdUnits","[]"],["dct","0"],["slideShow.displayInterstitial","true"],["window.runningAdsAllowed","true"],["WAITING_TIME","0"],["__INITIAL_STATE__.gameLists.gamesNoPrerollIds.indexOf","trueFunc"],["checkAdBlocker","noopFunc"],["PlayerConfig.config.CustomAdSetting","[]"],["navigator.standalone","true"],["google.ima.settings.setDisableFlashAds","noopFunc"],["empire.pop","undefined"],["empire.direct","undefined"],["empire.directHideAds","undefined"],["setTimer","0"],["penci_adlbock.ad_blocker_detector","0"],["Object.prototype.adblockDetector","noopFunc"],["blext","true"],["vidorev_jav_plugin_video_ads_object","{}"],["vidorev_jav_plugin_video_ads_object_post","{}"],["S_Popup","10"],["rabLimit","-1"],["nudgeAdBlock","noopFunc"],["playerConfigs.rek","{}"],["feedBack.showAffilaePromo","noopFunc"],["loadpagecheck","noopFunc"],["hucksterInit","trueFunc"],["artemisDisplays","[]"],["artemisItemNames","[]"],["isAdBlockerActive","noopFunc"],["di.VAST.XHRURLHandler","noopFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForPreroll","trueFunc"],["di.app.WebplayerApp.Ads.Supervisor.eligibleForMidroll","trueFunc"],["admiral","noopFunc"],["ads","[]"],["settings.adBlockDetectionEnabled","false"],["displayInterstitialAdConfig","false"],["confirm","noopFunc"],["checkAdBlockeraz","noopFunc"],["segundos","0"],["Yii2App.playbackTimeout","0"],["isPremium","true"],["QiyiPlayerProphetData.a.data","{}"],["toggleAdBlockInfo","falseFunc"],["aipAPItag.prerollSkipped","true"],["aipAPItag.setPreRollStatus","trueFunc"],["reklam_1_saniye","0"],["reklam_1_gecsaniye","0"],["powerAPITag","emptyObj"],["aoAdBlockDetected","false"],["xtime","0"],["fapit.check","noopFunc"],["Div_popup",""],["AddAdsV2I.addBlock","false"],["rwt","noopFunc"],["bmak.js_post","false"],["firebase.analytics","noopFunc"],["flashvars.event_reporting",""],["Visitor","{}"],["akamaiDisableServerIpLookup","noopFunc"],["DD_RUM.addAction","noopFunc"],["nads.createAd","trueFunc"],["ga","noopFunc"],["huecosPBS.nstdX","null"],["DTM.trackAsyncPV","noopFunc"],["_satellite","{}"],["_satellite.getVisitorId","noopFunc"],["newPageViewSpeedtest","noopFunc"],["pubg.unload","noopFunc"],["generateGalleryAd","noopFunc"],["mediator","noopFunc"],["Object.prototype.subscribe","noopFunc"],["gbTracker","{}"],["gbTracker.sendAutoSearchEvent","noopFunc"],["Object.prototype.vjsPlayer.ads","noopFunc"],["network_user_id",""],["googletag.cmd","{}"],["Object.prototype.setDisableFlashAds","noopFunc"],["DD_RUM.addTiming","noopFunc"],["chameleonVideo.adDisabledRequested","true"],["AdmostClient","{}"],["analytics","{}"],["datalayer","[]"],["Object.prototype.isInitialLoadDisabled","noopFunc"],["listingGoogleEETracking","noopFunc"],["dcsMultiTrack","noopFunc"],["urlStrArray","noopFunc"],["pa","{}"],["Object.prototype.setConfigurations","noopFunc"],["Object.prototype.bk_addPageCtx","noopFunc"],["Object.prototype.bk_doJSTag","noopFunc"],["passFingerPrint","noopFunc"],["DD_LOGS","noopFunc"],["optimizely","{}"],["optimizely.initialized","true"],["google_optimize","{}"],["google_optimize.get","noopFunc"],["_gsq","{}"],["_gsq.push","noopFunc"],["stmCustomEvent","noopFunc"],["_gsDevice",""],["iom","{}"],["iom.c","noopFunc"],["_conv_q","{}"],["_conv_q.push","noopFunc"],["pa.privacy","{}"],["Object.prototype.getTargetingMap","noopFunc"],["populateClientData4RBA","noopFunc"],["YT.ImaManager","noopFunc"],["UOLPD","{}"],["UOLPD.dataLayer","{}"],["__configuredDFPTags","{}"],["Adman","{}"],["dplus","{}"],["dplus.track","noopFunc"],["_satellite.track","noopFunc"],["google.ima.dai","{}"],["gfkS2sExtension","{}"],["gfkS2sExtension.HTML5VODExtension","noopFunc"],["AnalyticsEventTrackingJS","{}"],["AnalyticsEventTrackingJS.addToBasket","noopFunc"],["AnalyticsEventTrackingJS.trackErrorMessage","noopFunc"],["initializeslideshow","noopFunc"],["fathom","{}"],["fathom.trackGoal","noopFunc"],["Origami","{}"],["Origami.fastclick","noopFunc"],["Sentry","{}"],["Sentry.init","noopFunc"],["Taplytics","{}"],["Taplytics.featureFlagEnabled","noopFunc"],["TRC","{}"],["TRC._taboolaClone","[]"],["fp","{}"],["fp.t","noopFunc"],["fp.s","noopFunc"],["initializeNewRelic","noopFunc"],["turnerAnalyticsObj","{}"],["turnerAnalyticsObj.setVideoObject4AnalyticsProperty","noopFunc"],["optimizelyDatafile","{}"],["optimizelyDatafile.featureFlags","[]"],["fingerprint","{}"],["fingerprint.getCookie","noopFunc"],["gform.utils","noopFunc"],["gform.utils.trigger","noopFunc"],["get_fingerprint","noopFunc"],["moatPrebidApi","{}"],["moatPrebidApi.getMoatTargetingForPage","noopFunc"],["cpd_configdata","{}"],["cpd_configdata.url",""],["yieldlove_cmd","{}"],["yieldlove_cmd.push","noopFunc"],["dataLayer.push","noopFunc"],["_etmc","{}"],["_etmc.push","noopFunc"],["freshpaint","{}"],["freshpaint.track","noopFunc"],["ShowRewards","noopFunc"],["stLight","{}"],["stLight.options","noopFunc"],["DD_RUM.addError","noopFunc"],["sensorsDataAnalytic201505","{}"],["sensorsDataAnalytic201505.init","noopFunc"],["sensorsDataAnalytic201505.quick","noopFunc"],["sensorsDataAnalytic201505.track","noopFunc"],["s","{}"],["s.tl","noopFunc"],["SalesforceInteractions","{}"],["SalesforceInteractions.CatalogObjectInteractionName"],["supportedBrowsers",""],["ytInitialPlayerResponse.playerConfig.ssapConfig","undefined"],["ytInitialPlayerResponse.streamingData.serverAbrStreamingUrl","undefined"],["Navigator.prototype.globalPrivacyControl","false"],["navigator.globalPrivacyControl","false"]];

const hostnamesMap = new Map([["m.youtube.com",[0,1,2,3,616,617]],["music.youtube.com",[0,1,2,3,616,617]],["tv.youtube.com",[0,1,2,3]],["www.youtube.com",[0,1,2,3,616,617]],["youtubekids.com",[0,1,2,3]],["youtube-nocookie.com",[0,1,2,3]],["eu-proxy.startpage.com",[0,1,3]],["kicker.de",[4,568]],["t-online.de",5],["whatfinger.com",6],["timesofindia.indiatimes.com",7],["economictimes.indiatimes.com",8],["userscloud.com",9],["motherless.com",10],["sueddeutsche.de",11],["watchanimesub.net",12],["wco.tv",12],["wcoanimesub.tv",12],["wcoforever.net",12],["freeviewmovies.com",12],["filehorse.com",12],["guidetnt.com",12],["sp-today.com",12],["linkvertise.com",12],["textbin.net",12],["eropaste.net",12],["pastebr.xyz",12],["getpaste.link",12],["sharetext.me",12],["note.sieuthuthuat.com",12],["elcriticodelatele.com",[12,249]],["gadgets.es",[12,249]],["amateurporn.co",[12,107]],["wiwo.de",13],["masteranime.tv",14],["alphaporno.com",[15,427]],["porngem.com",15],["uploadbank.com",15],["shortit.pw",[15,110]],["familyporn.tv",15],["cloudemb.com",[15,348]],["sbplay1.com",15],["id45.cyou",15],["85tube.com",[15,91]],["k1nk.co",15],["watchasians.cc",15],["soltoshindo.com",15],["dronedj.com",17],["nolive.me",18],["player.glomex.com",19],["merkur.de",19],["tz.de",19],["hotpornfile.org",22],["player.tabooporns.com",22],["x69.ovh",22],["wiztube.xyz",22],["multiup.us",22],["rpdrlatino.live",22],["peliculas8k.com",[22,23]],["video.q34r.org",22],["69x.online",22],["czxxx.org",22],["netu.ac",22],["dirtyvideo.fun",23],["adbull.org",24],["mitly.us",24],["linkrex.net",24],["linx.cc",24],["oke.io",24],["dz4link.com",24],["linclik.com",24],["shrt10.com",24],["loptelink.com",24],["cut-fly.com",24],["linkfinal.com",24],["payskip.org",24],["cutpaid.com",24],["forexmab.com",24],["linkjust.com",24],["linkszia.co",24],["leechpremium.link",24],["icutlink.com",[24,128]],["stfly.me",24],["oncehelp.com",24],["rgl.vn",24],["reqlinks.net",24],["megaurl.in",24],["megafly.in",24],["bitlk.com",24],["qlinks.eu",24],["link.3dmili.com",24],["short-fly.com",24],["foxseotools.com",24],["pngit.live",24],["link.turkdown.com",24],["urlty.com",24],["7r6.com",24],["oko.sh",24],["ckk.ai",24],["fc.lc",24],["fstore.biz",24],["cuts-url.com",24],["eio.io",24],["exe.app",24],["exee.io",24],["exey.io",24],["skincarie.com",24],["exeo.app",24],["coinlyhub.com",[24,206]],["adsafelink.com",24],["aii.sh",24],["cybertechng.com",[24,215]],["owllink.net",24],["cutdl.xyz",24],["iir.ai",24],["shorteet.com",[24,234]],["sekilastekno.com",24],["smoner.com",24],["xpshort.com",24],["upshrink.com",24],["enit.in",[24,230]],["ez4short.com",24],["easysky.in",24],["veganab.co",24],["adrinolinks.in",24],["go.bloggingaro.com",24],["go.gyanitheme.com",24],["go.theforyou.in",24],["go.hipsonyc.com",24],["birdurls.com",24],["try2link.com",24],["jameeltips.us",24],["gainl.ink",24],["promo-visits.site",24],["satoshi-win.xyz",[24,276]],["shorterall.com",24],["encurtandourl.com",24],["forextrader.site",24],["postazap.com",24],["tinys.click",[24,215]],["cpm.icu",24],["panyshort.link",24],["enagato.com",24],["pandaznetwork.com",24],["tii.la",24],["oei.la",24],["lnbz.la",[24,230]],["recipestutorials.com",24],["shrinkforearn.in",24],["techyuth.xyz",24],["oii.io",24],["du-link.in",24],["atglinks.com",24],["linksly.co",24],["pkr.pw",24],["imagenesderopaparaperros.com",24],["shortenbuddy.com",24],["gibit.xyz",24],["apksvip.com",24],["4cash.me",24],["namaidani.com",24],["teknomuda.com",24],["illink.net",24],["miuiku.com",24],["yourtechnology.online",24],["savelink.site",24],["apkshrt.com",24],["srts.me",24],["kutmoney.com",24],["kutt.io",24],["sanoybonito.club",24],["samaa-pro.com",24],["miklpro.com",24],["modapk.link",24],["1shorten.com",24],["ccurl.net",24],["st23q.com",24],["beautyram.info",24],["viraloc.com",24],["galaxy-link.space",24],["linkpoi.me",24],["usdshort.com",24],["bitcoinly.in",24],["menjelajahi.com",24],["pewgame.com",24],["yxoshort.com",24],["1link.vip",24],["haonguyen.top",24],["claimfreebits.com",24],["crazyblog.in",24],["gtlink.co",24],["link.tokenoto.com",24],["cutearn.net",24],["rshrt.com",24],["short.palmeratv.com",24],["filezipa.com",24],["dz-linkk.com",24],["theblissempire.com",24],["finanzas-vida.com",24],["adurly.cc",24],["pix4link.com",24],["paid4.link",24],["link.asiaon.top",24],["go.gets4link.com",24],["download.sharenulled.net",24],["beingtek.com",24],["shorturl.unityassets4free.com",24],["disheye.com",24],["techymedies.com",24],["techysuccess.com",24],["za.gl",[24,147]],["download.baominh.tech",24],["bblink.com",24],["linkbr.xyz",24],["myad.biz",24],["swzz.xyz",24],["vevioz.com",24],["charexempire.com",24],["clk.asia",24],["egfly.xyz",24],["linka.click",24],["sturls.com",24],["myshrinker.com",24],["go.adinsurance.xyz",24],["dash-free.com",[24,215]],["snowurl.com",[24,215]],["netfile.cc",24],["link.insurance-space.xyz",24],["link.insurglobal.xyz",24],["theconomy.me",24],["rajsayt.xyz",24],["rocklink.in",24],["adinsurance.xyz",24],["insurglobal.xyz",24],["techgeek.digital",24],["download3s.net",24],["shortx.net",24],["musicc.xyz",24],["shortawy.com",24],["tlin.me",24],["apprepack.com",24],["up-load.one",24],["zuba.link",24],["news.speedynews.xyz",24],["golink.xaydungplus.com",24],["bestcash2020.com",24],["hoxiin.com",24],["technemo.xyz",24],["go.linkbnao.com",24],["link-yz.com",24],["paylinnk.com",24],["thizissam.in",24],["ier.ai",24],["bloggertheme.xyz",24],["adslink.pw",24],["novelssites.com",24],["links.medipost.org",24],["faucetcrypto.net",24],["short.freeltc.top",24],["trxking.xyz",24],["weadown.com",24],["m.bloggingguidance.com",24],["blog.onroid.com",24],["cutty.app",24],["link.codevn.net",24],["upfilesurls.com",24],["shareus.site",24],["link4rev.site",24],["bloginguru.xyz",24],["celinks.net",24],["c2g.at",24],["shortzu.icu",24],["bitcosite.com",[24,440]],["cryptosh.pro",24],["sigmalinks.in",24],["link68.net",24],["traffic123.net",24],["windowslite.net",[24,215]],["coinsl.click",24],["exalink.fun",24],["exego.app",[24,272]],["viewfr.com",24],["cl1ca.com",24],["4br.me",24],["fir3.net",24],["kiddyshort.com",24],["watchmygf.me",[25,53]],["camwhorez.tv",[25,38,90,91]],["fpo.xxx",[25,55]],["sexemix.com",25],["heavyfetish.com",[25,503]],["you-porn.com",27],["youporngay.com",27],["youpornru.com",27],["9908ww.com",27],["adelaidepawnbroker.com",27],["bztube.com",27],["hotovs.com",27],["insuredhome.org",27],["nudegista.com",27],["pornluck.com",27],["vidd.se",27],["pornhub.com",27],["pornerbros.com",28],["freep.com",28],["porn.com",31],["tune.pk",32],["noticias.gospelmais.com.br",33],["techperiod.com",33],["jacquieetmicheltv.net",[34,35]],["illicoporno.com",34],["lavoixdux.com",34],["tonpornodujour.com",34],["jacquieetmichel.net",34],["swame.com",34],["vosfemmes.com",34],["voyeurfrance.net",34],["viki.com",[36,37]],["sleazyneasy.com",[38,39,40]],["smutr.com",[38,202]],["yourporngod.com",[38,39]],["javbangers.com",[38,318]],["camfox.com",38],["camthots.tv",[38,123]],["shegotass.info",38],["amateur8.com",38],["bigtitslust.com",38],["ebony8.com",38],["freeporn8.com",38],["lesbian8.com",38],["maturetubehere.com",38],["sortporn.com",38],["webcamvau.com",38],["motherporno.com",[38,39,55,125]],["tktube.com",38],["theporngod.com",[38,39]],["pornsocket.com",41],["luxuretv.com",42],["porndig.com",[43,44]],["webcheats.com.br",45],["ceesty.com",[46,47]],["gestyy.com",[46,47]],["corneey.com",47],["destyy.com",47],["festyy.com",47],["sh.st",47],["angrybirdsnest.com",48],["zrozz.com",48],["clix4btc.com",48],["4tests.com",48],["planet-explorers-isos.com",48],["business-standard.com",48],["goltelevision.com",48],["news-und-nachrichten.de",48],["laradiobbs.net",48],["urlaubspartner.net",48],["produktion.de",48],["cinemaxxl.de",48],["bladesalvador.com",48],["tempr.email",48],["katfile.com",48],["trust.zone",48],["cshort.org",48],["friendproject.net",48],["covrhub.com",48],["planetsuzy.org",49],["empflix.com",50],["freeplayervideo.com",51],["nazarickol.com",51],["player-cdn.com",51],["playhydrax.com",51],["apinchcaseation.com",51],["bigclatterhomesguideservice.com",51],["bradleyviewdoctor.com",51],["brookethoughi.com",51],["brucevotewithin.com",51],["cindyeyefinal.com",51],["denisegrowthwide.com",51],["edwardarriveoften.com",51],["graceaddresscommunity.com",51],["housecardsummerbutton.com",51],["jamesstartstudent.com",51],["jamiesamewalk.com",51],["jasonresponsemeasure.com",51],["jayservicestuff.com",51],["johntryopen.com",51],["kennethofficialitem.com",51],["lukecomparetwo.com",51],["markstyleall.com",51],["michaelapplysome.com",51],["morganoperationface.com",51],["nectareousoverelate.com",51],["paulkitchendark.com",51],["rebeccaneverbase.com",51],["ryanagoinvolve.com",51],["sandrataxeight.com",51],["seanshowcould.com",51],["sethniceletter.com",51],["shannonpersonalcost.com",51],["sharonwhiledemocratic.com",51],["stevenimaginelittle.com",51],["strawberriesporail.com",51],["timberwoodanotia.com",51],["tinycat-voe-fashion.com",51],["troyyourlead.com",51],["uptodatefinishconference.com",51],["uptodatefinishconferenceroom.com",51],["vincentincludesuccessful.com",51],["voe.sx",51],["motphimtv.com",51],["rabbitstream.net",51],["projectfreetv.one",51],["filespace.com",52],["transparentcalifornia.com",53],["deepbrid.com",54],["submityourflicks.com",55],["3movs.com",55],["cambay.tv",[55,107,123,125]],["bravoerotica.net",[55,125]],["youx.xxx",55],["camclips.tv",[55,202]],["camflow.tv",[55,107,125,168,238]],["camhoes.tv",[55,107,123,125,168,238]],["xmegadrive.com",55],["xxxymovies.com",55],["xxxshake.com",55],["gayck.com",55],["xhand.com",[55,125]],["analdin.com",[55,125]],["webnovel.com",56],["videosgay.me",[57,58]],["wishfast.top",58],["schwaebische.de",59],["mercurynews.com",60],["chicoer.com",60],["dailybreeze.com",60],["dailybulletin.com",60],["dailynews.com",60],["delcotimes.com",60],["eastbaytimes.com",60],["macombdaily.com",60],["ocregister.com",60],["pasadenastarnews.com",60],["pe.com",60],["presstelegram.com",60],["redlandsdailyfacts.com",60],["reviewjournal.com",60],["santacruzsentinel.com",60],["saratogian.com",60],["sentinelandenterprise.com",60],["sgvtribune.com",60],["tampabay.com",60],["times-standard.com",60],["theoaklandpress.com",60],["trentonian.com",60],["twincities.com",60],["whittierdailynews.com",60],["bostonherald.com",60],["dailycamera.com",60],["sbsun.com",60],["dailydemocrat.com",60],["montereyherald.com",60],["orovillemr.com",60],["record-bee.com",60],["redbluffdailynews.com",60],["reporterherald.com",60],["thereporter.com",60],["timescall.com",60],["timesheraldonline.com",60],["ukiahdailyjournal.com",60],["dailylocal.com",60],["8tracks.com",61],["revealname.com",62],["fcportables.com",[63,64]],["golfchannel.com",66],["telemundodeportes.com",66],["stream.nbcsports.com",66],["gamcore.com",67],["porcore.com",67],["69games.xxx",67],["javmix.app",67],["tecknity.com",68],["haaretz.co.il",69],["haaretz.com",69],["hungama.com",69],["a-o.ninja",69],["anime-odcinki.pl",69],["kumpulmanga.org",69],["shortgoo.blogspot.com",69],["tonanmedia.my.id",[69,460]],["yurasu.xyz",69],["isekaipalace.com",69],["megadescarga.net",[70,71,72,73]],["megadescargas.net",[70,71,72,73]],["vikistream.com",74],["eplayer.click",[74,75]],["mega4upload.com",[75,81]],["ennovelas.com",[75,81]],["n-tv.de",76],["brigitte.de",77],["stern.de",77],["foxsports.com.au",78],["canberratimes.com.au",78],["thesimsresource.com",79],["bdnewszh.com",81],["streamservicehd.click",81],["timeforbitco.in",82],["worldofbitco.in",[82,93]],["weatherx.co.in",[82,93]],["getyourbitco.in",82],["sunbtc.space",82],["ctrl.blog",83],["sportlife.es",84],["finofilipino.org",85],["acortarm.xyz",86],["acortame.xyz",86],["speedtest.net",87],["mysflink.blogspot.com",88],["assia.tv",89],["assia4.com",89],["assia24.com",89],["cwtvembeds.com",[91,124]],["xmateur.com",[91,92,107]],["camlovers.tv",91],["porntn.com",91],["pornissimo.org",91],["sexcams-24.com",[91,107]],["watchporn.to",[91,107]],["camwhorez.video",91],["footstockings.com",[92,107]],["sbs.com.au",[94,95]],["ojogos.com.br",97],["powforums.com",98],["supforums.com",98],["studybullet.com",98],["usgamer.net",99],["recordonline.com",99],["freebitcoin.win",101],["e-monsite.com",101],["coindice.win",101],["sport-tv-guide.live",102],["temp-mails.com",103],["freiepresse.de",104],["investing.com",105],["camhub.cc",107],["love4porn.com",107],["thotvids.com",107],["watchmdh.to",107],["celebwhore.com",107],["cluset.com",107],["4kporn.xxx",107],["xhomealone.com",107],["lusttaboo.com",[107,389]],["hentai-moon.com",107],["mp3fiber.com",108],["suedkurier.de",109],["anysex.com",111],["vlist.se",112],["pornve.com",113],["coolrom.com.au",114],["pornohirsch.net",115],["marie-claire.es",116],["gamezhero.com",116],["flashgirlgames.com",116],["onlinesudoku.games",116],["mpg.football",116],["sssam.com",116],["globalnews.ca",117],["drinksmixer.com",118],["leitesculinaria.com",118],["fupa.net",119],["browardpalmbeach.com",120],["dallasobserver.com",120],["houstonpress.com",120],["miaminewtimes.com",120],["phoenixnewtimes.com",120],["westword.com",120],["nhentai.net",121],["nowtv.com.tr",122],["caminspector.net",123],["camwhoreshd.com",123],["camgoddess.tv",123],["gay4porn.com",125],["mypornhere.com",125],["mediapason.it",126],["linkspaid.com",126],["tuotromedico.com",126],["neoteo.com",126],["phoneswiki.com",126],["celebmix.com",126],["myneobuxportal.com",126],["oyungibi.com",126],["25yearslatersite.com",126],["jeshoots.com",127],["techhx.com",127],["karanapk.com",127],["flashplayer.fullstacks.net",129],["cloudapps.herokuapp.com",129],["texteditor.nsspot.net",129],["youfiles.herokuapp.com",129],["temp-mail.org",130],["playembed.xyz",131],["javhdporn.net",131],["javstream.top",131],["comnuan.com",132],["veedi.com",133],["battleboats.io",133],["fruitlab.com",134],["haddoz.net",134],["garoetpos.com",134],["stiletv.it",135],["hqtv.biz",137],["liveuamap.com",138],["muvibg.com",138],["audycje.tokfm.pl",139],["hulu.com",[140,141,142]],["shush.se",143],["emurom.net",144],["allkpop.com",145],["azmath.info",146],["downfile.site",146],["downphanmem.com",146],["expertvn.com",146],["memangbau.com",146],["trangchu.news",146],["aztravels.net",146],["adfoc.us",146],["odiaalbumsong.com",146],["techreviewhere.com",146],["djrkmusicjaunpur.in",146],["cmsarkariyojana.com",146],["affilety.com",146],["comfortdecor.in",146],["plumlog.com",146],["apkeclipse.com",146],["djrkremix.com",146],["decidewhy.com",146],["funkeypagali.com",146],["careersides.com",146],["nayisahara.com",146],["wikifilmia.com",146],["infinityskull.com",146],["viewmyknowledge.com",146],["iisfvirtual.in",146],["starxinvestor.com",146],["myprivatejobs.com",[146,273]],["wikitraveltips.com",[146,273]],["amritadrino.com",[146,273]],["sahlmarketing.net",146],["filmypoints.in",146],["fitnessholic.net",146],["bankshiksha.in",146],["earn.mpscstudyhub.com",146],["earn.quotesopia.com",146],["money.quotesopia.com",146],["best-mobilegames.com",146],["learn.moderngyan.com",146],["bharatsarkarijobalert.com",146],["techacode.com",146],["trickms.com",146],["sptfy.be",146],["mcafee-com.com",[146,272]],["pickcrackpasswords.blogspot.com",148],["kfrfansub.com",149],["thuglink.com",149],["voipreview.org",149],["hanime.tv",150],["pogo.com",151],["cloudvideo.tv",152],["legionjuegos.org",153],["legionpeliculas.org",153],["legionprogramas.org",153],["16honeys.com",154],["elespanol.com",155],["remodelista.com",156],["coolmathgames.com",[157,158,159,521]],["audiofanzine.com",160],["noweconomy.live",162],["howifx.com",[162,230]],["vavada5com.com",162],["hitokin.net",163],["developerinsider.co",164],["ilprimatonazionale.it",165],["hotabis.com",165],["root-nation.com",165],["italpress.com",165],["airsoftmilsimnews.com",165],["artribune.com",165],["thehindu.com",166],["cambro.tv",[167,168]],["nibelungen-kurier.de",169],["pianetamountainbike.it",171],["barchart.com",172],["modelisme.com",173],["parasportontario.ca",173],["prescottenews.com",173],["nrj-play.fr",174],["oeffentlicher-dienst.info",175],["hackingwithreact.com",176],["gutekueche.at",177],["eplfootballmatch.com",178],["peekvids.com",179],["playvids.com",179],["pornflip.com",179],["redensarten-index.de",180],["vw-page.com",181],["viz.com",[182,183]],["queenfaucet.website",184],["0rechner.de",185],["configspc.com",186],["xopenload.me",186],["uptobox.com",186],["uptostream.com",186],["onepiece-tube.com",187],["japgay.com",188],["mega-debrid.eu",189],["dreamdth.com",190],["diaridegirona.cat",192],["diariodeibiza.es",192],["diariodemallorca.es",192],["diarioinformacion.com",192],["eldia.es",192],["emporda.info",192],["farodevigo.es",192],["laopinioncoruna.es",192],["laopiniondemalaga.es",192],["laopiniondemurcia.es",192],["laopiniondezamora.es",192],["laprovincia.es",192],["levante-emv.com",192],["mallorcazeitung.es",192],["regio7.cat",192],["superdeporte.es",192],["playpaste.com",193],["player.rtl2.de",194],["freetutorialsus.com",195],["vidlii.com",[195,211]],["iammagnus.com",195],["dailyvideoreports.net",195],["unityassets4free.com",195],["cnbc.com",196],["puzzles.msn.com",197],["metro.us",197],["newsobserver.com",197],["arkadiumhosted.com",197],["firefaucet.win",199],["55k.io",200],["filelions.online",200],["stmruby.com",200],["direct-link.net",201],["direkt-wissen.com",201],["link-to.net",201],["fullhdxxx.com",203],["pornclassic.tube",204],["tubepornclassic.com",204],["etonline.com",205],["creatur.io",205],["drphil.com",205],["urbanmilwaukee.com",205],["ontiva.com",205],["hideandseek.world",205],["myabandonware.com",205],["kendam.com",205],["wttw.com",205],["synonyms.com",205],["definitions.net",205],["hostmath.com",205],["camvideoshub.com",205],["minhaconexao.com.br",205],["home-made-videos.com",207],["pxrnxx.xyz",207],["amateur-couples.com",207],["slutdump.com",207],["produsat.com",209],["12thman.com",211],["acusports.com",211],["atlantic10.com",211],["auburntigers.com",211],["baylorbears.com",211],["bceagles.com",211],["bgsufalcons.com",211],["big12sports.com",211],["bigten.org",211],["bradleybraves.com",211],["butlersports.com",211],["cmumavericks.com",211],["conferenceusa.com",211],["cyclones.com",211],["dartmouthsports.com",211],["daytonflyers.com",211],["dbupatriots.com",211],["dbusports.com",211],["denverpioneers.com",211],["fduknights.com",211],["fgcuathletics.com",211],["fightinghawks.com",211],["fightingillini.com",211],["floridagators.com",211],["friars.com",211],["friscofighters.com",211],["gamecocksonline.com",211],["goarmywestpoint.com",211],["gobison.com",211],["goblueraiders.com",211],["gobobcats.com",211],["gocards.com",211],["gocreighton.com",211],["godeacs.com",211],["goexplorers.com",211],["goetbutigers.com",211],["gofrogs.com",211],["gogriffs.com",211],["gogriz.com",211],["golobos.com",211],["gomarquette.com",211],["gopack.com",211],["gophersports.com",211],["goprincetontigers.com",211],["gopsusports.com",211],["goracers.com",211],["goshockers.com",211],["goterriers.com",211],["gotigersgo.com",211],["gousfbulls.com",211],["govandals.com",211],["gowyo.com",211],["goxavier.com",211],["gozags.com",211],["gozips.com",211],["griffinathletics.com",211],["guhoyas.com",211],["gwusports.com",211],["hailstate.com",211],["hamptonpirates.com",211],["hawaiiathletics.com",211],["hokiesports.com",211],["huskers.com",211],["icgaels.com",211],["iuhoosiers.com",211],["jsugamecocksports.com",211],["longbeachstate.com",211],["loyolaramblers.com",211],["lrtrojans.com",211],["lsusports.net",211],["morrisvillemustangs.com",211],["msuspartans.com",211],["muleriderathletics.com",211],["mutigers.com",211],["navysports.com",211],["nevadawolfpack.com",211],["niuhuskies.com",211],["nkunorse.com",211],["nuhuskies.com",211],["nusports.com",211],["okstate.com",211],["olemisssports.com",211],["omavs.com",211],["ovcsports.com",211],["owlsports.com",211],["purduesports.com",211],["redstormsports.com",211],["richmondspiders.com",211],["sfajacks.com",211],["shupirates.com",211],["siusalukis.com",211],["smcgaels.com",211],["smumustangs.com",211],["soconsports.com",211],["soonersports.com",211],["themw.com",211],["tulsahurricane.com",211],["txst.com",211],["txstatebobcats.com",211],["ubbulls.com",211],["ucfknights.com",211],["ucirvinesports.com",211],["uconnhuskies.com",211],["uhcougars.com",211],["uicflames.com",211],["umterps.com",211],["uncwsports.com",211],["unipanthers.com",211],["unlvrebels.com",211],["uoflsports.com",211],["usdtoreros.com",211],["utahstateaggies.com",211],["utepathletics.com",211],["utrockets.com",211],["uvmathletics.com",211],["uwbadgers.com",211],["villanova.com",211],["wkusports.com",211],["wmubroncos.com",211],["woffordterriers.com",211],["1pack1goal.com",211],["bcuathletics.com",211],["bubraves.com",211],["goblackbears.com",211],["golightsgo.com",211],["gomcpanthers.com",211],["goutsa.com",211],["mercerbears.com",211],["pirateblue.com",211],["pirateblue.net",211],["pirateblue.org",211],["quinnipiacbobcats.com",211],["towsontigers.com",211],["tribeathletics.com",211],["tribeclub.com",211],["utepminermaniacs.com",211],["utepminers.com",211],["wkutickets.com",211],["aopathletics.org",211],["atlantichockeyonline.com",211],["bigsouthnetwork.com",211],["bigsouthsports.com",211],["chawomenshockey.com",211],["dbupatriots.org",211],["drakerelays.org",211],["ecac.org",211],["ecacsports.com",211],["emueagles.com",211],["emugameday.com",211],["gculopes.com",211],["godrakebulldog.com",211],["godrakebulldogs.com",211],["godrakebulldogs.net",211],["goeags.com",211],["goislander.com",211],["goislanders.com",211],["gojacks.com",211],["gomacsports.com",211],["gseagles.com",211],["hubison.com",211],["iowaconference.com",211],["ksuowls.com",211],["lonestarconference.org",211],["mascac.org",211],["midwestconference.org",211],["mountaineast.org",211],["niu-pack.com",211],["nulakers.ca",211],["oswegolakers.com",211],["ovcdigitalnetwork.com",211],["pacersports.com",211],["rmacsports.org",211],["rollrivers.com",211],["samfordsports.com",211],["uncpbraves.com",211],["usfdons.com",211],["wiacsports.com",211],["alaskananooks.com",211],["broncathleticfund.com",211],["cameronaggies.com",211],["columbiacougars.com",211],["etownbluejays.com",211],["gobadgers.ca",211],["golancers.ca",211],["gometrostate.com",211],["gothunderbirds.ca",211],["kentstatesports.com",211],["lehighsports.com",211],["lopers.com",211],["lycoathletics.com",211],["lycomingathletics.com",211],["maraudersports.com",211],["mauiinvitational.com",211],["msumavericks.com",211],["nauathletics.com",211],["nueagles.com",211],["nwusports.com",211],["oceanbreezenyc.org",211],["patriotathleticfund.com",211],["pittband.com",211],["principiaathletics.com",211],["roadrunnersathletics.com",211],["sidearmsocial.com",211],["snhupenmen.com",211],["stablerarena.com",211],["stoutbluedevils.com",211],["uwlathletics.com",211],["yumacs.com",211],["collegefootballplayoff.com",211],["csurams.com",211],["cubuffs.com",211],["gobearcats.com",211],["gohuskies.com",211],["mgoblue.com",211],["osubeavers.com",211],["pittsburghpanthers.com",211],["rolltide.com",211],["texassports.com",211],["thesundevils.com",211],["uclabruins.com",211],["wvuathletics.com",211],["wvusports.com",211],["arizonawildcats.com",211],["calbears.com",211],["cuse.com",211],["georgiadogs.com",211],["goducks.com",211],["goheels.com",211],["gostanford.com",211],["insidekstatesports.com",211],["insidekstatesports.info",211],["insidekstatesports.net",211],["insidekstatesports.org",211],["k-stateathletics.com",211],["k-statefootball.net",211],["k-statefootball.org",211],["k-statesports.com",211],["k-statesports.net",211],["k-statesports.org",211],["k-statewomenshoops.com",211],["k-statewomenshoops.net",211],["k-statewomenshoops.org",211],["kstateathletics.com",211],["kstatefootball.net",211],["kstatefootball.org",211],["kstatesports.com",211],["kstatewomenshoops.com",211],["kstatewomenshoops.net",211],["kstatewomenshoops.org",211],["ksuathletics.com",211],["ksusports.com",211],["scarletknights.com",211],["showdownforrelief.com",211],["syracusecrunch.com",211],["texastech.com",211],["theacc.com",211],["ukathletics.com",211],["usctrojans.com",211],["utahutes.com",211],["utsports.com",211],["wsucougars.com",211],["tricksplit.io",211],["fangraphs.com",212],["4players.de",[213,314]],["buffed.de",213],["gamesaktuell.de",213],["gamezone.de",213],["pcgames.de",213],["videogameszone.de",213],["planetaminecraft.com",214],["cravesandflames.com",215],["codesnse.com",215],["link.paid4file.com",215],["flyad.vip",215],["lapresse.ca",216],["kolyoom.com",217],["ilovephd.com",217],["negumo.com",218],["games.wkb.jp",[219,220]],["channelmyanmar.org",[221,222]],["u-s-news.com",222],["fandom.com",[223,539,540]],["kenshi.fandom.com",224],["hausbau-forum.de",225],["homeairquality.org",225],["faucettronn.click",225],["ticketmaster.sg",225],["fake-it.ws",226],["laksa19.github.io",227],["1shortlink.com",228],["nesia.my.id",229],["makemoneywithurl.com",230],["junkyponk.com",230],["healthfirstweb.com",230],["vocalley.com",230],["yogablogfit.com",230],["en.financerites.com",230],["mythvista.com",230],["blogtechh.com",230],["techbixby.com",230],["blogmyst.com",230],["resetoff.pl",231],["sexodi.com",231],["cdn77.org",232],["howtofixwindows.com",233],["3sexporn.com",234],["momxxxsex.com",234],["myfreevintageporn.com",234],["penisbuyutucum.net",234],["lightnovelworld.com",235],["ujszo.com",236],["newsmax.com",237],["bobs-tube.com",238],["nadidetarifler.com",239],["siz.tv",239],["suzylu.co.uk",[240,241]],["onworks.net",242],["yabiladi.com",242],["downloadsoft.net",243],["pixsera.net",244],["testlanguages.com",245],["newsinlevels.com",245],["videosinlevels.com",245],["cbs.com",246],["paramountplus.com",246],["buktube.com",247],["fullxh.com",247],["megaxh.com",247],["movingxh.world",247],["seexh.com",247],["taoxh.life",247],["unlockxh4.com",247],["xhaccess.com",247],["xhadult2.com",247],["xhadult3.com",247],["xhadult4.com",247],["xhadult5.com",247],["xhamster46.com",247],["xhbig.com",247],["xhday.com",247],["xhday1.com",247],["xhmoon5.com",247],["xhplanet1.com",247],["xhplanet2.com",247],["xhreal2.com",247],["xhreal3.com",247],["xhtab2.com",247],["xhtree.com",247],["xhvictory.com",247],["xhwebsite.com",247],["xhwebsite2.com",247],["xhwide1.com",247],["ultimate-guitar.com",248],["teachmemicro.com",249],["willcycle.com",249],["2ndrun.tv",249],["rackusreads.com",249],["xyzsports111.xyz",[250,251,252]],["xyzsports112.xyz",[250,251,252]],["xyzsports113.xyz",[250,251,252]],["xyzsports114.xyz",[250,251,252]],["xyzsprtsfrmr1.site",[250,251,252]],["xyzsprtsfrmr2.site",[250,251,252]],["claimbits.net",253],["sexyscope.net",254],["recherche-ebook.fr",256],["easymc.io",256],["zonebourse.com",257],["botrix.live",258],["pink-sluts.net",259],["madoohd.com",260],["andhrafriends.com",261],["benzinpreis.de",262],["defenseone.com",263],["govexec.com",263],["nextgov.com",263],["route-fifty.com",263],["sharing.wtf",264],["th.gl",[265,266]],["wetter3.de",267],["arahdrive.com",268],["aiimgvlog.fun",[268,272]],["esportivos.fun",269],["cosmonova-broadcast.tv",270],["soccerinhd.com",271],["techedubyte.com",271],["sinonimos.de",272],["antonimos.de",272],["quesignifi.ca",272],["tiktokrealtime.com",272],["tiktokcounter.net",272],["tpayr.xyz",272],["poqzn.xyz",272],["ashrfd.xyz",272],["rezsx.xyz",272],["tryzt.xyz",272],["ashrff.xyz",272],["rezst.xyz",272],["dawenet.com",272],["erzar.xyz",272],["waezm.xyz",272],["waezg.xyz",272],["blackwoodacademy.org",272],["cryptednews.space",272],["vivuq.com",272],["swgop.com",272],["vbnmll.com",272],["telcoinfo.online",272],["btcbitco.in",[272,275]],["btcsatoshi.net",272],["cempakajaya.com",272],["crypto4yu.com",272],["readbitcoin.org",272],["wiour.com",272],["finish.addurl.biz",272],["exactpay.online",272],["kiddyearner.com",272],["luckydice.net",273],["adarima.org",273],["tieutietkiem.com",273],["weatherwx.com",273],["sattaguess.com",273],["winshell.de",273],["rosasidan.ws",273],["modmakers.xyz",273],["gamepure.in",273],["warrenrahul.in",273],["austiblox.net",273],["upiapi.in",273],["myownguess.in",273],["networkhint.com",273],["watchhentai.net",273],["thichcode.net",273],["texturecan.com",273],["tikmate.app",[273,494]],["4funbox.com",274],["nephobox.com",274],["1024tera.com",274],["blog.cryptowidgets.net",275],["blog.insurancegold.in",275],["blog.wiki-topia.com",275],["blog.coinsvalue.net",275],["blog.cookinguide.net",275],["blog.freeoseocheck.com",275],["blog24.me",275],["bildirim.link",277],["appsbull.com",278],["diudemy.com",278],["maqal360.com",278],["lifesurance.info",279],["infokeeda.xyz",280],["webzeni.com",280],["arcai.com",281],["my-code4you.blogspot.com",282],["flickr.com",283],["firefile.cc",284],["pestleanalysis.com",284],["kochamjp.pl",284],["tutorialforlinux.com",284],["whatsaero.com",284],["animeblkom.net",[284,300]],["blkom.com",284],["globes.co.il",[285,286]],["jardiner-malin.fr",287],["tw-calc.net",288],["ohmybrush.com",289],["talkceltic.net",290],["mentalfloss.com",291],["uprafa.com",292],["cube365.net",293],["nightfallnews.com",[294,295]],["wwwfotografgotlin.blogspot.com",296],["freelistenonline.com",296],["badassdownloader.com",297],["quickporn.net",298],["yellowbridge.com",299],["aosmark.com",301],["atozmath.com",[303,304,305,306,307,308,309]],["newyorker.com",310],["brighteon.com",311],["more.tv",312],["video1tube.com",313],["alohatube.xyz",313],["fshost.me",315],["link.cgtips.org",316],["hentaicloud.com",317],["netfapx.com",319],["paperzonevn.com",320],["hentaienglish.com",321],["hentaiporno.xxx",321],["venge.io",[322,323]],["btcbux.io",324],["its.porn",[325,326]],["atv.at",327],["kusonime.com",[328,329]],["jetpunk.com",331],["imgur.com",332],["hentai-party.com",333],["hentaicomics.pro",333],["xxx-comics.pro",333],["genshinimpactcalculator.com",336],["axenthost.com",336],["mysexgames.com",337],["embed.indavideo.hu",340],["coinurl.net",[341,342]],["gdr-online.com",343],["mmm.dk",344],["iqiyi.com",[345,346,488]],["m.iqiyi.com",347],["japopav.tv",348],["lvturbo.com",348],["nbcolympics.com",349],["apkhex.com",350],["indiansexstories2.net",351],["issstories.xyz",351],["1340kbbr.com",352],["gorgeradio.com",352],["kduk.com",352],["kedoam.com",352],["kejoam.com",352],["kelaam.com",352],["khsn1230.com",352],["kjmx.rocks",352],["kloo.com",352],["klooam.com",352],["klykradio.com",352],["kmed.com",352],["kmnt.com",352],["kool991.com",352],["kpnw.com",352],["kppk983.com",352],["krktcountry.com",352],["ktee.com",352],["kwro.com",352],["kxbxfm.com",352],["thevalley.fm",352],["quizlet.com",353],["dsocker1234.blogspot.com",354],["blick.ch",355],["mgnet.xyz",356],["designtagebuch.de",357],["pixroute.com",358],["uploady.io",359],["calculator-online.net",360],["porngames.club",361],["sexgames.xxx",361],["111.90.159.132",362],["battleplan.news",362],["mobile-tracker-free.com",363],["pfps.gg",364],["ac-illust.com",[365,366]],["photo-ac.com",[365,366]],["vlxxs.net",367],["rapelust.com",367],["vtube.to",367],["vtplay.net",367],["desitelugusex.com",367],["xvideos-downloader.net",367],["xxxvideotube.net",367],["sdefx.cloud",367],["nozomi.la",367],["moviesonlinefree.net",367],["social-unlock.com",368],["ninja.io",369],["sourceforge.net",370],["samfirms.com",371],["banned.video",372],["madmaxworld.tv",372],["huffpost.com",373],["ingles.com",374],["spanishdict.com",374],["surfline.com",[375,376]],["play.tv3.ee",377],["play.tv3.lt",377],["play.tv3.lv",377],["tv3play.skaties.lv",377],["trendyoum.com",378],["bulbagarden.net",379],["moviestars.to",380],["hollywoodlife.com",381],["mat6tube.com",382],["textstudio.co",383],["newtumbl.com",384],["nevcoins.club",386],["mail.com",387],["oggi.it",[390,391]],["manoramamax.com",390],["video.gazzetta.it",[390,391]],["mangakita.id",392],["mangakita.net",392],["poscishd.online",393],["avpgalaxy.net",394],["mhma12.tech",395],["panda-novel.com",396],["zebranovel.com",396],["lightsnovel.com",396],["eaglesnovel.com",396],["pandasnovel.com",396],["zadfaucet.com",397],["ewrc-results.com",398],["kizi.com",399],["cyberscoop.com",400],["fedscoop.com",400],["canale.live",401],["loawa.com",402],["ygosu.com",402],["sportalkorea.com",402],["edaily.co.kr",402],["economist.co.kr",402],["etoday.co.kr",402],["isplus.com",402],["hometownstation.com",402],["inven.co.kr",402],["honkailab.com",402],["genshinlab.com",402],["thestockmarketwatch.com",402],["thephoblographer.com",402],["issuya.com",402],["etnews.com",402],["iusm.co.kr",402],["dogdrip.net",402],["worldhistory.org",402],["text-compare.com",402],["bamgosu.site",402],["etnewskorea.com",402],["automobile-catalog.com",402],["maketecheasier.com",402],["thesaurus.net",402],["gadgets360.com",402],["thestar.co.uk",402],["yorkshirepost.co.uk",402],["logicieleducatif.fr",402],["motorbikecatalog.com",402],["jjang0u.com",402],["raenonx.cc",402],["mafiatown.pl",[403,404]],["jeep-cj.com",405],["sponsorhunter.com",406],["cloudcomputingtopics.net",407],["likecs.com",408],["tiscali.it",409],["linkspy.cc",410],["tutelehd3.xyz",411],["dirty.pink",[412,413,414]],["adshnk.com",415],["chattanoogan.com",416],["adsy.pw",417],["playstore.pw",417],["socialmediagirls.com",418],["windowspro.de",419],["snapinsta.app",420],["tvtv.ca",421],["tvtv.us",421],["mydaddy.cc",422],["roadtrippin.fr",423],["redketchup.io",[424,425,426]],["anyporn.com",[427,442]],["bravoporn.com",427],["bravoteens.com",427],["crocotube.com",427],["hellmoms.com",427],["hellporno.com",427],["sex3.com",427],["tubewolf.com",427],["xbabe.com",427],["xcum.com",427],["zedporn.com",427],["imagetotext.info",428],["infokik.com",429],["freepik.com",430],["ddwloclawek.pl",[431,432]],["deezer.com",433],["my-subs.co",434],["plaion.com",435],["slideshare.net",[436,437]],["ustreasuryyieldcurve.com",438],["businesssoftwarehere.com",439],["goo.st",439],["freevpshere.com",439],["softwaresolutionshere.com",439],["staige.tv",443],["in-jpn.com",444],["oninet.ne.jp",444],["xth.jp",444],["androidadult.com",445],["streamvid.net",446],["watchtv24.com",447],["cellmapper.net",448],["medscape.com",449],["newscon.org",[450,451]],["arkadium.com",452],["wheelofgold.com",453],["ozulmanga.com",453],["bembed.net",454],["embedv.net",454],["fslinks.org",454],["listeamed.net",454],["v6embed.xyz",454],["vgplayer.xyz",454],["vid-guard.com",454],["app.blubank.com",455],["mobileweb.bankmellat.ir",455],["sportdeutschland.tv",456],["kcra.com",456],["wcvb.com",456],["ccthesims.com",461],["chromeready.com",461],["coursedrive.org",461],["dtbps3games.com",461],["illustratemagazine.com",461],["uknip.co.uk",461],["vod.pl",462],["megadrive-emulator.com",463],["animesaga.in",466],["moviesapi.club",466],["bestx.stream",466],["watchx.top",466],["digimanie.cz",467],["svethardware.cz",467],["srvy.ninja",468],["drawer-opportunity-i-243.site",469],["tchatche.com",470],["edmdls.com",471],["freshremix.net",471],["scenedl.org",471],["trakt.tv",[472,473,474]],["shroomers.app",475],["di.fm",[476,477,478]],["jazzradio.com",[476,477,478]],["pc-builds.com",479],["qtoptens.com",479],["reuters.com",479],["today.com",479],["videogamer.com",479],["wrestlinginc.com",479],["gbatemp.net",479],["movie-th.tv",480],["iwanttfc.com",481],["nutraingredients-asia.com",482],["nutraingredients-latam.com",482],["nutraingredients-usa.com",482],["nutraingredients.com",482],["livesportsclub.me",483],["rogstream.fun",483],["ozulscansen.com",484],["fitnessbr.click",485],["minhareceita.xyz",485],["doomied.monster",486],["lookmovie2.to",486],["royalroad.com",487],["biletomat.pl",489],["hextank.io",[490,491]],["filmizlehdfilm.com",[492,493]],["sagewater.com",495],["redlion.net",495],["satdl.com",496],["veev.to",497],["vidstreaming.xyz",498],["myradioonline.pl",499],["tacobell.com",501],["zefoy.com",502],["natgeotv.com",504],["br.de",505],["indeed.com",506],["pasteboard.co",507],["clickhole.com",508],["deadspin.com",508],["gizmodo.com",508],["jalopnik.com",508],["jezebel.com",508],["kotaku.com",508],["lifehacker.com",508],["splinternews.com",508],["theinventory.com",508],["theonion.com",508],["theroot.com",508],["thetakeout.com",508],["pewresearch.org",508],["los40.com",[509,510]],["as.com",510],["telegraph.co.uk",[511,512]],["poweredbycovermore.com",[511,561]],["lumens.com",[511,561]],["verizon.com",513],["humanbenchmark.com",514],["politico.com",515],["officedepot.co.cr",[516,517]],["usnews.com",520],["factable.com",522],["zee5.com",523],["gala.fr",524],["geo.fr",524],["voici.fr",524],["gloucestershirelive.co.uk",525],["arsiv.mackolik.com",526],["jacksonguitars.com",527],["scandichotels.com",528],["stylist.co.uk",529],["nettiauto.com",530],["thaiairways.com",[531,532]],["cerbahealthcare.it",[533,534]],["futura-sciences.com",[533,551]],["tiendaenlinea.claro.com.ni",[535,536]],["tieba.baidu.com",537],["linktr.ee",538],["grasshopper.com",[541,542]],["epson.com.cn",[543,544,545,546]],["oe24.at",[547,548]],["szbz.de",547],["platform.autods.com",[549,550]],["wikihow.com",552],["citibank.com.sg",553],["uol.com.br",[554,555,556,557]],["gazzetta.gr",558],["digicol.dpm.org.cn",[559,560]],["virginmediatelevision.ie",562],["larazon.es",[563,564]],["waitrosecellar.com",[565,566,567]],["sharpen-free-design-generator.netlify.app",[569,570]],["help.cashctrl.com",[571,572]],["commande.rhinov.pro",[573,574]],["ecom.wixapps.net",[573,574]],["foxbusiness.com",[575,576]],["foxnews.com",[575,576]],["tipranks.com",[577,578]],["iceland.co.uk",[579,580,581]],["socket.pearsoned.com",582],["tntdrama.com",[583,584]],["mobile.de",[585,586]],["ioe.vn",[587,588]],["geiriadur.ac.uk",[587,591]],["bikeportland.org",[589,590]],["biologianet.com",[555,556,557]],["10play.com.au",[592,593]],["sunshine-live.de",[594,595]],["whatismyip.com",[596,597]],["myfitnesspal.com",598],["netoff.co.jp",[599,600]],["clickjogos.com.br",603],["bristan.com",[604,605]],["zillow.com",606],["share.hntv.tv",[607,608,609,610]],["optimum.net",[611,612]],["pvrcinemas.com",[613,614]],["financemonk.net",615],["weather.com",[618,619]],["ubereats.com",[618,619]]]);

const entitiesMap = new Map([["watch-series",9],["watchseries",9],["vev",9],["vidop",9],["vidup",9],["starmusiq",12],["wcofun",12],["kissasian",14],["gogoanime",[14,51]],["1movies",[14,17]],["xmovies8",14],["animeheaven",14],["0123movies",14],["gostream",14],["gomovies",14],["primewire",15],["streanplay",[15,16]],["sbplay",15],["milfnut",15],["sxyprn",20],["hqq",[21,22]],["waaw",[22,23]],["younetu",22],["vvtplayer",22],["123link",24],["adshort",24],["linkshorts",24],["adsrt",24],["vinaurl",24],["adfloz",24],["dutchycorp",24],["shortearn",24],["pingit",24],["shrink",24],["tmearn",24],["megalink",24],["miniurl",24],["gplinks",24],["clk",24],["pureshort",24],["shrinke",24],["shrinkme",24],["pcprogramasymas",24],["link1s",24],["shortzzy",24],["shorttey",[24,205]],["lite-link",24],["adcorto",24],["zshort",24],["upfiles",24],["linkfly",24],["wplink",24],["seulink",24],["encurtalink",24],["camwhores",[25,38,90,91,92]],["tube8",[26,27]],["youporn",27],["redtube",27],["pornhub",[27,191]],["upornia",[29,30]],["fmovies",51],["xtits",[55,125]],["streamwish",[57,58]],["pouvideo",65],["povvideo",65],["povw1deo",65],["povwideo",65],["powv1deo",65],["powvibeo",65],["powvideo",65],["powvldeo",65],["acortalo",[70,71,72,73]],["acortar",[70,71,72,73]],["plyjam",[74,75]],["fxporn69",80],["vipbox",81],["viprow",81],["desbloqueador",86],["xberuang",88],["teknorizen",88],["subtorrents",96],["subtorrents1",96],["newpelis",96],["pelix",96],["allcalidad",96],["infomaniakos",96],["filecrypt",100],["tornadomovies",106],["sexwebvideo",107],["mangovideo",107],["icdrama",112],["mangasail",112],["file4go",114],["asianclub",131],["anitube",134],["mixdrop",136],["azsoft",146],["uploadev",161],["ver-pelis-online",170],["ancient-origins",178],["spankbang",198],["lookcam",205],["lootlinks",205],["dpstream",208],["bluemediafiles",210],["docer",231],["hamsterix",247],["xhamster",247],["xhamster1",247],["xhamster10",247],["xhamster11",247],["xhamster12",247],["xhamster13",247],["xhamster14",247],["xhamster15",247],["xhamster16",247],["xhamster17",247],["xhamster18",247],["xhamster19",247],["xhamster20",247],["xhamster2",247],["xhamster3",247],["xhamster4",247],["xhamster42",247],["xhamster5",247],["xhamster7",247],["xhamster8",247],["kickassanime",255],["doomovie-hd",260],["terabox",274],["ctrlv",302],["123movieshd",330],["uproxy",334],["animesa",335],["cinecalidad",[338,339]],["dvdplay",367],["apkmaven",385],["gmx",388],["gamereactor",441],["vembed",454],["empire-stream",[457,458,459]],["empire-streaming",[457,458,459]],["tvhay",[464,465]],["lookmovie",486],["filmizletv",[492,493]],["www.google",500],["officedepot",[518,519]],["foundit",[601,602]],["dropgalaxy",615]]);

const exceptionsMap = new Map([["pingit.com",[24]],["pingit.me",[24]],["lookmovie.studio",[486]]]);

/******************************************************************************/

function setConstant(
    ...args
) {
    setConstantFn(false, ...args);
}

function setConstantFn(
    trusted = false,
    chain = '',
    rawValue = ''
) {
    if ( chain === '' ) { return; }
    const safe = safeSelf();
    const logPrefix = safe.makeLogPrefix('set-constant', chain, rawValue);
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 3);
    function setConstant(chain, rawValue) {
        const trappedProp = (( ) => {
            const pos = chain.lastIndexOf('.');
            if ( pos === -1 ) { return chain; }
            return chain.slice(pos+1);
        })();
        const cloakFunc = fn => {
            safe.Object_defineProperty(fn, 'name', { value: trappedProp });
            return new Proxy(fn, {
                defineProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.defineProperty(...arguments);
                    }
                    return true;
                },
                deleteProperty(target, prop) {
                    if ( prop !== 'toString' ) {
                        return Reflect.deleteProperty(...arguments);
                    }
                    return true;
                },
                get(target, prop) {
                    if ( prop === 'toString' ) {
                        return function() {
                            return `function ${trappedProp}() { [native code] }`;
                        }.bind(null);
                    }
                    return Reflect.get(...arguments);
                },
            });
        };
        if ( trappedProp === '' ) { return; }
        const thisScript = document.currentScript;
        let normalValue = validateConstantFn(trusted, rawValue);
        if ( rawValue === 'noopFunc' || rawValue === 'trueFunc' || rawValue === 'falseFunc' ) {
            normalValue = cloakFunc(normalValue);
        }
        let aborted = false;
        const mustAbort = function(v) {
            if ( trusted ) { return false; }
            if ( aborted ) { return true; }
            aborted =
                (v !== undefined && v !== null) &&
                (normalValue !== undefined && normalValue !== null) &&
                (typeof v !== typeof normalValue);
            if ( aborted ) {
                safe.uboLog(logPrefix, `Aborted because value set to ${v}`);
            }
            return aborted;
        };
        // https://github.com/uBlockOrigin/uBlock-issues/issues/156
        //   Support multiple trappers for the same property.
        const trapProp = function(owner, prop, configurable, handler) {
            if ( handler.init(configurable ? owner[prop] : normalValue) === false ) { return; }
            const odesc = safe.Object_getOwnPropertyDescriptor(owner, prop);
            let prevGetter, prevSetter;
            if ( odesc instanceof safe.Object ) {
                owner[prop] = normalValue;
                if ( odesc.get instanceof Function ) {
                    prevGetter = odesc.get;
                }
                if ( odesc.set instanceof Function ) {
                    prevSetter = odesc.set;
                }
            }
            try {
                safe.Object_defineProperty(owner, prop, {
                    configurable,
                    get() {
                        if ( prevGetter !== undefined ) {
                            prevGetter();
                        }
                        return handler.getter();
                    },
                    set(a) {
                        if ( prevSetter !== undefined ) {
                            prevSetter(a);
                        }
                        handler.setter(a);
                    }
                });
                safe.uboLog(logPrefix, 'Trap installed');
            } catch(ex) {
                safe.uboErr(logPrefix, ex);
            }
        };
        const trapChain = function(owner, chain) {
            const pos = chain.indexOf('.');
            if ( pos === -1 ) {
                trapProp(owner, chain, false, {
                    v: undefined,
                    init: function(v) {
                        if ( mustAbort(v) ) { return false; }
                        this.v = v;
                        return true;
                    },
                    getter: function() {
                        if ( document.currentScript === thisScript ) {
                            return this.v;
                        }
                        safe.uboLog(logPrefix, 'Property read');
                        return normalValue;
                    },
                    setter: function(a) {
                        if ( mustAbort(a) === false ) { return; }
                        normalValue = a;
                    }
                });
                return;
            }
            const prop = chain.slice(0, pos);
            const v = owner[prop];
            chain = chain.slice(pos + 1);
            if ( v instanceof safe.Object || typeof v === 'object' && v !== null ) {
                trapChain(v, chain);
                return;
            }
            trapProp(owner, prop, true, {
                v: undefined,
                init: function(v) {
                    this.v = v;
                    return true;
                },
                getter: function() {
                    return this.v;
                },
                setter: function(a) {
                    this.v = a;
                    if ( a instanceof safe.Object ) {
                        trapChain(a, chain);
                    }
                }
            });
        };
        trapChain(window, chain);
    }
    runAt(( ) => {
        setConstant(chain, rawValue);
    }, extraArgs.runAt);
}

function runAt(fn, when) {
    const intFromReadyState = state => {
        const targets = {
            'loading': 1,
            'interactive': 2, 'end': 2, '2': 2,
            'complete': 3, 'idle': 3, '3': 3,
        };
        const tokens = Array.isArray(state) ? state : [ state ];
        for ( const token of tokens ) {
            const prop = `${token}`;
            if ( targets.hasOwnProperty(prop) === false ) { continue; }
            return targets[prop];
        }
        return 0;
    };
    const runAt = intFromReadyState(when);
    if ( intFromReadyState(document.readyState) >= runAt ) {
        fn(); return;
    }
    const onStateChange = ( ) => {
        if ( intFromReadyState(document.readyState) < runAt ) { return; }
        fn();
        safe.removeEventListener.apply(document, args);
    };
    const safe = safeSelf();
    const args = [ 'readystatechange', onStateChange, { capture: true } ];
    safe.addEventListener.apply(document, args);
}

function safeSelf() {
    if ( scriptletGlobals.safeSelf ) {
        return scriptletGlobals.safeSelf;
    }
    const self = globalThis;
    const safe = {
        'Array_from': Array.from,
        'Error': self.Error,
        'Function_toStringFn': self.Function.prototype.toString,
        'Function_toString': thisArg => safe.Function_toStringFn.call(thisArg),
        'Math_floor': Math.floor,
        'Math_max': Math.max,
        'Math_min': Math.min,
        'Math_random': Math.random,
        'Object': Object,
        'Object_defineProperty': Object.defineProperty.bind(Object),
        'Object_fromEntries': Object.fromEntries.bind(Object),
        'Object_getOwnPropertyDescriptor': Object.getOwnPropertyDescriptor.bind(Object),
        'RegExp': self.RegExp,
        'RegExp_test': self.RegExp.prototype.test,
        'RegExp_exec': self.RegExp.prototype.exec,
        'Request_clone': self.Request.prototype.clone,
        'XMLHttpRequest': self.XMLHttpRequest,
        'addEventListener': self.EventTarget.prototype.addEventListener,
        'removeEventListener': self.EventTarget.prototype.removeEventListener,
        'fetch': self.fetch,
        'JSON': self.JSON,
        'JSON_parseFn': self.JSON.parse,
        'JSON_stringifyFn': self.JSON.stringify,
        'JSON_parse': (...args) => safe.JSON_parseFn.call(safe.JSON, ...args),
        'JSON_stringify': (...args) => safe.JSON_stringifyFn.call(safe.JSON, ...args),
        'log': console.log.bind(console),
        // Properties
        logLevel: 0,
        // Methods
        makeLogPrefix(...args) {
            return this.sendToLogger && `[${args.join(' \u205D ')}]` || '';
        },
        uboLog(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('info', ...args);
            
        },
        uboErr(...args) {
            if ( this.sendToLogger === undefined ) { return; }
            if ( args === undefined || args[0] === '' ) { return; }
            return this.sendToLogger('error', ...args);
        },
        escapeRegexChars(s) {
            return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        },
        initPattern(pattern, options = {}) {
            if ( pattern === '' ) {
                return { matchAll: true };
            }
            const expect = (options.canNegate !== true || pattern.startsWith('!') === false);
            if ( expect === false ) {
                pattern = pattern.slice(1);
            }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match !== null ) {
                return {
                    re: new this.RegExp(
                        match[1],
                        match[2] || options.flags
                    ),
                    expect,
                };
            }
            if ( options.flags !== undefined ) {
                return {
                    re: new this.RegExp(this.escapeRegexChars(pattern),
                        options.flags
                    ),
                    expect,
                };
            }
            return { pattern, expect };
        },
        testPattern(details, haystack) {
            if ( details.matchAll ) { return true; }
            if ( details.re ) {
                return this.RegExp_test.call(details.re, haystack) === details.expect;
            }
            return haystack.includes(details.pattern) === details.expect;
        },
        patternToRegex(pattern, flags = undefined, verbatim = false) {
            if ( pattern === '' ) { return /^/; }
            const match = /^\/(.+)\/([gimsu]*)$/.exec(pattern);
            if ( match === null ) {
                const reStr = this.escapeRegexChars(pattern);
                return new RegExp(verbatim ? `^${reStr}$` : reStr, flags);
            }
            try {
                return new RegExp(match[1], match[2] || undefined);
            }
            catch(ex) {
            }
            return /^/;
        },
        getExtraArgs(args, offset = 0) {
            const entries = args.slice(offset).reduce((out, v, i, a) => {
                if ( (i & 1) === 0 ) {
                    const rawValue = a[i+1];
                    const value = /^\d+$/.test(rawValue)
                        ? parseInt(rawValue, 10)
                        : rawValue;
                    out.push([ a[i], value ]);
                }
                return out;
            }, []);
            return this.Object_fromEntries(entries);
        },
        onIdle(fn, options) {
            if ( self.requestIdleCallback ) {
                return self.requestIdleCallback(fn, options);
            }
            return self.requestAnimationFrame(fn);
        },
    };
    scriptletGlobals.safeSelf = safe;
    if ( scriptletGlobals.bcSecret === undefined ) { return safe; }
    // This is executed only when the logger is opened
    const bc = new self.BroadcastChannel(scriptletGlobals.bcSecret);
    let bcBuffer = [];
    safe.logLevel = scriptletGlobals.logLevel || 1;
    safe.sendToLogger = (type, ...args) => {
        if ( args.length === 0 ) { return; }
        const text = `[${document.location.hostname || document.location.href}]${args.join(' ')}`;
        if ( bcBuffer === undefined ) {
            return bc.postMessage({ what: 'messageToLogger', type, text });
        }
        bcBuffer.push({ type, text });
    };
    bc.onmessage = ev => {
        const msg = ev.data;
        switch ( msg ) {
        case 'iamready!':
            if ( bcBuffer === undefined ) { break; }
            bcBuffer.forEach(({ type, text }) =>
                bc.postMessage({ what: 'messageToLogger', type, text })
            );
            bcBuffer = undefined;
            break;
        case 'setScriptletLogLevelToOne':
            safe.logLevel = 1;
            break;
        case 'setScriptletLogLevelToTwo':
            safe.logLevel = 2;
            break;
        }
    };
    bc.postMessage('areyouready?');
    return safe;
}

function validateConstantFn(trusted, raw) {
    const safe = safeSelf();
    const extraArgs = safe.getExtraArgs(Array.from(arguments), 2);
    let value;
    if ( raw === 'undefined' ) {
        value = undefined;
    } else if ( raw === 'false' ) {
        value = false;
    } else if ( raw === 'true' ) {
        value = true;
    } else if ( raw === 'null' ) {
        value = null;
    } else if ( raw === "''" || raw === '' ) {
        value = '';
    } else if ( raw === '[]' || raw === 'emptyArr' ) {
        value = [];
    } else if ( raw === '{}' || raw === 'emptyObj' ) {
        value = {};
    } else if ( raw === 'noopFunc' ) {
        value = function(){};
    } else if ( raw === 'trueFunc' ) {
        value = function(){ return true; };
    } else if ( raw === 'falseFunc' ) {
        value = function(){ return false; };
    } else if ( /^-?\d+$/.test(raw) ) {
        value = parseInt(raw);
        if ( isNaN(raw) ) { return; }
        if ( Math.abs(raw) > 0x7FFF ) { return; }
    } else if ( trusted ) {
        if ( raw.startsWith('{') && raw.endsWith('}') ) {
            try { value = safe.JSON_parse(raw).value; } catch(ex) { return; }
        }
    } else {
        return;
    }
    if ( extraArgs.as !== undefined ) {
        if ( extraArgs.as === 'function' ) {
            return ( ) => value;
        } else if ( extraArgs.as === 'callback' ) {
            return ( ) => (( ) => value);
        } else if ( extraArgs.as === 'resolved' ) {
            return Promise.resolve(value);
        } else if ( extraArgs.as === 'rejected' ) {
            return Promise.reject(value);
        }
    }
    return value;
}

/******************************************************************************/

const hnParts = [];
try { hnParts.push(...document.location.hostname.split('.')); }
catch(ex) { }
const hnpartslen = hnParts.length;
if ( hnpartslen === 0 ) { return; }

const todoIndices = new Set();
const tonotdoIndices = [];

// Exceptions
if ( exceptionsMap.size !== 0 ) {
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        const excepted = exceptionsMap.get(hn);
        if ( excepted ) { tonotdoIndices.push(...excepted); }
    }
    exceptionsMap.clear();
}

// Hostname-based
if ( hostnamesMap.size !== 0 ) {
    const collectArgIndices = hn => {
        let argsIndices = hostnamesMap.get(hn);
        if ( argsIndices === undefined ) { return; }
        if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
        for ( const argsIndex of argsIndices ) {
            if ( tonotdoIndices.includes(argsIndex) ) { continue; }
            todoIndices.add(argsIndex);
        }
    };
    for ( let i = 0; i < hnpartslen; i++ ) {
        const hn = hnParts.slice(i).join('.');
        collectArgIndices(hn);
    }
    collectArgIndices('*');
    hostnamesMap.clear();
}

// Entity-based
if ( entitiesMap.size !== 0 ) {
    const n = hnpartslen - 1;
    for ( let i = 0; i < n; i++ ) {
        for ( let j = n; j > i; j-- ) {
            const en = hnParts.slice(i,j).join('.');
            let argsIndices = entitiesMap.get(en);
            if ( argsIndices === undefined ) { continue; }
            if ( typeof argsIndices === 'number' ) { argsIndices = [ argsIndices ]; }
            for ( const argsIndex of argsIndices ) {
                if ( tonotdoIndices.includes(argsIndex) ) { continue; }
                todoIndices.add(argsIndex);
            }
        }
    }
    entitiesMap.clear();
}

// Apply scriplets
for ( const i of todoIndices ) {
    try { setConstant(...argsList[i]); }
    catch(ex) {}
}
argsList.length = 0;

/******************************************************************************/

};
// End of code to inject

/******************************************************************************/

// Inject code

// https://bugzilla.mozilla.org/show_bug.cgi?id=1736575
//   'MAIN' world not yet supported in Firefox, so we inject the code into
//   'MAIN' ourself when environment in Firefox.

const targetWorld = 'MAIN';

// Not Firefox
if ( typeof wrappedJSObject !== 'object' || targetWorld === 'ISOLATED' ) {
    return uBOL_setConstant();
}

// Firefox
{
    const page = self.wrappedJSObject;
    let script, url;
    try {
        page.uBOL_setConstant = cloneInto([
            [ '(', uBOL_setConstant.toString(), ')();' ],
            { type: 'text/javascript; charset=utf-8' },
        ], self);
        const blob = new page.Blob(...page.uBOL_setConstant);
        url = page.URL.createObjectURL(blob);
        const doc = page.document;
        script = doc.createElement('script');
        script.async = false;
        script.src = url;
        (doc.head || doc.documentElement || doc).append(script);
    } catch (ex) {
        console.error(ex);
    }
    if ( url ) {
        if ( script ) { script.remove(); }
        page.URL.revokeObjectURL(url);
    }
    delete page.uBOL_setConstant;
}

/******************************************************************************/

// End of local scope
})();

/******************************************************************************/

void 0;
