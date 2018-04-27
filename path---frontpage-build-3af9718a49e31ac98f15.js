webpackJsonp([0x9eea3b0a0b15],{463:function(e,a){e.exports={data:{markdownRemark:{html:'<h2 id="how-do-we-build"><a href="#how-do-we-build" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>How do we build</h2>\n<p>Building an image is done with out central build logic <a href="docs#architect">architect</a> that implements the <a href="https://docs.openshift.org/latest/creating_images/custom.html">CustomBuilder</a> contract. </p>\n<p>Triggering a build can be done in several ways:</p>\n<ul>\n<li>via <a href="docs#auroraPipeline">AuroraPipeline</a> as a <a href="docs#semantic">semanic release</a> or as a <a href="docs#snapshot-build">wip/branch build</a></li>\n<li>as a binary-build directly from a local client for <a href="aurora#development-flow">development flow</a> builds. This will buypass Nexus and read DeliveryBundle from stdin </li>\n<li>when the build logic or base image changes a trigger will be fired to rebuild in order to support <a href="docs#patching">patching</a>. </li>\n</ul>',headings:[{value:"How do we build",depth:2}],fields:{slug:"/frontpage/build/"},frontmatter:{title:""}}},pathContext:{slug:"/frontpage/build/"}}}});
//# sourceMappingURL=path---frontpage-build-3af9718a49e31ac98f15.js.map