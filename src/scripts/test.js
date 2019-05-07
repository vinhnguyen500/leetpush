var xmlString = `
<!doctype html><html><body>
<div class="CodeMirror-code" role="presentation" style="">
  <div style="position: relative;" class="CodeMirror-activeline">
     <div class="CodeMirror-activeline-background CodeMirror-linebackground"></div>
     <div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: -56px; width: 56px;"></div>
     <div class="CodeMirror-gutter-wrapper CodeMirror-activeline-gutter" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">1</div>
        <div class="CodeMirror-gutter-elt" style="left: 40px; width: 15px;">
           <div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div>
        </div>
     </div>
     <pre class=
     
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">2</div>
        <div class="CodeMirror-gutter-elt" style="left: 40px; width: 15px;">
           <div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div>
        </div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp;<span class="cm-keyword">def</span> <span class="cm-def">letterCombinations</span>(<span class="cm-variable-2">self</span>, <span class="cm-variable">digits</span>: <span class="cm-builtin">str</span>) <span class="cm-operator">-&gt;</span> <span class="cm-variable">List</span>[<span class="cm-builtin">str</span>]:</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">3</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">digits</span><span class="cm-operator">=</span><span class="cm-builtin">list</span>(<span class="cm-variable">digits</span>)</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">4</div>
        <div class="CodeMirror-gutter-elt" style="left: 40px; width: 15px;">
           <div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div>
        </div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">if</span> <span class="cm-builtin">len</span>(<span class="cm-variable">digits</span>)<span class="cm-operator">==</span><span class="cm-number">0</span>:</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">5</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">return</span> []</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">6</div>
        <div class="CodeMirror-gutter-elt" style="left: 40px; width: 15px;">
           <div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div>
        </div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">mapping</span> <span class="cm-operator">=</span> {<span class="cm-string">"2"</span>: <span class="cm-string">"abc"</span>, <span class="cm-string">"3"</span>: <span class="cm-string">"def"</span>, <span class="cm-string">"4"</span>: <span class="cm-string">"ghi"</span>,</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">7</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-string">"5"</span>: <span class="cm-string">"jkl"</span>, <span class="cm-string">"6"</span>: <span class="cm-string">"mno"</span>, <span class="cm-string">"7"</span>: <span class="cm-string">"pqrs"</span>,</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">8</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span class="cm-string">"8"</span>: <span class="cm-string">"tuv"</span>, <span class="cm-string">"9"</span>: <span class="cm-string">"wxyz"</span>}</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">9</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"><span cm-text="">​</span></span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">10</div>
        <div class="CodeMirror-gutter-elt" style="left: 40px; width: 15px;">
           <div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div>
        </div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">def</span> <span class="cm-def">string</span>(<span class="cm-variable">digits</span>,<span class="cm-variable">re_string</span>,<span class="cm-variable">nums</span>):</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">11</div>
        <div class="CodeMirror-gutter-elt" style="left: 40px; width: 15px;">
           <div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div>
        </div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">if</span> <span class="cm-builtin">len</span>(<span class="cm-variable">digits</span>)<span class="cm-operator">==</span><span class="cm-number">0</span>:</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">12</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">re_string</span>.<span class="cm-property">append</span>(<span class="cm-string">''</span>.<span class="cm-property">join</span>(<span class="cm-variable">nums</span>))</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">13</div>
        <div class="CodeMirror-gutter-elt" style="left: 40px; width: 15px;">
           <div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div>
        </div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">else</span>:</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">14</div>
        <div class="CodeMirror-gutter-elt" style="left: 40px; width: 15px;">
           <div class="CodeMirror-foldgutter-open CodeMirror-guttermarker-subtle"></div>
        </div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">for</span> <span class="cm-variable">char</span> <span class="cm-keyword">in</span> <span class="cm-variable">mapping</span>[<span class="cm-variable">digits</span>[<span class="cm-number">0</span>]]:</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">15</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">string</span>(<span class="cm-variable">digits</span>[<span class="cm-number">1</span>:], <span class="cm-variable">re_string</span>, <span class="cm-variable">nums</span><span class="cm-operator">+</span>[<span class="cm-variable">char</span>])</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">16</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">re_string</span><span class="cm-operator">=</span>[]</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">17</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">nums</span><span class="cm-operator">=</span>[]</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">18</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-variable">string</span>(<span class="cm-variable">digits</span>,<span class="cm-variable">re_string</span>,<span class="cm-variable">nums</span>)</span></pre>
  </div>
  <div style="position: relative;">
     <div class="CodeMirror-gutter-wrapper" style="left: -56px;">
        <div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 32px;">19</div>
     </div>
     <pre class=" CodeMirror-line " role="presentation"><span role="presentation"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-variable">re_string</span></span></pre>
  </div>
</div>
</body></html>
`;
var jsdom = require("jsdom");
var JSDOM = jsdom.JSDOM;
GLOBAL.document = new JSDOM(xmlString).window.document;
var code_lines = document.querySelectorAll(".CodeMirror-line")

var code = ""
Array.from(document.querySelectorAll(".CodeMirror-line")).forEach(el => code += (el.textContent + '\n'));
console.log(code);