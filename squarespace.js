//load jQuery
<script
src = "https://code.jquery.com/jquery-3.2.1.min.js"
integrity = "sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
crossorigin = "anonymous" > 
</script> 
//bundle.js loaded from rawgit
<script src = "https://cdn.rawgit.com/mona87/bundle/7ac2f304/dist/bundle.js" > < /script> 
<script>

    $(document).ready(function() {


        //initialize html 
        var intervalID = window.setInterval(myCallback, 100);
        myCallBack();

        function myCallback() {
            if (!!$('html').length) {
                loadHTML();
                console.log('div exist');



                window.clearInterval(intervalID);

                /*function for slide animation */
                //add css transition after page load
                $('.slide').css('transition', '1s');

                //grab all icons
                const icons = document.querySelectorAll('.icons div');

                //add eventlistner to each icon
                icons.forEach(function(icon) { icon.addEventListener('click', update) });

                function update(e) {
                    //loop and hide all slides
                    const slides = document.querySelectorAll('.slide')
                    slides.forEach(function(slide) {
                            slide.style.setProperty('opacity', '0');
                        })
                        //show selected
                    const slide = document.querySelector('.' + this.dataset.slide);
                    slide.style.setProperty('opacity', '1');
                }

                /*function for scroll */
                const container = $('html,body');

                const boxes = document.querySelectorAll('.boxes');

                boxes.forEach(function(box) {
                    box.addEventListener('click', scroll);
                })

                function scroll(e) {

                    console.log(this.dataset.anchor)

                    const scrollTo = $('#sec' + this.dataset.anchor)
                    container.animate({
                        scrollTop: scrollTo.offset().top

                    });
                }
            } else {
                console.log("div doesn't exist");
            }
        }

    });



