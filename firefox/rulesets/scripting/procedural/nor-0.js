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

'use strict';

// ruleset: nor-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".teaser__native\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\".aside-image-with-link\",\"tasks\":[[\"has\",{\"selector\":\"[href^=\\\"https://www.whatsnxt.io/\\\"]\"}]]}"],["{\"selector\":\"#grtvbelt_Sponsored\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".ad_interscroller\",\"tasks\":[[\"upward\",\".wrapper\"]]}"],["{\"selector\":\".js-betting-widget.is-country-no\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/[kc]as\\\\ino/i\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"]]}"],["{\"selector\":\"li.tv\",\"tasks\":[[\"has\",{\"selector\":\"> .do-link\"}]]}","{\"selector\":\"li[class^=\\\"tv\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"img:is([alt*=\\\"bet\\\" i], [alt*=\\\"tipping\\\" i])\"}]]}"],["{\"selector\":\"script[src^=\\\"//s1.adform.net\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has\",{\"selector\":\"+ p\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".wg-editorial\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"cx_\\\"]\"}]]}"],["{\"selector\":\"div[class*=\\\"col\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .native-teaser\"}]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"img\"}]]}]]}"],["{\"selector\":\".col-300 > .wrapper-sticky\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}","{\"selector\":\"a[href*=\\\".bedrageri.com/\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#dbashopping-widget\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"p1=sponsorclick\\\"]\"}]]}"],["{\"selector\":\".section-1-ad\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".dre-container--margin-bottom\",\"tasks\":[[\"has\",{\"selector\":\".hydra-marketing-banner\"}]]}"],["{\"selector\":\"div[id^=\\\"leftAdSpotAdcontainer\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".fnSpaceManagement > div\",\"tasks\":[[\"has\",{\"selector\":\"> .widgetiframe\"}]]}"],["{\"selector\":\".bluebox\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"bet365\\\"]\"}]]}","{\"selector\":\".bluebox\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"cncpt-rec\\\"]\"}]]}","{\"selector\":\".bluebox_headlines\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"cncpt-rec\\\"]\"}]]}"],["{\"selector\":\"div[class^=\\\"tmplNews_body_\\\"] > p:last-of-type\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}"],["{\"selector\":\".post-content > p\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}"],["{\"selector\":\".et_section_regular\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> .adblock\"}]]}","{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"jourbox\\\"] > iframe[src*=\\\"readpeak\\\"]\"}]]}"],["{\"selector\":\".panel-latest-forum-threads\",\"tasks\":[[\"has-text\",\" sponsor\"]]}"],["{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"betting\\\"]\"}]]}","{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}","{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"mr-green\\\"]\"}]]}","{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"online-spil\\\"]\"}]]}","{\"selector\":\".article\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"spillemaskin\\\"]\"}]]}"],["{\"selector\":\".widget_custom_html\",\"tasks\":[[\"has\",{\"selector\":\"ins\"}]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"]]}"],["{\"selector\":\".boxbanner\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#taboola-above-article-thumbnails\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".list-group\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\".col-md-4\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"afkobling-hverdag\\\"]\"}]]}","{\"selector\":\".col-md-4\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}","{\"selector\":\".col-md-4\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"spil\\\"]\"}]]}"],["{\"selector\":\"div[class=\\\" margin-top-lg \\\"]\",\"tasks\":[[\"has\",{\"selector\":\".custom-ad-container\"}]]}"],["{\"selector\":\".adunit-lazy\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".newsbox\",\"tasks\":[[\"has\",{\"selector\":\".adunit-lazy\"}]]}"],["{\"selector\":\".elementor-widget-wrap > .elementor-section\",\"tasks\":[[\"has-text\",\"REKLAMER\"]]}"],["{\"selector\":\".uk-panel-box\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}"],["{\"selector\":\".blog-post\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\"#header > div\",\"tasks\":[[\"has\",{\"selector\":\"div[id*=\\\"gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".clearfixP.columns[style] .clearfixP.box-no-border\",\"tasks\":[[\"has\",{\"selector\":\"> .narrow-banner\"}]]}","{\"selector\":\".color-scheme-1\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"],[\"spath\",\" + div\"]]}","{\"selector\":\".color-scheme-1\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"]]}","{\"selector\":\"script[data-adfscript]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}"],["{\"selector\":\"div[data-testid=\\\"richTextElement\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"span[style=\\\"color:#A0A09F;\\\"]\"}]]}"],["{\"selector\":\".textwidget > div\",\"tasks\":[[\"has\",{\"selector\":\"script\"}]]}","{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\"script\"}],[\"spath\",\":first-of-type\"]]}"],["{\"selector\":\".gridster_grid\",\"tasks\":[[\"has\",{\"selector\":\".adblock[style^=\\\"background:#32\\\"]\"}]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"a[id=\\\"Annoncer\\\"]\"}]]}"],["{\"selector\":\".row > div[class^=\\\"row-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a[href=\\\"#\\\"] > .panel-ad\"}]]}","{\"selector\":\"div > .section\",\"tasks\":[[\"has\",{\"selector\":\"> div[class*=\\\"-label\\\"]\",\"tasks\":[[\"has-text\",\"Sponsored\"]]}]]}"],["{\"selector\":\".o-deck\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"ad ad-wide\\\"]\"}]]}"],["{\"selector\":\".justify-center.flex\",\"tasks\":[[\"has\",{\"selector\":\"div[data-type]\"}]]}","{\"selector\":\"section[class^=\\\"bg-brown-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".text-center\"}]]}"],["{\"selector\":\".sidebar-widget-container\",\"tasks\":[[\"has\",{\"selector\":\"center > a\"}]]}","{\"selector\":\"div.sidebar-widget-container.widget_text\",\"tasks\":[[\"has\",{\"selector\":\":is(center > a, ins, div[class*=\\\"affiliate\\\"])\"}]]}","{\"selector\":\"div[class^=\\\"container-\\\"] > section\",\"tasks\":[[\"has\",{\"selector\":\":is(center, ins)\"}]]}","{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\":is(center > a, .strossle-widget)\"}]]}"],["{\"selector\":\".region-right > .block\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"clinicadentalescandinava\\\"]\"}]]}"],["{\"selector\":\"div[class*=\\\"advertisement-spot\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".ad-banner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".tdc-row\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}","{\"selector\":\"aside.WP_Editor_Widget\",\"tasks\":[[\"has\",{\"selector\":\"script\"}]]}"],["{\"selector\":\".boxlist\",\"tasks\":[[\"has\",{\"selector\":\".adspot-article-wrapper\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has\",{\"selector\":\".ads\"}]]}"],["{\"selector\":\".col-sm-6.col-12\",\"tasks\":[[\"has\",{\"selector\":\".augl\"}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\".fluid\"}]]}]]}"],["{\"selector\":\".vc_column\",\"tasks\":[[\"has\",{\"selector\":\".mobile-ad\"}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}","{\"selector\":\".vc_column-inner\",\"tasks\":[[\"has\",{\"selector\":\".mobile-ad\"}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}"],["{\"selector\":\".tdc-row\",\"tasks\":[[\"has\",{\"selector\":\".td_block_text_with_title\"}]]}","{\"selector\":\".tdc-row\",\"tasks\":[[\"has\",{\"selector\":\".vc_column:only-of-type .augl-container:only-of-type\"}]]}"],["{\"selector\":\".box\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"auglysing-\\\"]\"}]]}","{\"selector\":\".row div[class^=\\\"auglysing-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".mvp-flex-ad\",\"tasks\":[[\"has\",{\"selector\":\"img[width=\\\"300\\\"]\"}]]}","{\"selector\":\".mvp-widget-home\",\"tasks\":[[\"has-text\",\"/^Velun{2}arar/\"]]}"],["{\"selector\":\".platform-content\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"/pagead\\\"]\"}]]}","{\"selector\":\".platform-content\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"averoybrannvern.no\\\"]\"}]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"optimus-element\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\".pxf.io/\\\"]\"}]]}","{\"selector\":\"optimus-element\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"/sportspill/\\\"][href*=\\\"/x/\\\"]\"}]]}","{\"selector\":\"optimus-element\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"/sportspill/\\\"][href*=\\\"million\\\"]\"}]]}","{\"selector\":\"optimus-element\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"/sportspill/\\\"][href*=\\\"pott\\\"]\"}]]}"],["{\"selector\":\".g-10\",\"tasks\":[[\"has-text\",\"Artikkelen fortsetter \"]]}","{\"selector\":\".gofollow\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".sidebar__section\",\"tasks\":[[\"has\",{\"selector\":\"[class^=\\\"ad-unit\\\"]\"}]]}"],["{\"selector\":\".js-strossle-widget .o-grid__col\",\"tasks\":[[\"has\",{\"selector\":\"> article[id^=\\\"ad_native\\\"]\"}]]}","{\"selector\":\".o-grid__col\",\"tasks\":[[\"has\",{\"selector\":\".c-ad\"}]]}","{\"selector\":\".o-grid__col\",\"tasks\":[[\"has\",{\"selector\":\"> [id^=\\\"ad_native\\\"]\"}]]}"],["{\"selector\":\".gridUnit.span6\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"netboard_\\\"]\"}]]}"],["{\"selector\":\"#main > div[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id^=\\\"skyscraper\\\"]\"}]]}","{\"selector\":\"div[class^=\\\"article-wrapper-\\\"] > div[class*=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[data-variants*=\\\"ssa-native-ad\\\"]\"}]]}"],["{\"selector\":\"#main > div\",\"tasks\":[[\"has\",{\"selector\":\"[data-ad-subtype^=\\\"skyscraper\\\"]\"}]]}"],["{\"selector\":\"div[class^=\\\"hyperion-css-\\\"] > div[class^=\\\"hyperion-css-\\\"] > div[class^=\\\"hyperion-css-\\\"] > div[class^=\\\"hyperion-css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"[for=\\\"login label\\\"]\"}]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has-text\",\"/^An{2}onse:/\"]]}","{\"selector\":\"div[style^=\\\"font-size\\\"]\",\"tasks\":[[\"has-text\",\"/^An{2}onse:/\"]]}"],["{\"selector\":\".ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\"> .adsbygoogle\"}]]}"],["{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"Annonse:\"]]}]]}"],["{\"selector\":\"div[id=\\\"336x280-sidebar\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[data-variants*=\\\"article_netboard\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[data-ad-subtype=\\\"in-feed\\\"]\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"p ~ div[class^=\\\"hyperion-css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> div[id*=\\\"-ad-\\\" i]\"}]]}"],["{\"selector\":\".lenkeboks\",\"tasks\":[[\"has-text\",\"/Cas\\\\ino/i\"]]}"],["{\"selector\":\".wsite-multicol-col\",\"tasks\":[[\"has\",{\"selector\":\"> .wsite-spacer\"}]]}"],["{\"selector\":\".home-ads\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[nf-desk-widget=\\\"spot.content\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"div[class^=\\\"css\\\"]\",\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Annonse\\\"$\"}]]}","{\"selector\":\"div[class^=\\\"styles__StudioSpacer-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"AdWrapper__\\\"]\"}]]}"],["{\"selector\":\".adunit\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[data-cy=\\\"video-page-horisontal\\\"] > div\",\"tasks\":[[\"has-text\",\"Annonse\"]]}"],["{\"selector\":\"style + .container > .row\",\"tasks\":[[\"has\",{\"selector\":\"> .col-sm-12 > .dagsavisenDesktopAd\"}]]}"],["{\"selector\":\".container-footer-ad\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".sidebar-ad\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".col-span-12:not([class*=\\\" \\\"])\",\"tasks\":[[\"has\",{\"selector\":\"> :is([class$=\\\" \\\"], [class*=\\\"_class\\\"], :not([class*=\\\" \\\"]))\"}]]}","{\"selector\":\"div[id^=\\\"row-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".preamble-shadow\"}]]}"],["{\"selector\":\".grid > div:not([class*=\\\" \\\"])\",\"tasks\":[[\"has\",{\"selector\":\"> div:not([class*=\\\" \\\"])\"}]]}","{\"selector\":\"div[id^=\\\"row-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".banner\"}]]}"],["{\"selector\":\".grid > div:not([class*=\\\" \\\"])\",\"tasks\":[[\"has\",{\"selector\":\"> div[class$=\\\" \\\"]\"}]]}","{\"selector\":\"article ~ div\",\"tasks\":[[\"has-text\",\"/^A[n|ĳ]n\\\\ons/i\"]]}"],["{\"selector\":\"div[data-placeholder=\\\"lantern_placeholder_ad\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".row-with-bottom-border\",\"tasks\":[[\"has\",{\"selector\":\".ad-wrap\"}]]}"],["{\"selector\":\".carousel-container + div:not(.carousel-container)\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"ad\\\"]\"}]]}","{\"selector\":\".preview\",\"tasks\":[[\"has\",{\"selector\":\".kicker\",\"tasks\":[[\"has-text\",\"/an{2}onse/i\"]]}]]}"],["{\"selector\":\".ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\"[src*=\\\"amazonaws.com\\\"]\"}]]}","{\"selector\":\".ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\"[style*=\\\"width:300px;height:90px\\\"]\"}]]}"],["{\"selector\":\".col-12\",\"tasks\":[[\"has\",{\"selector\":\"> betting-matchup\"}]]}","{\"selector\":\".col-lg-7\",\"tasks\":[[\"has\",{\"selector\":\"+ article\"}]]}","{\"selector\":\".column.one-half\",\"tasks\":[[\"has\",{\"selector\":\".promoted-offer\"}]]}","{\"selector\":\".entrance\",\"tasks\":[[\"has\",{\"selector\":\".entrance__mark__text\",\"tasks\":[[\"has-text\",\"Annonse:\"]]}]]}","{\"selector\":\"[class*=\\\"-artikkelboard\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/apx/\\\"]\"}]]}","{\"selector\":\"div[class]\",\"tasks\":[[\"has\",{\"selector\":\"+ main\"}]]}","{\"selector\":\"div[data-name=\\\"gamer_toppbanner\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"header ~ div\",\"tasks\":[[\"has\",{\"selector\":\"div[data-unit*=\\\"banner\\\"]\"}]]}"],["{\"selector\":\".bottomSmallSpaced.topMediumSpaced\",\"tasks\":[[\"has-text\",\"/^An{2}onse/\"]]}"],["{\"selector\":\".et_pb_text_align_left\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"downloadcentral\\\"]\"}]]}"],["{\"selector\":\".MuiContainer-root .MuiGrid-root + .MuiBox-root\",\"tasks\":[[\"has\",{\"selector\":\"div[id*=\\\"gpt\\\"]\"}]]}","{\"selector\":\".MuiListItem-root\",\"tasks\":[[\"has\",{\"selector\":\"div[id^=\\\"div-gpt-ad-\\\"]\"}]]}"],["{\"selector\":\".nf-o-moduleblock\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}"],["{\"selector\":\".block\",\"tasks\":[[\"has\",{\"selector\":\"> .block-content .sam_ad\"}]]}"],["{\"selector\":\".td-main-page-wrap .td-element-style + .tdc-row\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".comcontent\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".item\",\"tasks\":[[\"has\",{\"selector\":\".meta\",\"tasks\":[[\"has-text\",\"/^An{2}onse$/\"]]}]]}","{\"selector\":\".single-post .code-block\",\"tasks\":[[\"has\",{\"selector\":\"script\"}]]}","{\"selector\":\".spklw-post\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"smartadserver\\\"]\"}]]}","{\"selector\":\".td-c-loop-item\",\"tasks\":[[\"has\",{\"selector\":\".meta-info\",\"tasks\":[[\"has-text\",\"Annonse\"]]}]]}","{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\" – annonse\"]]}]]}","{\"selector\":\"article\",\"tasks\":[[\"has\",{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"/[?:;—]\\\\sannons[eø]r?$/\"]]}]]}","{\"selector\":\"article.clearfix\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"/go/\\\"]\"}]]}"],["{\"selector\":\".ipsWidget\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"=advertisement\\\"]\"}]]}"],["{\"selector\":\"#g-aside .size-100\",\"tasks\":[[\"has\",{\"selector\":\".bannergroup\"}]]}","{\"selector\":\"#g-aside .size-100\",\"tasks\":[[\"has\",{\"selector\":\".sprocket-strips-s\"}]]}"],["{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"> script[src*=\\\"/www/delivery/\\\"]\"}]]}"],["{\"selector\":\".latestnews-box\",\"tasks\":[[\"has-text\",\"/cas\\\\ino/i\"]]}"],["{\"selector\":\".td-pb-span8\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".overskrift_naeringsinnhold\",\"tasks\":[[\"has\",{\"selector\":\"> h3\"}]]}","{\"selector\":\".text-center\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"img\"}]]}]]}"],["{\"selector\":\".row\",\"tasks\":[[\"has\",{\"selector\":\"> .adnuntius-ad\"}]]}"],["{\"selector\":\"div[id^=\\\"advert-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".front optimus-element\",\"tasks\":[[\"has-text\",\"Eurojackpot\"]]}","{\"selector\":\".optimus-complex-front\",\"tasks\":[[\"has\",{\"selector\":\"amedia-include[manifest*=\\\".norkon.\\\"]\"}]]}","{\"selector\":\"amedia-frontpage > .optimus-complex-front\",\"tasks\":[[\"has\",{\"selector\":\"> header > h2\",\"tasks\":[[\"has-text\",\"/Reklame|REKLAME/\"]]}]]}","{\"selector\":\"amedia-include[param-editionid=\\\"reklame\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"article[data-lp-section=\\\"sportspill\\\"]\",\"tasks\":[[\"has\",{\"selector\":\".slotHeader\"}],[\"has-text\",\"/lot{2}o/i\"]]}","{\"selector\":\"optimus-element\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"://norsk-tipping.\\\"], a[href^=\\\"/shoppingtips/\\\"]\"}]]}"],["{\"selector\":\"div.MuiContainer-root div[class^=\\\"mui-style-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-ad-unit-id]\"}]]}"],["{\"selector\":\"ul\",\"tasks\":[[\"has\",{\"selector\":\".columnLogo\"}]]}"],["{\"selector\":\"table[width^=\\\"7\\\"]:first-of-type\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"tradedoubler\\\"]\"}]]}","{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"a[href=\\\"./index.html\\\"]\"}],[\"spath\",\" + tr + tr\"]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"ins[data-revive-zoneid]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".entry-content > h4\",\"tasks\":[[\"has\",{\"selector\":\"script[src$=\\\"/adsbygoogle.js\\\"]\"}]]}","{\"selector\":\".entry-content > h6\",\"tasks\":[[\"has\",{\"selector\":\"script[src$=\\\"/adsbygoogle.js\\\"]\"}]]}","{\"selector\":\".so-widget-sow-editor\",\"tasks\":[[\"has\",{\"selector\":\"a[href^=\\\"https://online.adservicemedia.dk/\\\"]\"}]]}","{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Annonse\"]]}","{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Annonser\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Annonse\"]]}"],["{\"selector\":\".float-left\",\"tasks\":[[\"has\",{\"selector\":\"span[id^=\\\"ezoic-pub-ad-placeholder-\\\"]\"}]]}"],["{\"selector\":\".widget-goodpress-home-block-one\",\"tasks\":[[\"has-text\",\"Annonsørinnhold\"]]}"],["{\"selector\":\".has-text-align-center\",\"tasks\":[[\"has\",{\"selector\":\"> a[href*=\\\".adservice\\\"]\"}]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Play-Asia\"]]}","{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Reklame\"]]}"],["{\"selector\":\"iframe[src*=\\\"://ads.\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".xrow\",\"tasks\":[[\"has\",{\"selector\":\"> div[class*=\\\" \\\"] > span[class]\"}]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Annonse\"]]}]]}"],["{\"selector\":\".small-6[class*=\\\"articleContainer_\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"tradedoubler.com\\\"]\"}]]}","{\"selector\":\"div[data-ga-action$=\\\"_ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".widget_text\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}","{\"selector\":\"section\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}"],["{\"selector\":\"#topboard\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"article > div\",\"tasks\":[[\"has-text\",\"/^an{2}onse$/\"]]}","{\"selector\":\"div\",\"tasks\":[[\"matches-css\",{\"name\":\"min-height\",\"value\":\"^165px$\"}]]}","{\"selector\":\"div.clearfix.col-full-width\",\"tasks\":[[\"has-text\",\"kommersielle partner\"]]}","{\"selector\":\"main > div > div\",\"tasks\":[[\"has-text\",\"kommersielle partner\"]]}","{\"selector\":\"main > section > section\",\"tasks\":[[\"has-text\",\"/^an{2}onse$/\"]]}","{\"selector\":\"section + div\",\"tasks\":[[\"has\",{\"selector\":\"span\"}]]}","{\"selector\":\"section > section\",\"tasks\":[[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"a\"}]]}]]}","{\"selector\":\"section > section:first-of-type + section:last-of-type\",\"action\":[\"style\",\"width: 100% !important; max-width: 675px !important\"],\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"  \\\"]\"}]]}","{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\"> div > div\",\"tasks\":[[\"has-text\",\"/^an{2}onse$/\"]]}]]}"],["{\"selector\":\".one-half\",\"tasks\":[[\"has-text\",\"/[kc]as\\\\ino/i\"]]}","{\"selector\":\".widget_text\",\"tasks\":[[\"has\",{\"selector\":\".adsbygoogle\"}]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",5]]}"],["{\"selector\":\"div[class*=\\\"View_has-space__\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> .text-center\"}]]}"],["{\"selector\":\".pages-container__element\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"banner\\\"]\"}]]}","{\"selector\":\".pages-container__element\",\"tasks\":[[\"has\",{\"selector\":\"[class*=\\\"gpt\\\"]\"}]]}"],["{\"selector\":\"div.large-12.row\",\"tasks\":[[\"has-text\",\"MASCUS\"]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has-text\",\"/^ANNONSE/\"]]}"],["{\"selector\":\"div[id^=\\\"module-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-adslot^=\\\"fullscreen-\\\"]\"}]]}"],["{\"selector\":\".fl-visible-desktop-medium\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"ann-forside\\\"]\",\"tasks\":[[\"has-text\",\"/An{2}onse:/\"]]}]]}"],["{\"selector\":\".td-pb-span4\",\"tasks\":[[\"has-text\",\"ANNONSØRINNHOLD\"]]}"],["{\"selector\":\".bundle li[class^=\\\"css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"div[data-ad-subtype]\"}]]}","{\"selector\":\"aside[data-test-tag=\\\"factbox\\\" i] + div:not([class], [id])\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"adtraction\\\"]\"}]]}","{\"selector\":\"div[class^=\\\" hyperion-css-\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> [data-ad-subtype]\"}]]}"],["{\"selector\":\"div[id*=\\\"-feedAdvert\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"automat\\\"]\"}]]}","{\"selector\":\".td_module_wrap\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"casino\\\"]\"}]]}"],["{\"selector\":\"#dtnContainer\",\"tasks\":[[\"has\",{\"selector\":\".dtnad\"}]]}"],["{\"selector\":\"tr > td > div\",\"tasks\":[[\"has\",{\"selector\":\"a[href*=\\\"clk.tradedoubler.\\\"]\"}]]}"],["{\"selector\":\".forside_adholder\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"> noscript\"}]]}","{\"selector\":\"td\",\"tasks\":[[\"has\",{\"selector\":\"img[src=\\\"gifs/1pix.gif\\\"]\"}]]}","{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"img\"}]]}]]}","{\"selector\":\"tr\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has\",{\"selector\":\"img\"}]]}]]}"],["{\"selector\":\"div.container\",\"tasks\":[[\"has\",{\"selector\":\"#left_sticky\"}]]}"],["{\"selector\":\".col-md-3 .block\",\"tasks\":[[\"has-text\",\"ponsor\"]]}"]];

