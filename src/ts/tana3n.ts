/// <reference path="recotw.d.ts" />
/// <reference path="../../typings/twitter/twitter.d.ts" />

/*!
 * tana3n.black - Copyright 2015, Chitoku
 * http://tana3n.black/
 *
 * tana3n is gay
 * tana3n is gay
 * tana3n is gay
 * tana3n is gay
 * tana3n is gay
 *
 * Licensed under MIT License
 * http://www.opensource.org/licenses/mit-license
 */

module Tana3n {
    var APP_NAME = "tana3n.black";
    var APP_VERSION = "1.00";

    export class App {
        public static load(entries: RecoTwEntry[]): void {
            var mainArea = document.getElementById("main-area");
            var options: TwitterTweetWidgetOptions = { lang: "ja", theme: "dark" };

            entries.sort((x, y) => Math.random() - .5);
            twttr.ready(() => entries.forEach((item, i) => {
                twttr.widgets.createTweet(item.tweet_id, mainArea, options).then(App.onStatusCreated.bind(null, item, i));
            }));
        }

        private static printErrorEntry(element: HTMLElement, entry: RecoTwEntry) {
            var template = `<blockquote>削除済みまたは非公開のツイートです。<a href="https://twitter.com/tana3n/status/${entry.tweet_id}" target="_blank">表示</a><hr><div><img src="http://www.paper-glasses.com/api/twipi/tana3n/"><span><a href="https://twitter.com/${entry.target_sn}" target="_blank">@${entry.target_sn}</a></span><p>${entry.content}</p></div></blockquote>`;
            element.insertAdjacentHTML("afterend", template);
            element.parentNode.removeChild(element);
        }

        private static onStatusCreated(entry: RecoTwEntry, id: number, elm: HTMLIFrameElement) {
            if (elm) {
                var standaloneTweet = <HTMLElement>elm.contentDocument.getElementsByClassName("standalone-tweet")[0];
                var followButton = <HTMLElement>elm.contentDocument.getElementsByClassName("follow-button")[0];
                if (standaloneTweet) {
                    standaloneTweet.style.borderRadius = "0";
                }
                if (followButton) {
                    followButton.style.display = "none";
                }
            } else {
                App.printErrorEntry(document.getElementById("twitter-widget-" + id), entry);
            }
        }
    }
}