//load content
function loadHTML() {

    $('body').html(`<section class=cf id=sec1><div class=sec1-img1></div><div class=sec1-img2></div><div class=header><h1><span class=blue>Capture,</span><span class=pink> Collaborate,</span> <span class=yellow>Connect.</span></h1><span class=underline></span><h3>Building the future of Capture with Atlassian and beyond.</h3></div><div class=sec1-img3></div><div class=anchors><div class="boxes box1"data-anchor=1></div><div class=boxes data-anchor=2></div><div class=boxes data-anchor=7></div><div class=boxes data-anchor=9></div></div></section><section class=cf id=sec2><div class=sec2-img></div><div class=copy><div class=highlight>Capture</div><h2>Capture anything and everything</h2><p><span class=bold>CAPTURE will become the best-in-class screen sharing tool for software design, development and support.</span> We seek to stabilize CAPTURE as a platform, while improving the overall experience. Better design, new features, and deeper integration with the Atlassian suite will all propel CAPTURE to being a staple of media sharing.</div><div class=anchors><div class=boxes data-anchor=1></div><div class="boxes box2"data-anchor=2></div><div class=boxes data-anchor=7></div><div class=boxes data-anchor=9></div></div></section><section class=cf id=sec3><div class=sec3-img></div><div class=copy><div class=highlight>Capture</div><h2>Capture Anywhere</h2><p><span class=bold>Expand Atlassian’s reach.</span> Developers and Designers are not limited to one platform anymore. By implementing modern design and improving experience, we allow users to CAPTURE and annotate seamlessly from wherever they are — increasing Atlassian’s footprint outside of the platform and drawing users back to key points of intersection like JIRA as user’s home base.</div></section><section class=cf id=sec4><div class=copy><div class=highlight>Capture</div><h2>Capture Anything</h2><p><span class=bold>Move beyond the static image.</span> Our goal for this product is to build a tool that can CAPTURE anything and everything our users desire. Going beyond screen CAPTURE, we plan to expand the reach of the tool. The new CAPTURE will combine various types of media; from custom capture areas to comment logs, even illustrated ideas & concepts.<ul><li>Entire window<li>Fullscreen<li>Selected area<li>Select and scroll<li>Multiple pages<li>Time based tools<li>Blank page illustration</ul><ul><li>Comments and notes<li>Chat integration<li>Multiple desktops<li>Animated GIFs<li>Social sharing<li>YouTube support</ul></div><div class=sec4-img></div></section><section class=cf id=sec5><div class=sec5-img></div><div class=copy><div class=highlight>Capture</div><h2>Capture Stories</h2><p><span class=bold>Motion matters and communicates better.</span>Not all media and output is static. CAPTURE can integrate video, audio, and new annotation layers into workflows, allowing users to share better dynamic fzeedback, with more layers.<ul><li>Video screen recording<li>Voice recording<li>User & system audio recording</ul></div></section><section class=cf id=sec6><div class=sec6-img1></div><div class=sec6-img2></div><div class=copy-bg><div class=copy><div class=highlight>Collaborate</div><h2>Integrated Collaboration</h2><p>Our perspective on CAPTURE focuses on bringing users together and adding useful functionality, where other screenshot tools fall short. We plan to add critical, missing functionality that allows for teams to better share media in JIRA, HipChat and other Atlassian applications.</div></div><div class=sec6-img3></div></section><section class=cf id=sec7><div class=sec7-img></div><div class=copy><div class=highlight>Collaborate</div><h2>Capture with your Colleagues</h2><p><span class=bold>Collaboration is better in real time.</span> The days of saving PDFs and email are over. CAPTURE will have the unique ability to host real time design sessions and testing, sharing them easily between products. Imagine being able to annotate documents and comment, as if you were next to your colleagues. Video code reviews result in better collaboration and understanding between development teams.<ul><li>Multiple users<li>Audio and screen sharing<li>Collaborative workflows<li>Superior bug reports, faster resolution<li>Faster issues with Mobile Connect</ul></div><div class=anchors><div class=boxes data-anchor=1></div><div class=boxes data-anchor=2></div><div class="boxes box3"data-anchor=7></div><div class=boxes data-anchor=9></div></div></section><section class=cf id=sec8><div class=copy><div class=highlight>Collaborate</div><h2>Repository Access for Everyone</h2><p><span class=bold>All your files in one place.</span>CAPTURE holds a repository of editable files and will natively integrate with Dropbox and operating systems to automatically save annotations. Users can access their CAPTURE files and re-edit, share, and update between applications. Capturing media externally creates stickiness and brings everyone back to the Atlassian stack.<ul><li>Editable CAPTURE files<li>Repository on OS and Atlassian applications<li>Integrated repositories for Dropbox</ul></div><div class=sec8-img></div></section><section class=cf id=sec9><div class=sec9-img></div><div class=copy><div class=highlight>Connect</div><h2>Connect Everything</h2><p>Current tools provide a disconnected experience between capturing media and using it within another product. We seek to expand CAPTURE's footprint beyond JIRA, enabling users to access media from any device, at any time, across the Atlassian Ecosystem.</div><div class=anchors><div class=boxes data-anchor=1></div><div class=boxes data-anchor=2></div><div class=boxes data-anchor=7></div><div class="boxes box4"data-anchor=9></div></div></section><section class=cf id=sec10><div class=copy><div class=highlight>Connect</div><h2>Share Everywhere</h2><p><span class=bold>Connect Atlassian.</span> The backbone of CAPTURE’s potential is it’s ability to seamlessly integrate with the entire Atlassian ecosystem. Users will have the ability to move editable CAP files across any app in the suite to another.<ul><li>JIRA issue<li>Service Desk ticket<li>HipChat room</ul><ul><li>Trello card<li>Bitbucket repository/review<li>Confluence page</ul><p>CAPTURE’s ubiquitous nature also makes it a strong selling point for Solution Partners interested in providing their customers with the best possible Atlassian experience.</div><div class=sec10-img></div></section><section class=cf id=sec11><div class=sec11-img></div><div class=copy><div class=highlight>Connect</div><h2>Connect Everything</h2><p><span class=bold>Be a bigger part of your user’s routine.</span> The connection of CAPTURE won’t stop at Atlassian tools, but will fit into the day to day ecosystem of a developer, service desk agent, or designer. CAPTURE will enhance existing processes and workflows far beyond the Atlassian stack.<ul><li>Test management tools<li>External service desk<li>ChatOps<li>Live chat video service</ul><ul><li>API / CAPTURE as-a-service<li>Other common developer tools<li>Better agile testing delivers better software, faster</ul></div></section><section class=cf id=sec12><h1>Atlassian Use Cases</h1><div class="slide one"><div class=trello-slide></div><div class=copy><div class=trello></div><h2>Capture connects teams across the Atlassian stack</h2><p>CAPTURE makes it easy to conceptualize a new feature idea by providing annotated screenshots. Trello integration lets users easily add ideas to a roadmap board and disseminate them throughout the organization, while garner ing input through inline comments. Quickly building consensus amongst stakeholders promotes faster production and higher quality.</div></div><div class="slide two"><div class=hipchat-slide></div><div class=copy><div class=hipchat></div><h2>Capture connects teams across the Atlassian stack</h2><p>Live video collaboration helps designers & developers collaborate with HipChat in real-time. This leads to expedited decision making and helps everyone achieve a faster time to market for new functionality. CAPTURE also promotes retention of valuable input from team members which helps provides background on how an idea evolved into it’s desired execution.</div></div><div class="slide three"><div class=bitbucket-slide></div><div class=copy><div class=bitbucket></div><h2>Capture connects teams across the Atlassian stack</h2><p>CAPTURE’s integration with Bitbucket means developers can attach screenshots to pull requests in an effort to clearly communicate the changes that their code introduces. Code reviews can be recorded and posted in response. Streamlined developer communication results in higher quality code and better coordination of effort between team members.</div></div><div class="slide four"><div class=jira-core-slide></div><div class=copy><div class=jira-core></div><h2>Capture connects teams across the Atlassian stack</h2><p>CAPTURE’s test sessions are more effective and lead to higher quality software when the documentation of issues is ubiquitous and not disconnected by several different tools. CAPTURE allows for quick creation of new issues, provides the ability to search existing issues to prevent duplication, and even introduces the ability to follow issues through to resolution.</div></div><div class="slide five"><div class=confluence-slide></div><div class=copy><div class=confluence></div><h2>Capture connects teams across the Atlassian stack</h2><p>Companies use Confluence as repositories for their internal and external knowledge bases. CAPTURE integration with Confluence promotes the practice of knowledge sharing through its ease of use. It also helps increase the quality and depth of information in these knowledge base articles to help provide better context around a subject.</div></div><div class="slide six"><div class=jira-service-slide></div><div class=copy><div class=jira-service></div><h2>Capture connects teams across the Atlassian stack</h2><p>CAPTURE makes it easier for both Users and Service Desk Agents to communicate details surrounding a particular incident. Richer data reduces the amount of time it takes to identify underlying causes, leads to quicker issue resolution, and contributes to SLA adherence. The added ability to track the status of outstanding issues contributes to customer satisfaction.</div></div><div class=icons><div class=trello-icon data-slide=one></div><div class=hipchat-icon data-slide=two></div><div class=bitbucket-icon data-slide=three></div><div class=jira-core-icon data-slide=four></div><div class=confluence-icon data-slide=five></div><div class=jira-service-icon data-slide=six></div></div></section>`);

}

< /script>

< style >
    header {
        padding: 0 20 px; - webkit - box - sizing: border - box; - moz - box - sizing: border - box;
        box - sizing: border - box;
        z - index: 1000;
        top: 0;
        left: 0;
        width: 100 % ;
        line - height: 1e m;
        background - color: #fafafa; - moz - osx - font - smoothing: auto; - webkit - font - smoothing: subpixel - antialiased;
        position: relative;
    }

< /style>