const hostnamesMap = new Map([["goal.com",3],["gunnarandreassen.com",4],["icelandreview.com",5],["knr.gl",5],["nutiminn.is",[5,57]],["bir.no",5],["medier24.no",5],["tvkampen.com",6],["tvsporten.dk",6],["altomdata.dk",7],["anettelyskjaer.dk",[8,9]],["cuben-linedance.dk",8],["dreampapers.dk",[8,9]],["iphoneluppen.dk",[8,9]],["padleguide.dk",[8,39]],["polarmedia.dk",[8,40]],["nemsvar.nu",[8,9]],["bilgalleri.dk",10],["bilmagasinet.dk",11],["borsen.dk",12],["check-in.dk",13],["dagens.dk",14],["dba.dk",15],["dmi.dk",16],["dr.dk",17],["edbpriser.dk",18],["ekstrabladet.dk",19],["fcbarcelona.dk",20],["feltet.dk",21],["fodbold-transfers.dk",22],["fodboldspilleren.dk",23],["folketidende.dk",24],["gaming.dk",25],["holdsport.dk",26],["juicynet.dk",27],["jumpb.dk",28],["kanalfrederikshavn.dk",29],["kendte.dk",30],["kulturnet.dk",31],["lokalavisen.dk",32],["lydogbillede.dk",33],["lydogbilde.no",33],["lystfiskerguiden.dk",34],["madridista.dk",35],["margit-henriksen.dk",36],["thura.dk",36],["meremobil.dk",37],["ni.dk",38],["presse-fotos.dk",41],["recordere.dk",42],["skagensavis.dk",43],["startsiden.dk",44],["thelocal.dk",45],["thelocal.no",45],["tv2.dk",46],["udeoghjemme.dk",47],["vilgerneleve.dk",48],["spanienidag.es",49],["bilasolur.is",50],["eidfaxi.is",51],["hjartalif.is",52],["kjarninn.is",53],["lifdununa.is",54],["mbl.is",55],["menn.is",56],["sporttv.is",58],["veitingageirinn.is",59],["brunsvika.net",60],["sveip.net",61],["no",62],["730.no",[63,64]],["melkoghonning.no",64],["abcnyheter.no",65],["adressa.no",66],["aftenposten.no",[67,68]],["vg.no",[68,133]],["www.aftenposten.no",69],["arendalstidende.no",70],["baatplassen.no",71],["bilnorge.no",72],["bimmers.no",73],["bt.no",74],["butikkoversikten.no",75],["bvbnorge.no",76],["byggenytt.no",77],["cw.no",78],["dagbladet.no",[79,80,81]],["sol.no",[80,81,119]],["elbil24.no",[81,89]],["kk.no",81],["seher.no",81],["vi.no",81],["dagsavisen.no",82],["dfly.no",83],["digi.no",[84,85,86]],["tu.no",[85,86]],["dn.no",87],["e24.no",88],["fjellforum.no",90],["gamer.no",91],["glr.no",92],["godtnoe.no",93],["gulesider.no",94],["idag.no",95],["iform.no",96],["inyheter.no",97],["itavisen.no",98],["kammeret.no",99],["ksu.no",100],["kureren.no",101],["leinstrand-il.no",102],["malviknytt.no",103],["matoppskrift.no",104],["minervanett.no",105],["minmote.no",106],["nettavisen.no",107],["nhi.no",108],["nord-salten.no",109],["onlineaviser.no",110],["parcferme.no",111],["pengenytt.no",112],["politainment.no",113],["smis.no",113],["purehelp.no",114],["ranaposten.no",115],["xn--bodposten-n8a.no",115],["reiseliv.no",116],["retrospilling.no",117],["skolediskusjon.no",118],["sorlandsavisen.no",120],["startsiden.no",121],["sva.no",122],["tek.no",123],["teknologia.no",124],["thaiguiden.no",125],["tidensand.no",126],["travelmarket.no",127],["tungt.no",128],["tunnelsyn.no",129],["tv2.no",130],["united.no",131],["utrop.no",132],["direkte.vg.no",134],["viralefilmer.no",135],["visitnorway.no",136],["win-xp.no",137],["yrkesbil.no",138],["bornholm.nu",139],["ipmsnorge.org",140]]);

const entitiesMap = new Map([["costume",0],["ehandel",1],["gamereactor",2]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
