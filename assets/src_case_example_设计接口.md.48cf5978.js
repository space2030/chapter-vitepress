import{_ as e,o as a,c as i,a as l}from"./app.7ee93d22.js";const x=JSON.parse('{"title":"\u8BBE\u8BA1\u63A5\u53E3","description":"","frontmatter":{},"headers":[{"level":2,"title":"01 \u5B89\u5168\u6027","slug":"_01-\u5B89\u5168\u6027"},{"level":3,"title":"1.1 \u8C03\u7528\u63A5\u53E3\u7684\u5148\u51B3\u6761\u4EF6-token","slug":"_1-1-\u8C03\u7528\u63A5\u53E3\u7684\u5148\u51B3\u6761\u4EF6-token"},{"level":3,"title":"1.2 \u4F7F\u7528POST\u4F5C\u4E3A\u63A5\u53E3\u7684\u8BF7\u6C42\u65B9\u5F0F","slug":"_1-2-\u4F7F\u7528post\u4F5C\u4E3A\u63A5\u53E3\u7684\u8BF7\u6C42\u65B9\u5F0F"},{"level":3,"title":"1.3 \u5BA2\u6237\u7AEFIP\u767D\u540D\u5355","slug":"_1-3-\u5BA2\u6237\u7AEFip\u767D\u540D\u5355"},{"level":3,"title":"1.4 \u5355\u4E2A\u63A5\u53E3\u9488\u5BF9ip\u9650\u6D41","slug":"_1-4-\u5355\u4E2A\u63A5\u53E3\u9488\u5BF9ip\u9650\u6D41"},{"level":3,"title":"1.5 \u8BB0\u5F55\u63A5\u53E3\u8BF7\u6C42\u65E5\u5FD7","slug":"_1-5-\u8BB0\u5F55\u63A5\u53E3\u8BF7\u6C42\u65E5\u5FD7"},{"level":3,"title":"1.6 \u654F\u611F\u6570\u636E\u8131\u654F","slug":"_1-6-\u654F\u611F\u6570\u636E\u8131\u654F"},{"level":2,"title":"02 \u5E42\u7B49\u6027","slug":"_02-\u5E42\u7B49\u6027"},{"level":2,"title":"03 \u6570\u636E\u89C4\u8303","slug":"_03-\u6570\u636E\u89C4\u8303"},{"level":3,"title":"3.1 \u7248\u672C\u63A7\u5236","slug":"_3-1-\u7248\u672C\u63A7\u5236"},{"level":3,"title":"3.2 \u54CD\u5E94\u72B6\u6001\u7801\u89C4\u8303","slug":"_3-2-\u54CD\u5E94\u72B6\u6001\u7801\u89C4\u8303"},{"level":3,"title":"3.3 \u7EDF\u4E00\u54CD\u5E94\u6570\u636E\u683C\u5F0F","slug":"_3-3-\u7EDF\u4E00\u54CD\u5E94\u6570\u636E\u683C\u5F0F"}],"relativePath":"src/case/example/\u8BBE\u8BA1\u63A5\u53E3.md","lastUpdated":1697525311000}'),t={name:"src/case/example/\u8BBE\u8BA1\u63A5\u53E3.md"},r=l('<h1 id="\u8BBE\u8BA1\u63A5\u53E3" tabindex="-1">\u8BBE\u8BA1\u63A5\u53E3 <a class="header-anchor" href="#\u8BBE\u8BA1\u63A5\u53E3" aria-hidden="true">#</a></h1><h2 id="_01-\u5B89\u5168\u6027" tabindex="-1">01 \u5B89\u5168\u6027 <a class="header-anchor" href="#_01-\u5B89\u5168\u6027" aria-hidden="true">#</a></h2><p>\u4E00\u4E2A\u5E73\u53F0\u7684\u524D\u540E\u7AEF\u6570\u636E\u4F20\u8F93\u63A5\u53E3\u4E00\u822C\u90FD\u4F1A\u5728\u5185\u7F51\u73AF\u5883\u4E0B\u901A\u4FE1\uFF0C\u800C\u4E14\u4F1A\u4F7F\u7528\u5B89\u5168\u6846\u67B6</p><h3 id="_1-1-\u8C03\u7528\u63A5\u53E3\u7684\u5148\u51B3\u6761\u4EF6-token" tabindex="-1">1.1 \u8C03\u7528\u63A5\u53E3\u7684\u5148\u51B3\u6761\u4EF6-token <a class="header-anchor" href="#_1-1-\u8C03\u7528\u63A5\u53E3\u7684\u5148\u51B3\u6761\u4EF6-token" aria-hidden="true">#</a></h3><p>\u83B7\u53D6token\u4E00\u822C\u4F1A\u6D89\u53CA\u5230\u51E0\u4E2A\u53C2\u6570appid\u3001appkey\u3001timestamp\u3001nonce\u3001sign\u3002\u6211\u4EEC\u901A\u8FC7\u4EE5\u4E0A\u51E0\u4E2A\u53C2\u6570\u83B7\u53D6\u8C03\u7528\u7CFB\u7EDF\u7684\u51ED\u8BC1\u3002</p><ul><li><p>appid\u548Cappkey\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u5E73\u53F0\u7EBF\u4E0A\u7533\u8BF7\uFF0C\u4E5F\u53EF\u4EE5\u7EBF\u4E0B\u76F4\u63A5\u9881\u53D1\u3002appid\u662F\u5168\u5C40\u552F\u4E00\u7684\uFF0C\u6BCF\u4E2Aappid\u5C06\u5BF9\u5E94\u4E00\u4E2A\u5BA2\u6237\uFF0Cappkey\u9700\u8981\u9AD8\u5EA6\u4FDD\u5BC6</p></li><li><p>timestamp\u662F\u65F6\u95F4\u6233\uFF0C\u4F7F\u7528\u7CFB\u7EDF\u5F53\u524D\u7684unix\u65F6\u95F4\u6233\u3002\u65F6\u95F4\u6233\u7684\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u51CF\u8F7BDOS\u653B\u51FB\u3002\u9632\u6B62\u8BF7\u6C42\u88AB\u62E6\u622A\u540E\u4E00\u76F4\u5C1D\u8BD5\u8BF7\u6C42\u63A5\u53E3\u3002\u670D\u52A1\u5668\u7AEF\u8BBE\u7F6E\u65F6\u95F4\u6233\u9608\u503C\uFF0C\u5982\u679C\u8BF7\u6C42\u65F6\u95F4\u6233\u548C\u670D\u52A1\u5668\u65F6\u95F4\u8D85\u8FC7\u9608\u503C\uFF0C\u5219\u54CD\u5E94\u5931\u8D25\u3002</p></li><li><p>nonce\u662F\u968F\u673A\u503C\u3002\u968F\u673A\u503C\u4E3B\u8981\u662F\u4E3A\u4E86\u589E\u52A0sign\u7684\u591A\u53D8\u6027\uFF0C\u4E5F\u53EF\u4EE5\u4FDD\u62A4\u63A5\u53E3\u7684\u5E42\u7B49\u6027\uFF0C\u76F8\u90BB\u7684\u4E24\u6B21\u8BF7\u6C42nonce\u4E0D\u5141\u8BB8\u91CD\u590D\u3002\u5982\u679C\u91CD\u590D\u5219\u8BA4\u4E3A\u662F\u91CD\u590D\u63D0\u4EA4\uFF0C\u54CD\u5E94\u5931\u8D25\u3002</p></li><li><p>sign\u662F\u53C2\u6570\u7B7E\u540D\u3002\u5C06appkey\u3001timestamp\u3001nonce\u62FC\u63A5\u8D77\u6765\u8FDB\u884CMD5\u52A0\u5BC6\uFF08\u5176\u5B83\u52A0\u5BC6\u65B9\u5F0F\uFF09</p></li><li><p>token\u3002\u4F7F\u7528\u53C2\u6570appid\u3001timestamp\u3001nonce\u3001sign\u6765\u83B7\u53D6token\uFF0C\u4F5C\u4E3A\u7CFB\u7EDF\u8C03\u7528\u7684\u552F\u4E00\u51ED\u8BC1\u3002token\u53EF\u4EE5\u8BBE\u7F6E\u4E00\u6B21\u6709\u6548\uFF08\u5B89\u5168\u6027\u66F4\u9AD8\uFF09\uFF08\u4E0D\u63A8\u8350\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u65F6\u6548\u6027\uFF08\u63A8\u8350\uFF09\u3002 \u5982\u679C\u4E00\u6B21\u6709\u6548\u7684\u8BDD\uFF0C\u8FD9\u4E2A\u63A5\u53E3\u7684\u8BF7\u6C42\u9891\u7387\u53EF\u80FD\u4F1A\u5F88\u9AD8\u3002 token\u63A8\u8350\u52A0\u5230\u8BF7\u6C42\u5934\u4E0A\uFF0C\u8FD9\u6837\u53EF\u4EE5\u8DDF\u4E1A\u52A1\u53C2\u6570\u5B8C\u5168\u533A\u5206\u5F00\u6765\u3002</p></li></ul><h3 id="_1-2-\u4F7F\u7528post\u4F5C\u4E3A\u63A5\u53E3\u7684\u8BF7\u6C42\u65B9\u5F0F" tabindex="-1">1.2 \u4F7F\u7528POST\u4F5C\u4E3A\u63A5\u53E3\u7684\u8BF7\u6C42\u65B9\u5F0F <a class="header-anchor" href="#_1-2-\u4F7F\u7528post\u4F5C\u4E3A\u63A5\u53E3\u7684\u8BF7\u6C42\u65B9\u5F0F" aria-hidden="true">#</a></h3><p>\u4E00\u822C\u8C03\u7528\u63A5\u53E3\u6700\u5E38\u7528\u7684\u4E24\u79CD\u65B9\u5F0F\u5C31\u662FGET\u548CPOST\u3002\u4E24\u8005\u7684\u533A\u522B\u4E5F\u5F88\u660E\u663E\uFF0CGET\u8BF7\u6C42\u4F1A\u5C06\u53C2\u6570\u66B4\u9732\u5728\u6D4F\u89C8\u5668URL\u4E2D\uFF0C\u800C\u4E14\u5BF9\u957F\u5EA6\u4E5F\u6709\u9650\u5236\uFF0C\u4E3A\u4E86\u66F4\u9AD8\u7684\u5B89\u5168\u6027\uFF0C\u6240\u6709\u63A5\u53E3\u90FD\u91C7\u7528POST\u65B9\u5F0F\u8BF7\u6C42\u3002</p><h3 id="_1-3-\u5BA2\u6237\u7AEFip\u767D\u540D\u5355" tabindex="-1">1.3 \u5BA2\u6237\u7AEFIP\u767D\u540D\u5355 <a class="header-anchor" href="#_1-3-\u5BA2\u6237\u7AEFip\u767D\u540D\u5355" aria-hidden="true">#</a></h3><ul><li>ip\u767D\u540D\u5355\u662F\u6307\u5C06\u63A5\u53E3\u7684\u8BBF\u95EE\u6743\u9650\u5BF9\u90E8\u5206ip\u8FDB\u884C\u5F00\u653E\uFF0C\u8FD9\u6837\u5C31\u907F\u514D\u5176\u5B83ip\u8FDB\u884C\u8BBF\u95EE\u653B\u51FB\uFF0C\u8BBE\u7F6Eip\u767D\u540D\u5355\u6BD4\u8F83\u9EBB\u70E6\u4E00\u70B9\u5C31\u662F\u5F53\u4F60\u7684\u5BA2\u6237\u7AEF\u8FDB\u884C\u8FC1\u79FB\u540E\uFF0C\u5C31\u9700\u8981\u91CD\u65B0\u8054\u7CFB\u670D\u52A1\u63D0\u4F9B\u8005\u6DFB\u52A0\u65B0\u7684ip\u767D\u540D\u5355\u3002</li><li>\u8BBE\u7F6E\u767D\u540D\u5355\u7684\u65B9\u5F0F\u6709\u5F88\u591A\uFF0C\u9664\u4E86\u4F20\u7EDF\u7684\u9632\u706B\u5899\u4E4B\u5916\uFF0Cspring cloud alibaba\u63D0\u4F9B\u7684\u7EC4\u4EF6sentinel\u4E5F\u652F\u6301\u767D\u540D\u5355\u8BBE\u7F6E\u3002</li><li>\u4E3A\u4E86\u964D\u4F4Eapi\u7684\u590D\u6742\u5EA6\uFF0C\u63A8\u8350\u4F7F\u7528\u9632\u706B\u5899\u89C4\u5219\u8FDB\u884C\u767D\u540D\u5355\u8BBE\u7F6E\u3002</li></ul><h3 id="_1-4-\u5355\u4E2A\u63A5\u53E3\u9488\u5BF9ip\u9650\u6D41" tabindex="-1">1.4 \u5355\u4E2A\u63A5\u53E3\u9488\u5BF9ip\u9650\u6D41 <a class="header-anchor" href="#_1-4-\u5355\u4E2A\u63A5\u53E3\u9488\u5BF9ip\u9650\u6D41" aria-hidden="true">#</a></h3><p>\u9650\u6D41\u662F\u4E3A\u4E86\u66F4\u597D\u7684\u7EF4\u62A4\u7CFB\u7EDF\u7684\u7A33\u5B9A\u6027\uFF0C\u4F7F\u7528redis\u8FDB\u884C\u63A5\u53E3\u8C03\u7528\u6B21\u6570\u7EDF\u8BA1\uFF0Cip + \u63A5\u53E3\u5730\u5740\u4F5C\u4E3Akey\uFF0C\u8BBF\u95EE\u6B21\u6570\u4F5C\u4E3Avalue\uFF0C\u6BCF\u6B21\u8BF7\u6C42value + 1\uFF0C\u8BBE\u7F6E\u8FC7\u671F\u65F6\u957F\u6765\u9650\u5236\u63A5\u53E3\u7684\u8C03\u7528\u9891\u7387\u3002</p><h3 id="_1-5-\u8BB0\u5F55\u63A5\u53E3\u8BF7\u6C42\u65E5\u5FD7" tabindex="-1">1.5 \u8BB0\u5F55\u63A5\u53E3\u8BF7\u6C42\u65E5\u5FD7 <a class="header-anchor" href="#_1-5-\u8BB0\u5F55\u63A5\u53E3\u8BF7\u6C42\u65E5\u5FD7" aria-hidden="true">#</a></h3><p>\u4F7F\u7528aop\u5168\u5C40\u8BB0\u5F55\u8BF7\u6C42\u65E5\u5FD7\uFF0C\u5FEB\u901F\u5B9A\u4F4D\u5F02\u5E38\u8BF7\u6C42\u4F4D\u7F6E\uFF0C\u6392\u67E5\u95EE\u9898\u539F\u56E0\u3002</p><h3 id="_1-6-\u654F\u611F\u6570\u636E\u8131\u654F" tabindex="-1">1.6 \u654F\u611F\u6570\u636E\u8131\u654F <a class="header-anchor" href="#_1-6-\u654F\u611F\u6570\u636E\u8131\u654F" aria-hidden="true">#</a></h3><ul><li>\u5728\u63A5\u53E3\u8C03\u7528\u8FC7\u7A0B\u4E2D\uFF0C\u53EF\u80FD\u4F1A\u6D89\u53CA\u5230\u8BA2\u5355\u53F7\u7B49\u654F\u611F\u6570\u636E\uFF0C\u8FD9\u7C7B\u6570\u636E\u901A\u5E38\u9700\u8981\u8131\u654F\u5904\u7406\uFF0C\u6700\u5E38\u7528\u7684\u65B9\u5F0F\u5C31\u662F\u52A0\u5BC6\u3002</li><li>\u52A0\u5BC6\u65B9\u5F0F\u4F7F\u7528\u5B89\u5168\u6027\u6BD4\u8F83\u9AD8\u7684RSA\u975E\u5BF9\u79F0\u52A0\u5BC6\u3002\u975E\u5BF9\u79F0\u52A0\u5BC6\u6709\u4E24\u4E2A\u5BC6\u94A5\uFF0C\u8FD9\u4E24\u4E2A\u5BC6\u94A5\u5B8C\u5168\u4E0D\u540C\u4F46\u53C8\u5B8C\u5168\u5339\u914D\uFF0C\u53EA\u6709\u4F7F\u7528\u5339\u914D\u7684\u4E00\u5BF9\u516C\u94A5\u548C\u79C1\u94A5\uFF0C\u624D\u80FD\u5B8C\u6210\u5BF9\u660E\u6587\u7684\u52A0\u5BC6\u548C\u89E3\u5BC6\u8FC7\u7A0B\u3002</li></ul><h2 id="_02-\u5E42\u7B49\u6027" tabindex="-1">02 \u5E42\u7B49\u6027 <a class="header-anchor" href="#_02-\u5E42\u7B49\u6027" aria-hidden="true">#</a></h2><p>\u5E42\u7B49\u6027\u662F\u6307\u4EFB\u610F\u591A\u6B21\u8BF7\u6C42\u7684\u6267\u884C\u7ED3\u679C\u548C\u4E00\u6B21\u8BF7\u6C42\u7684\u6267\u884C\u7ED3\u679C\u6240\u4EA7\u751F\u7684\u5F71\u54CD\u76F8\u540C\u3002\u8C03\u7528\u63A5\u53E3\u7684\u65F6\u5019\u5E26\u5165\u968F\u673A\u6570\uFF0C\u7B2C\u4E00\u6B21\u8C03\u7528\uFF0C\u4E1A\u52A1\u5904\u7406\u6210\u529F\u540E\uFF0C\u5C06\u968F\u673A\u6570\u4F5C\u4E3Akey\uFF0C\u64CD\u4F5C\u7ED3\u679C\u4F5C\u4E3Avalue\uFF0C\u5B58\u5728redis\uFF0C\u540C\u65F6\u8BBE\u7F6E\u8FC7\u671F\u65F6\u957F\u3002\u7B2C\u4E8C\u6B21\u8C03\u7528\uFF0C\u67E5\u8BE2redis\uFF0C\u5982\u679Ckey\u5B58\u5728\uFF0C\u5219\u8BC1\u660E\u662F\u91CD\u590D\u63D0\u4EA4\uFF0C\u76F4\u63A5\u8FD4\u56DE\u9519\u8BEF\u3002</p><h2 id="_03-\u6570\u636E\u89C4\u8303" tabindex="-1">03 \u6570\u636E\u89C4\u8303 <a class="header-anchor" href="#_03-\u6570\u636E\u89C4\u8303" aria-hidden="true">#</a></h2><h3 id="_3-1-\u7248\u672C\u63A7\u5236" tabindex="-1">3.1 \u7248\u672C\u63A7\u5236 <a class="header-anchor" href="#_3-1-\u7248\u672C\u63A7\u5236" aria-hidden="true">#</a></h3><p>\u4E00\u5957\u6210\u719F\u7684API\u6587\u6863\uFF0C\u4E00\u65E6\u53D1\u5E03\u662F\u4E0D\u5141\u8BB8\u968F\u610F\u4FEE\u6539\u63A5\u53E3\u7684\u3002\u8FD9\u65F6\u5019\u5982\u679C\u60F3\u65B0\u589E\u6216\u8005\u4FEE\u6539\u63A5\u53E3\uFF0C\u5C31\u9700\u8981\u52A0\u5165\u7248\u672C\u63A7\u5236\uFF0C\u7248\u672C\u53F7\u53EF\u4EE5\u662F\u6574\u6570\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u662F\u6D6E\u70B9\u6570\u7C7B\u578B\u3002\u4E00\u822C\u63A5\u53E3\u5730\u5740\u90FD\u4F1A\u5E26\u4E0A\u7248\u672C\u53F7\u3002</p><h3 id="_3-2-\u54CD\u5E94\u72B6\u6001\u7801\u89C4\u8303" tabindex="-1">3.2 \u54CD\u5E94\u72B6\u6001\u7801\u89C4\u8303 <a class="header-anchor" href="#_3-2-\u54CD\u5E94\u72B6\u6001\u7801\u89C4\u8303" aria-hidden="true">#</a></h3><p>\u6839\u636E\u72B6\u6001\u7801\u5C31\u53EF\u4EE5\u5927\u6982\u77E5\u9053\u95EE\u9898\u6240\u5728\uFF0C\u6211\u4EEC\u91C7\u7528http\u7684\u72B6\u6001\u7801\u8FDB\u884C\u6570\u636E\u5C01\u88C5\uFF0C\u4F8B\u5982200\u8868\u793A\u8BF7\u6C42\u6210\u529F\uFF0C4xx\u8868\u793A\u5BA2\u6237\u7AEF\u9519\u8BEF\uFF0C5xx\u8868\u793A\u670D\u52A1\u5668\u5185\u90E8\u53D1\u751F\u9519\u8BEF\u3002</p><h3 id="_3-3-\u7EDF\u4E00\u54CD\u5E94\u6570\u636E\u683C\u5F0F" tabindex="-1">3.3 \u7EDF\u4E00\u54CD\u5E94\u6570\u636E\u683C\u5F0F <a class="header-anchor" href="#_3-3-\u7EDF\u4E00\u54CD\u5E94\u6570\u636E\u683C\u5F0F" aria-hidden="true">#</a></h3><ul><li>\u4E3A\u4E86\u65B9\u4FBF\u7ED9\u5BA2\u6237\u7AEF\u54CD\u5E94\uFF0C\u54CD\u5E94\u6570\u636E\u4F1A\u5305\u542B\u4E09\u4E2A\u5C5E\u6027\u3002\u72B6\u6001\u7801\uFF08code\uFF09\u3001\u4FE1\u606F\u63CF\u8FF0\uFF08message\uFF09\u3001\u54CD\u5E94\u6570\u636E\uFF08data\uFF09\u3002</li><li>\u5BA2\u6237\u7AEF\u6839\u636E\u72B6\u6001\u7801\u53CA\u4FE1\u606F\u63CF\u8FF0\u53EF\u5FEB\u901F\u77E5\u9053\u63A5\u53E3\u3002</li><li>\u5982\u679C\u72B6\u6001\u7801\u8FD4\u56DE\u6210\u529F\uFF0C\u518D\u5F00\u59CB\u5904\u7406\u6570\u636E\u3002</li></ul>',25),d=[r];function h(n,p,s,_,c,o){return a(),i("div",null,d)}var f=e(t,[["render",h]]);export{x as __pageData,f as default};
