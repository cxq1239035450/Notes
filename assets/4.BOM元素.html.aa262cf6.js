import{_ as n,c as a}from"./app.3f7d7190.js";var s="/notes/image/BOM\u6784\u6210.png",t="/notes/image/\u6267\u884C\u6808\u548C\u4EFB\u52A1\u961F\u5217.png",e="/notes/image/\u6267\u884C\u6808\u548C\u4EFB\u52A1\u961F\u52171.png",p="/notes/image/\u6267\u884C\u6808\u548C\u4EFB\u52A1\u961F\u52172.png";const o={},l=a('<h1 id="bom\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#bom\u5143\u7D20" aria-hidden="true">#</a> BOM\u5143\u7D20</h1><h2 id="\u4E00-bom\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u4E00-bom\u6982\u8FF0" aria-hidden="true">#</a> \u4E00.BOM\u6982\u8FF0</h2><ul><li><p>BOM = Browser Object Model \u{1F449}\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B</p></li><li><p>\u5B83\u63D0\u4F9B\u4E86\u72EC\u7ACB\u4E8E\u5185\u5BB9\u800C\u4E0E\u6D4F\u89C8\u5668\u7A97\u53E3\u8FDB\u884C\u4EA4\u4E92\u7684\u5BF9\u8C61\uFF0C\u5176\u6838\u5FC3\u5BF9\u8C61\u662F window</p></li><li><p>BOM \u7531\u4E00\u7CFB\u5217\u76F8\u5173\u7684\u5BF9\u8C61\u6784\u6210\uFF0C\u5E76\u4E14\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u63D0\u4F9B\u4E86\u5F88\u591A\u65B9\u6CD5\u4E0E\u5C5E\u6027</p></li><li><p>BOM \u7F3A\u4E4F\u6807\u51C6\uFF0CJavaScript \u8BED\u6CD5\u7684\u6807\u51C6\u5316\u7EC4\u7EC7\u662F ECMA, DOM \u7684\u6807\u51C6\u5316\u7EC4\u7EC7\u662F W3C, BOM\u6700\u521D\u662FNetscape \u6D4F\u89C8\u5668\u6807\u51C6\u7684\u4E00\u90E8\u5206</p></li></ul><table><thead><tr><th style="text-align:center;"><strong>DOM</strong></th><th style="text-align:center;"><strong>BOM</strong></th></tr></thead><tbody><tr><td style="text-align:center;">\u6587\u6863\u5BF9\u8C61\u6A21\u578B</td><td style="text-align:center;">\u6D4F\u89C8\u5668\u5BF9\u8C61\u6A21\u578B</td></tr><tr><td style="text-align:center;">DOM \u5C31\u662F\u628A \u6587\u6863 \u5F53\u4F5C\u4E00\u4E2A\u5BF9\u8C61\u6765\u770B\u5F85</td><td style="text-align:center;">\u628A \u6D4F\u89C8\u5668\u5F53\u4F5C\u4E00\u4E2A\u5BF9\u8C61\u6765\u770B\u5F85</td></tr><tr><td style="text-align:center;">DOM \u7684\u9876\u7EA7\u5BF9\u8C61\u662F document</td><td style="text-align:center;">BOM \u7684\u9876\u7EA7\u5BF9\u8C61\u662F window</td></tr><tr><td style="text-align:center;">DOM \u4E3B\u8981\u5B66\u4E60\u7684\u662F\u64CD\u4F5C\u9875\u9762\u5143\u7D20</td><td style="text-align:center;">BOM \u5B66\u4E60\u7684\u662F\u6D4F\u89C8\u5668\u7A97\u53E3\u4EA4\u4E92\u7684\u4E00\u4E9B\u5BF9\u8C61</td></tr><tr><td style="text-align:center;">DOM \u662F W3C \u6807\u51C6\u89C4\u8303</td><td style="text-align:center;">BOM \u662F\u6D4F\u89C8\u5668\u5382\u5546\u5728\u5404\u81EA\u6D4F\u89C8\u5668\u4E0A\u5B9A\u4E49\u7684\uFF0C\u517C\u5BB9\u6027\u8F83\u5DEE</td></tr></tbody></table><h3 id="_1-1bom\u6784\u6210" tabindex="-1"><a class="header-anchor" href="#_1-1bom\u6784\u6210" aria-hidden="true">#</a> 1.1BOM\u6784\u6210</h3><p><img src="'+s+`" alt="BOM\u6784\u6210"></p><ul><li><p>BOM \u6BD4 DOM \u66F4\u5927\u3002\u5B83\u5305\u542B DOM\u3002</p></li><li><p>window \u5BF9\u8C61\u662F\u6D4F\u89C8\u5668\u7684\u9876\u7EA7\u5BF9\u8C61\uFF0C\u5B83\u5177\u6709\u53CC\u91CD\u89D2\u8272</p></li><li><p>\u5B83\u662F JS \u8BBF\u95EE\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u4E00\u4E2A\u63A5\u53E3</p></li><li><p>\u5B83\u662F\u4E00\u4E2A\u5168\u5C40\u5BF9\u8C61\u3002\u5B9A\u4E49\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u3001\u51FD\u6570\u90FD\u4F1A\u53D8\u6210 window \u5BF9\u8C61\u7684\u5C5E\u6027\u548C\u65B9\u6CD5</p></li><li><p>\u5728\u8C03\u7528\u7684\u65F6\u5019\u53EF\u4EE5\u7701\u7565 window\uFF0C\u524D\u9762\u5B66\u4E60\u7684\u5BF9\u8BDD\u6846\u90FD\u5C5E\u4E8E window \u5BF9\u8C61\u65B9\u6CD5\uFF0C\u5982 <code>alert()\u3001prompt()</code>\u7B49\u3002</p></li></ul><p><strong>\u6CE8\u610F</strong>\uFF1Awindow\u4E0B\u7684\u4E00\u4E2A\u7279\u6B8A\u5C5E\u6027 window.name</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u5B9A\u4E49\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u4F1A\u53D8\u6210window\u5BF9\u8C61\u7684\u5C5E\u6027</span>
<span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 10</span>

<span class="token comment">// \u5B9A\u4E49\u5728\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684\u51FD\u6570\u4F1A\u53D8\u6210window\u5BF9\u8C61\u7684\u65B9\u6CD5</span>
<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 11</span>

<span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>  <span class="token comment">//\u4E0D\u8981\u7528\u8FD9\u4E2Aname\u53D8\u91CF,window\u4E0B\u6709\u4E00\u4E2A\u7279\u6B8A\u5C5E\u6027window.name</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h2 id="\u4E8C-window-\u5BF9\u8C61\u7684\u5E38\u89C1\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E8C-window-\u5BF9\u8C61\u7684\u5E38\u89C1\u4E8B\u4EF6" aria-hidden="true">#</a> \u4E8C.window \u5BF9\u8C61\u7684\u5E38\u89C1\u4E8B\u4EF6</h2><h3 id="_2-1-\u7A97\u53E3\u52A0\u8F7D\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-1-\u7A97\u53E3\u52A0\u8F7D\u4E8B\u4EF6" aria-hidden="true">#</a> 2.1 \u7A97\u53E3\u52A0\u8F7D\u4E8B\u4EF6</h3><h4 id="_1-window-onload" tabindex="-1"><a class="header-anchor" href="#_1-window-onload" aria-hidden="true">#</a> (1) window.onload()</h4><p><code>window.onload</code>\u662F\u7A97\u53E3\uFF08\u9875\u9762\uFF09\u52A0\u8F7D\u4E8B\u4EF6\uFF0C\u5F53\u6587\u6863\u5185\u5BB9\u5B8C\u5168\u52A0\u8F7D\u5B8C\u6210\u4F1A\u89E6\u53D1\u8BE5\u4E8B\u4EF6\uFF08\u5305\u62EC\u56FE\u50CF\uFF0C\u811A\u672C\u6587\u4EF6\uFF0CCSS\u6587\u4EF6\u7B49\uFF09\uFF0C\u5C31\u8C03\u7528\u7684\u5904\u7406\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">onload</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;load&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u6CE8\u610F\uFF1A</p><ul><li><p>\u6709\u4E86<code>window.onload</code>\u5C31\u53EF\u4EE5\u628AJS\u4EE3\u7801\u5199\u5230\u9875\u9762\u5143\u7D20\u7684\u4E0A\u65B9</p></li><li><p>\u56E0\u4E3A<code>onload</code>\u662F\u7B49\u9875\u9762\u5185\u5BB9\u5168\u90E8\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u518D\u53BB\u6267\u884C\u5904\u7406\u51FD\u6570</p></li><li><p><code>window.onload</code> \u4F20\u7EDF\u6CE8\u518C\u4E8B\u4EF6\u65B9\u5F0F\uFF0C\u53EA\u80FD\u5199\u4E00\u6B21</p></li><li><p>\u5982\u679C\u6709\u591A\u4E2A\uFF0C\u4F1A\u4EE5\u6700\u540E\u4E00\u4E2A<code>window.onload</code>\u4E3A\u51C6</p></li><li><p><strong>\u5982\u679C\u4F7F\u7528addEventListener \u5219\u6CA1\u6709\u9650\u5236</strong></p></li></ul><h4 id="_2-window-domcontentloaded" tabindex="-1"><a class="header-anchor" href="#_2-window-domcontentloaded" aria-hidden="true">#</a> (2) window.DOMContentLoaded()</h4><ul><li>DOMCountentLoaded\u4E8B\u4EF6\u89E6\u53D1\u65F6\uFF0C\u4EC5\u5F53DOM\u52A0\u8F7D\u5B8C\u6210\uFF0C\u4E0D\u5305\u62EC\u6837\u5F0F\u8868\uFF0C\u56FE\u7247\uFF0Cflash\u7B49\u7B49</li><li>\u5982\u679C\u9875\u9762\u7684\u56FE\u7247\u5F88\u591A\u7684\u8BDD, \u4ECE\u7528\u6237\u8BBF\u95EE\u5230onload\u89E6\u53D1\u53EF\u80FD\u9700\u8981\u8F83\u957F\u7684\u65F6\u95F4</li><li>\u4EA4\u4E92\u6548\u679C\u5C31\u4E0D\u80FD\u5B9E\u73B0\uFF0C\u5FC5\u7136\u5F71\u54CD\u7528\u6237\u7684\u4F53\u9A8C\uFF0C\u6B64\u65F6\u7528 <code>DOMContentLoaded</code>\u4E8B\u4EF6\u6BD4\u8F83\u5408\u9002\u3002</li></ul><h4 id="_3-\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#_3-\u533A\u522B" aria-hidden="true">#</a> (3) \u533A\u522B</h4><ul><li><code>load</code>\u7B49\u9875\u9762\u5185\u5BB9\u5168\u90E8\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u5305\u62EC\u9875\u9762dom\u5143\u7D20\uFF0C\u56FE\u7247\uFF0Cflash\uFF0Ccss\u7B49</li><li><code>DOMContentLoaded</code> \u662FDOM\u52A0\u8F7D\u5B8C\u6BD5\uFF0C\u4E0D\u5305\u542B\u56FE\u7247 flash css \u7B49\u5C31\u53EF\u4EE5\u6267\u884C\uFF0C\u52A0\u8F7D\u901F\u5EA6\u6BD4load\u66F4\u5FEB\u4E00\u4E9B</li></ul><h3 id="_2-2-\u8C03\u6574\u7A97\u53E3\u5927\u5C0F\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-2-\u8C03\u6574\u7A97\u53E3\u5927\u5C0F\u4E8B\u4EF6" aria-hidden="true">#</a> 2.2 \u8C03\u6574\u7A97\u53E3\u5927\u5C0F\u4E8B\u4EF6</h3><p><code>window.onresize</code> \u662F\u8C03\u6574\u7A97\u53E3\u5927\u5C0F\u52A0\u8F7D\u4E8B\u4EF6\uFF0C\u5F53\u89E6\u53D1\u65F6\u5C31\u8C03\u7528\u7684\u5904\u7406\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onresize</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// \u6216\u8005</span>
window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;resize&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><ul><li>\u53EA\u8981\u7A97\u53E3\u5927\u5C0F\u53D1\u751F\u50CF\u7D20\u53D8\u5316\uFF0C\u5C31\u4F1A\u89E6\u53D1\u8FD9\u4E2A\u4E8B\u4EF6</li><li>\u6211\u4EEC\u7ECF\u5E38\u5229\u7528\u8FD9\u4E2A\u4E8B\u4EF6\u5B8C\u6210\u54CD\u5E94\u5F0F\u5E03\u5C40\u3002<code>window.innerWidth</code> \u5F53\u524D\u5C4F\u5E55\u7684\u5BBD\u5EA6</li></ul><h3 id="_2-3-\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#_2-3-\u5B9A\u65F6\u5668" aria-hidden="true">#</a> 2.3 \u5B9A\u65F6\u5668</h3><p>window \u5BF9\u8C61\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E24\u4E2A\u5B9A\u65F6\u5668</p><ul><li><code>setTimeout()</code></li><li><code>setInterval()</code></li></ul><h4 id="_1-settimeout" tabindex="-1"><a class="header-anchor" href="#_1-settimeout" aria-hidden="true">#</a> (1) setTimeout()</h4><p><code>setTimeout()</code>\u65B9\u6CD5\u7528\u4E8E\u8BBE\u7F6E\u4E00\u4E2A\u5B9A\u65F6\u5668\uFF0C\u8BE5\u5B9A\u65F6\u5668\u5728\u5B9A\u65F6\u5668\u5230\u671F\u540E\u6267\u884C\u8C03\u7528\u51FD\u6570\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\u6BEB\u79D2\u6570<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p><code>window</code>\u53EF\u4EE5\u7701\u7565</p></li><li><p>\u8FD9\u4E2A\u8C03\u7528\u51FD\u6570</p><ul><li>\u53EF\u4EE5\u76F4\u63A5\u5199\u51FD\u6570</li><li>\u6216\u8005\u5199\u51FD\u6570\u540D</li><li>\u6216\u8005\u91C7\u53D6\u5B57\u7B26\u4E32 <strong>\u2018\u51FD\u6570\u540D()\u2019</strong> \uFF08\u4E0D\u63A8\u8350\uFF09</li></ul></li><li><p>\u5EF6\u8FDF\u7684\u6BEB\u79D2\u6570\u7701\u7565\u9ED8\u8BA4\u662F0\uFF0C\u5982\u679C\u5199\uFF0C\u5FC5\u987B\u662F\u6BEB\u79D2</p></li><li><p>\u56E0\u4E3A\u5B9A\u65F6\u5668\u53EF\u80FD\u6709\u5F88\u591A\uFF0C\u6240\u4EE5\u6211\u4EEC\u7ECF\u5E38\u7ED9\u5B9A\u65F6\u5668\u8D4B\u503C\u4E00\u4E2A\u6807\u8BC6\u7B26</p></li><li><p><code>setTimeout()</code> \u8FD9\u4E2A\u8C03\u7528\u51FD\u6570\u6211\u4EEC\u4E5F\u79F0\u4E3A<strong>\u56DE\u8C03\u51FD\u6570</strong> callback</p></li><li><p>\u666E\u901A\u51FD\u6570\u662F\u6309\u7167\u4EE3\u7801\u987A\u5E8F\u76F4\u63A5\u8C03\u7528\uFF0C\u800C\u8FD9\u4E2A\u51FD\u6570\uFF0C\u9700\u8981\u7B49\u5F85\u4E8B\u4EF6\uFF0C\u4E8B\u4EF6\u5230\u4E86\u624D\u4F1A\u53BB\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\uFF0C\u56E0\u6B64\u79F0\u4E3A\u56DE\u8C03\u51FD\u6570\u3002</p></li></ul><h4 id="_2-setinterval" tabindex="-1"><a class="header-anchor" href="#_2-setinterval" aria-hidden="true">#</a> (2) setInterval()</h4><ul><li><code>setInterval()</code>\u65B9\u6CD5\u91CD\u590D\u8C03\u7528\u4E00\u4E2A\u51FD\u6570\uFF0C\u6BCF\u9694\u8FD9\u4E2A\u65F6\u95F4\uFF0C\u5C31\u53BB\u8C03\u7528\u4E00\u6B21\u56DE\u8C03\u51FD\u6570</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\u6BEB\u79D2\u6570<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p><code>window</code>\u53EF\u4EE5\u7701\u7565</p></li><li><p>\u8FD9\u4E2A\u56DE\u8C03\u51FD\u6570:</p><ul><li>\u53EF\u4EE5\u76F4\u63A5\u5199\u51FD\u6570</li><li>\u6216\u8005\u5199\u51FD\u6570\u540D</li><li>\u6216\u8005\u91C7\u53D6\u5B57\u7B26 \u2018\u51FD\u6570\u540D()\u2019</li></ul></li><li><p>\u7B2C\u4E00\u6B21\u6267\u884C\u4E5F\u662F\u95F4\u9694\u6BEB\u79D2\u6570\u4E4B\u540E\u6267\u884C\uFF0C\u4E4B\u540E\u6BCF\u9694\u6BEB\u79D2\u6570\u5C31\u6267\u884C\u4E00\u6B21</p></li></ul><h4 id="_3-cleartimeout-\u505C\u6B62\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#_3-cleartimeout-\u505C\u6B62\u5B9A\u65F6\u5668" aria-hidden="true">#</a> (3) clearTimeout()\u505C\u6B62\u5B9A\u65F6\u5668</h4><ul><li><code>clearTimeout()</code>\u65B9\u6CD5\u53D6\u6D88\u4E86\u5148\u524D\u901A\u8FC7\u8C03\u7528 <code>setTimeout()</code>\u5EFA\u7ACB\u7684\u5B9A\u65F6\u5668</li><li><strong>\u6CE8\u610F</strong>\uFF1A <ul><li><code>window</code>\u53EF\u4EE5\u7701\u7565</li><li>\u91CC\u9762\u7684\u53C2\u6570\u5C31\u662F\u5B9A\u65F6\u5668\u7684\u6807\u8BC6\u7B26</li></ul></li></ul><h4 id="_4-clearinterval-\u505C\u6B62\u5B9A\u65F6\u5668" tabindex="-1"><a class="header-anchor" href="#_4-clearinterval-\u505C\u6B62\u5B9A\u65F6\u5668" aria-hidden="true">#</a> (4) clearInterval()\u505C\u6B62\u5B9A\u65F6\u5668</h4><ul><li><code>clearInterval ( )</code> \u65B9\u6CD5\u53D6\u6D88\u4E86\u5148\u524D\u901A\u8FC7\u8C03\u7528 <code>setInterval()</code> \u5EFA\u7ACB\u7684\u5B9A\u65F6\u5668</li></ul><h4 id="_5-this\u6307\u5411\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_5-this\u6307\u5411\u95EE\u9898" aria-hidden="true">#</a> (5) this\u6307\u5411\u95EE\u9898</h4><ul><li><code>this</code>\u7684\u6307\u5411\u5728\u51FD\u6570\u5B9A\u4E49\u7684\u65F6\u5019\u662F\u786E\u5B9A\u4E0D\u4E86\u7684\uFF0C\u53EA\u6709\u51FD\u6570\u6267\u884C\u7684\u65F6\u5019\u624D\u80FD\u786E\u5B9A<code>this</code>\u5230\u5E95\u6307\u5411\u8C01</li></ul><p>\u73B0\u9636\u6BB5\uFF0C\u6211\u4EEC\u5148\u4E86\u89E3\u4E00\u4E0B\u51E0\u4E2Athis\u6307\u5411</p><ul><li><p>\u5168\u5C40\u4F5C\u7528\u57DF\u6216\u8005\u666E\u901A\u51FD\u6570\u4E2D<code>this</code>\u6307\u5411\u5168\u5C40\u5BF9\u8C61<code>window</code>(\u6CE8\u610F\u5B9A\u65F6\u5668\u91CC\u9762\u7684this\u6307\u5411window)</p></li><li><p>\u65B9\u6CD5\u8C03\u7528\u4E2D\u8C01\u8C03\u7528<code>this</code>\u6307\u5411\u8C01</p></li><li><p>\u6784\u9020\u51FD\u6570\u4E2D<code>this</code>\u6307\u5411\u6784\u9020\u51FD\u6570\u5B9E\u4F8B</p></li></ul><h2 id="\u4E09-js\u6267\u884C\u673A\u5236" tabindex="-1"><a class="header-anchor" href="#\u4E09-js\u6267\u884C\u673A\u5236" aria-hidden="true">#</a> \u4E09.JS\u6267\u884C\u673A\u5236</h2><h3 id="_3-1-js\u662F\u5355\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#_3-1-js\u662F\u5355\u7EBF\u7A0B" aria-hidden="true">#</a> 3.1 JS\u662F\u5355\u7EBF\u7A0B</h3><p>(1) JavaScript \u8BED\u8A00\u7684\u4E00\u5927\u7279\u70B9\u5C31\u662F\u5355\u7EBF\u7A0B\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u540C\u4E00\u4E2A\u65F6\u95F4\u53EA\u80FD\u505A\u4E00\u4EF6\u4E8B\u3002\u8FD9\u662F\u56E0\u4E3A Javascript \u8FD9\u95E8\u811A\u672C\u8BED\u8A00\u8BDE\u751F\u7684\u4F7F\u547D\u6240\u81F4\u2014\u2014JavaScript \u662F\u4E3A\u5904\u7406\u9875\u9762\u4E2D\u7528\u6237\u7684\u4EA4\u4E92\uFF0C\u4EE5\u53CA\u64CD\u4F5C DOM \u800C\u8BDE\u751F\u7684\u3002\u6BD4\u5982\u6211\u4EEC\u5BF9\u67D0\u4E2A DOM \u5143\u7D20\u8FDB\u884C\u6DFB\u52A0\u548C\u5220\u9664\u64CD\u4F5C\uFF0C\u4E0D\u80FD\u540C\u65F6\u8FDB\u884C\u3002 \u5E94\u8BE5\u5148\u8FDB\u884C\u6DFB\u52A0\uFF0C\u4E4B\u540E\u518D\u5220\u9664\u3002</p><p>(2) \u5355\u7EBF\u7A0B\u5C31\u610F\u5473\u7740\uFF0C\u6240\u6709\u4EFB\u52A1\u9700\u8981\u6392\u961F\uFF0C\u524D\u4E00\u4E2A\u4EFB\u52A1\u7ED3\u675F\uFF0C\u624D\u4F1A\u6267\u884C\u540E\u4E00\u4E2A\u4EFB\u52A1\u3002\u8FD9\u6837\u6240\u5BFC\u81F4\u7684\u95EE\u9898\u662F\uFF1A \u5982\u679C JS \u6267\u884C\u7684\u65F6\u95F4\u8FC7\u957F\uFF0C\u8FD9\u6837\u5C31\u4F1A\u9020\u6210\u9875\u9762\u7684\u6E32\u67D3\u4E0D\u8FDE\u8D2F\uFF0C\u5BFC\u81F4\u9875\u9762\u6E32\u67D3\u52A0\u8F7D\u963B\u585E\u7684\u611F\u89C9\u3002</p><h3 id="_3-2-\u540C\u6B65\u548C\u5F02\u6B65" tabindex="-1"><a class="header-anchor" href="#_3-2-\u540C\u6B65\u548C\u5F02\u6B65" aria-hidden="true">#</a> 3.2 \u540C\u6B65\u548C\u5F02\u6B65</h3><ul><li>\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u5229\u7528\u591A\u6838 CPU \u7684\u8BA1\u7B97\u80FD\u529B\uFF0CHTML5 \u63D0\u51FA Web Worker \u6807\u51C6\uFF0C\u5141\u8BB8 JavaScript \u811A\u672C\u521B\u5EFA\u591A\u4E2A\u7EBF\u7A0B</li><li>\u4E8E\u662F\uFF0CJS \u4E2D\u51FA\u73B0\u4E86\u540C\u6B65\u548C\u5F02\u6B65\u3002</li><li>\u540C\u6B65 <ul><li>\u524D\u4E00\u4E2A\u4EFB\u52A1\u7ED3\u675F\u540E\u518D\u6267\u884C\u540E\u4E00\u4E2A\u4EFB\u52A1</li></ul></li><li>\u5F02\u6B65 <ul><li>\u5728\u505A\u8FD9\u4EF6\u4E8B\u7684\u540C\u65F6\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u53BB\u5904\u7406\u5176\u4ED6\u4E8B\u60C5</li></ul></li></ul><h4 id="_3-2-1-\u540C\u6B65\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u540C\u6B65\u4EFB\u52A1" aria-hidden="true">#</a> 3.2.1 \u540C\u6B65\u4EFB\u52A1</h4><ul><li>\u540C\u6B65\u4EFB\u52A1\u90FD\u5728\u4E3B\u7EBF\u7A0B\u4E0A\u6267\u884C\uFF0C\u5F62\u6210\u4E00\u4E2A \u6267\u884C\u6808</li></ul><h4 id="_3-2-2-\u5F02\u6B65\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#_3-2-2-\u5F02\u6B65\u4EFB\u52A1" aria-hidden="true">#</a> 3.2.2 \u5F02\u6B65\u4EFB\u52A1</h4><ul><li>JS\u4E2D\u7684\u5F02\u6B65\u662F\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u5B9E\u73B0\u7684</li><li>\u5F02\u6B65\u4EFB\u52A1\u6709\u4EE5\u4E0B\u4E09\u79CD\u7C7B\u578B <ul><li>\u666E\u901A\u4E8B\u4EF6\uFF0C\u5982<code>click</code>,<code>resize</code>\u7B49</li><li>\u8D44\u6E90\u52A0\u8F7D\uFF0C\u5982<code>load</code>,<code>error</code>\u7B49</li><li>\u5B9A\u65F6\u5668\uFF0C\u5305\u62EC<code>setInterval</code>,<code>setTimeout</code>\u7B49</li></ul></li><li>\u5F02\u6B65\u4EFB\u52A1\u76F8\u5173\u56DE\u8C03\u51FD\u6570\u6DFB\u52A0\u5230\u4EFB\u52A1\u961F\u5217\u4E2D</li></ul><p><img src="`+t+'" alt="\u6267\u884C\u6808\u548C\u4EFB\u52A1\u961F\u5217"></p><ol><li>\u5148\u6267\u884C\u6267\u884C\u6808\u4E2D\u7684\u540C\u6B65\u4EFB\u52A1</li><li>\u5F02\u6B65\u4EFB\u52A1(\u56DE\u8C03\u51FD\u6570)\u653E\u5165\u4EFB\u52A1\u961F\u5217\u4E2D</li><li>\u4E00\u65E6\u6267\u884C\u6808\u4E2D\u7684\u6240\u6709\u540C\u6B65\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C\u7CFB\u7EDF\u5C31\u4F1A\u6309\u6B21\u5E8F\u8BFB\u53D6\u4EFB\u52A1\u961F\u5217\u4E2D\u7684\u5F02\u6B65\u4EFB\u52A1\uFF0C\u4E8E\u662F\u88AB\u8BFB\u53D6\u7684\u5F02\u6B65\u4EFB\u52A1\u7ED3\u675F\u7B49\u5F85\u72B6\u6001\uFF0C\u8FDB\u5165\u6267\u884C\u6808\uFF0C\u5F00\u59CB\u6267\u884C</li></ol><p><img src="'+e+'" alt="\u6267\u884C\u6808\u548C\u4EFB\u52A1\u961F\u52171"></p><p><img src="'+p+`" alt="\u6267\u884C\u6808\u548C\u4EFB\u52A1\u961F\u52172"></p><p>\u540C\u6B65\u4EFB\u52A1\u653E\u5728\u6267\u884C\u6808\u4E2D\u6267\u884C\uFF0C\u5F02\u6B65\u4EFB\u52A1\u7531\u5F02\u6B65\u8FDB\u7A0B\u5904\u7406\u653E\u5230\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u6267\u884C\u6808\u4E2D\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u4F1A\u53BB\u4EFB\u52A1\u961F\u5217\u4E2D\u67E5\u770B\u662F\u5426\u6709\u5F02\u6B65\u4EFB\u52A1\u6267\u884C\uFF0C\u7531\u4E8E\u4E3B\u7EBF\u7A0B\u4E0D\u65AD\u7684\u91CD\u590D\u83B7\u5F97\u4EFB\u52A1\u3001\u6267\u884C\u4EFB\u52A1\u3001\u518D\u83B7\u53D6\u4EFB\u52A1\u3001\u518D\u6267\u884C\uFF0C\u6240\u4EE5\u8FD9\u79CD\u673A\u5236\u88AB\u79F0\u4E3A\u4E8B\u4EF6\u5FAA\u73AF\uFF08 event loop\uFF09\u3002</p><h2 id="\u56DB-location\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u56DB-location\u5BF9\u8C61" aria-hidden="true">#</a> \u56DB.location\u5BF9\u8C61</h2><h3 id="_4-1-location\u5BF9\u8C61\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-1-location\u5BF9\u8C61\u5C5E\u6027" aria-hidden="true">#</a> 4.1 location\u5BF9\u8C61\u5C5E\u6027</h3><table><thead><tr><th style="text-align:center;"><strong>location\u5BF9\u8C61\u5C5E\u6027</strong></th><th style="text-align:center;"><strong>\u8FD4\u56DE\u503C</strong></th></tr></thead><tbody><tr><td style="text-align:center;">location.href</td><td style="text-align:center;">\u83B7\u53D6\u6216\u8005\u8BBE\u7F6E\u6574\u4E2AURL</td></tr><tr><td style="text-align:center;">location.host</td><td style="text-align:center;">\u8FD4\u56DE\u4E3B\u673A\uFF08\u57DF\u540D\uFF09www.baidu.com</td></tr><tr><td style="text-align:center;">location.port</td><td style="text-align:center;">\u8FD4\u56DE\u7AEF\u53E3\u53F7\uFF0C\u5982\u679C\u672A\u5199\u8FD4\u56DE\u7A7A\u5B57\u7B26\u4E32</td></tr><tr><td style="text-align:center;">location.pathname</td><td style="text-align:center;">\u8FD4\u56DE\u8DEF\u5F84</td></tr><tr><td style="text-align:center;">location.search</td><td style="text-align:center;">\u8FD4\u56DE\u53C2\u6570</td></tr><tr><td style="text-align:center;">location.hash</td><td style="text-align:center;">\u8FD4\u56DE\u7247\u6BB5 #\u540E\u9762\u5185\u5BB9\u5E38\u89C1\u4E8E\u94FE\u63A5 \u951A\u70B9</td></tr></tbody></table><p>\u91CD\u70B9\u8BB0\u4F4F\uFF1A <code>href</code>\u548C<code>search</code></p><h3 id="_4-2-location\u5BF9\u8C61\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_4-2-location\u5BF9\u8C61\u65B9\u6CD5" aria-hidden="true">#</a> 4.2 location\u5BF9\u8C61\u65B9\u6CD5</h3><table><thead><tr><th style="text-align:center;"><strong>location\u5BF9\u8C61\u65B9\u6CD5</strong></th><th style="text-align:center;"><strong>\u8FD4\u56DE\u503C</strong></th></tr></thead><tbody><tr><td style="text-align:center;">location.assign()</td><td style="text-align:center;">\u8DDFhref\u4E00\u6837\uFF0C\u53EF\u4EE5\u8DF3\u8F6C\u9875\u9762\uFF08\u4E5F\u79F0\u4E3A\u91CD\u5B9A\u5411\u9875\u9762\uFF09</td></tr><tr><td style="text-align:center;">location.replace()</td><td style="text-align:center;">\u66FF\u6362\u5F53\u524D\u9875\u9762\uFF0C\u56E0\u4E3A\u4E0D\u8BB0\u5F55\u5386\u53F2\uFF0C\u6240\u4EE5\u4E0D\u80FD\u540E\u9000\u9875\u9762</td></tr><tr><td style="text-align:center;">location.reload()</td><td style="text-align:center;">\u91CD\u65B0\u52A0\u8F7D\u9875\u9762\uFF0C\u76F8\u5F53\u4E8E\u5237\u65B0\u6309\u94AE\u6216\u8005 f5 \uFF0C\u5982\u679C\u53C2\u6570\u4E3Atrue \u5F3A\u5236\u5237\u65B0 ctrl+f5</td></tr></tbody></table><h3 id="_4-3-\u83B7\u53D6url\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_4-3-\u83B7\u53D6url\u53C2\u6570" aria-hidden="true">#</a> 4.3 \u83B7\u53D6URL\u53C2\u6570</h3><p>\u6211\u4EEC\u7B80\u5355\u5199\u4E00\u4E2A\u767B\u5F55\u6846\uFF0C\u70B9\u51FB\u767B\u5F55\u8DF3\u8F6C\u5230 index.html</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index.html<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        \u7528\u6237\u540D\uFF1A <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>uname<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\u767B\u5F55<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u5199 index.html</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>search<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ?uname=andy</span>
        <span class="token comment">// 1.\u5148\u53BB\u6389\uFF1F  substr(&#39;\u8D77\u59CB\u7684\u4F4D\u7F6E&#39;\uFF0C\u622A\u53D6\u51E0\u4E2A\u5B57\u7B26);</span>
        <span class="token keyword">var</span> params <span class="token operator">=</span> location<span class="token punctuation">.</span>search<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// uname=andy</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 2. \u5229\u7528=\u628A\u5B57\u7B26\u4E32\u5206\u5272\u4E3A\u6570\u7EC4 split(&#39;=&#39;);</span>
        <span class="token keyword">var</span> arr <span class="token operator">=</span> params<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [&quot;uname&quot;, &quot;ANDY&quot;]</span>
        <span class="token keyword">var</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;div&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 3.\u628A\u6570\u636E\u5199\u5165div\u4E2D</span>
        div<span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;\u6B22\u8FCE\u60A8&#39;</span><span class="token punctuation">;</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u8FD9\u6837\u6211\u4EEC\u5C31\u80FD\u83B7\u53D6\u5230\u8DEF\u5F84\u4E0A\u7684URL\u53C2\u6570</p><h2 id="\u4E94-navigator\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u4E94-navigator\u5BF9\u8C61" aria-hidden="true">#</a> \u4E94.navigator\u5BF9\u8C61</h2><ul><li>navigator \u5BF9\u8C61\u5305\u542B\u6709\u5173\u6D4F\u89C8\u5668\u7684\u4FE1\u606F\uFF0C\u5B83\u6709\u5F88\u591A\u5C5E\u6027</li><li>\u6211\u4EEC\u5E38\u7528\u7684\u662F<code>userAgent</code>,\u8BE5\u5C5E\u6027\u53EF\u4EE5\u8FD4\u56DE\u7531\u5BA2\u6237\u673A\u53D1\u9001\u670D\u52A1\u5668\u7684<code>user-agent</code>\u5934\u90E8\u7684\u503C</li></ul><p>\u4E0B\u9762\u524D\u7AEF\u4EE3\u7801\u53EF\u4EE5\u5224\u65AD\u7528\u6237\u662F\u7528\u54EA\u4E2A\u7EC8\u7AEF\u6253\u5F00\u9875\u9762\u7684\uFF0C\u5982\u679C\u662F\u7528 PC \u6253\u5F00\u7684\uFF0C\u6211\u4EEC\u5C31\u8DF3\u8F6C\u5230 PC \u7AEF\u7684\u9875\u9762\uFF0C\u5982\u679C\u662F\u7528\u624B\u673A\u6253\u5F00\u7684\uFF0C\u5C31\u8DF3\u8F6C\u5230\u624B\u673A\u7AEF\u9875\u9762</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    window.location.href = &quot;&quot;;     //\u624B\u673A
 } else {
    window.location.href = &quot;&quot;;     //\u7535\u8111
 }
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u516D-history\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u516D-history\u5BF9\u8C61" aria-hidden="true">#</a> \u516D.history\u5BF9\u8C61</h2><ul><li>window \u5BF9\u8C61\u7ED9\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E2A history \u5BF9\u8C61\uFF0C\u4E0E\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\u8FDB\u884C\u4EA4\u4E92</li><li>\u8BE5\u5BF9\u8C61\u5305\u542B\u7528\u6237\uFF08\u5728\u6D4F\u89C8\u5668\u7A97\u53E3\u4E2D\uFF09\u8BBF\u95EE\u8FC7\u7684 URL\u3002</li></ul><table><thead><tr><th style="text-align:center;"><strong>history\u5BF9\u8C61\u65B9\u6CD5</strong></th><th style="text-align:center;"><strong>\u4F5C\u7528</strong></th></tr></thead><tbody><tr><td style="text-align:center;">back()</td><td style="text-align:center;">\u53EF\u4EE5\u540E\u9000\u529F\u80FD</td></tr><tr><td style="text-align:center;">forward()</td><td style="text-align:center;">\u524D\u8FDB\u529F\u80FD</td></tr><tr><td style="text-align:center;">go(\u53C2\u6570)</td><td style="text-align:center;">\u524D\u8FDB\u540E\u9000\u529F\u80FD\uFF0C\u53C2\u6570\u5982\u679C\u662F 1 \u524D\u8FDB1\u4E2A\u9875\u9762 \u5982\u679C\u662F -1 \u540E\u90001\u4E2A\u9875\u9762</td></tr></tbody></table>`,77);function c(i,r){return l}var d=n(o,[["render",c],["__file","4.BOM\u5143\u7D20.html.vue"]]);export{d as default};
