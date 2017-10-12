"use strict";function el(e,i){return i||(i=document),"#"===e[0]?i.getElementById(e.substr(1)):"."===e[0]?i.getElementsByClassName(e.substr(1)):i.getElementsByTagName(e)}function t(e,i){i=i||{},e&&("."===e[0]&&(i.className=e.substr(1),e="div"),"#"===e[0]&&(i.id=e.substr(1),e="div"));var a=e?document.createElement(e):document.createDocumentFragment();return i&&Object.keys(i).forEach(function(e){"onclick"===e?a.addEventListener("click",function(t){return i[e](t,a)}):a[e]=i[e]}),function(e,i){if(i)return a.innerHTML=e,a;if(!e&&0!==e)return a;var t=Object.prototype.toString.call(e).slice(8,-1);return"String"!==t&&"Number"!==t||(a.textContent=e),"HTML"!==t.substr(0,4)&&"Docu"!==t.substr(0,4)||a.appendChild(e),"Array"===t&&e.forEach(function(e){return a.appendChild(e)}),a}}function openMember(e,i){document.body.classList.toggle("open-member"),i.classList.toggle("member-open")}function createArticle(e){return function(i){return t("article")([t(".article-authors")([t("img",{src:contributors.filter(function(e){return e.name===i.authors[0]})[0].image})()]),t(".article-text")([t(".article-date")(i.date),t("a",{href:"/articles/"+i.route+"/",className:"article-title",onclick:router})(i.title)].concat(e?articleParas(i):articleBlurb(i)))])}}function articleBlurb(e){var i=t(".article-blurb")(e.blurb);return i.innerHTML=i.innerHTML,[i,t(".article-tags")(e.tags.map(createTag).concat([t("a",{className:"article-readmore",href:"/articles/"+e.route+"/",onclick:router})("Read More >")]))]}function articleParas(e){return[t(".article-paras")(e.text.map(function(e){return t(".article-para")(e)})),t(".article-tags")(e.tags.map(createTag))]}function createTag(e){return t("a",{href:"/tags/"+e.toLowerCase().split(" ").join("-")+"/",onclick:router,className:"article-tag"})(e)}function router(e){e&&e.preventDefault();var i=e?e.target.getAttribute("href"):document.location.pathname;i!==currentRoute&&(window.history[e?"pushState":"replaceState"]({route:i},"",i),Object.keys(routes).forEach(function(e){var a=isArticle(e)?"articles":e.replace(/\//g,"")||"home",t=isArticle(e)&&isArticle(i)||e===i;document.body.classList[t?"add":"remove"](a+"-page")}),dom.main.firstChild&&dom.main.removeChild(dom.main.firstChild),dom.main.appendChild(routes[i].dom),window.scrollTo(0,0),currentRoute=i)}function isArticle(e){return e.indexOf("article")>-1}var dom={main:el("main")[0]},routes={},currentRoute,contributors=[{name:"Fred T. Podolsky",phone:"212-895-0261",email:"fpodolsky@alliant.com",title:"Executive Vice President",position:"Executive Risk",location:"New York, NY",image:"./images/fredpodolsky.png",bio:["Fred is an Executive Vice President in the Executive Risk Group focusing on executive risk liability exposures and insurance solutions.  His specialization includes directors and officers liability, bankers professional liability, employment practices liability, fiduciary liability, crime, and other professional liability products and exposures. His experience is on publicly traded organizations and financial institutions of all types as well as larger private organizations.","Additionally, he brings experience in insurance related M&A due diligence and related products including representations and warranties liability.  Prior to joining Alliant in 2008, Fred worked for HRH (now known as Willis HRH) for 6 years as an executive vice president and managing director of HRH’s Executive Risk national practice, and for 11 years as CEO of the Willis Executive Risk practice. He has 30 years in the brokerage business along with 3 years as a insurance underwriter of financial lines products.","Fred’s technical product knowledge and insurance market relationships provide clients with targeted consultancy, placement and servicing in executive risk.  Fred has been widely quoted in national publications and has appeared on CNN as a D&O insurance expert.  Fred is a member of the Board of Directors of the National Kidney Foundation."]},{name:"Susanne Murray, Esq.",phone:"212-895-0260",email:"smurray@alliant.com",title:"Executive Vice President",position:"Executive Risk",location:"New York, NY",image:"./images/susannemurray.png",bio:["Susanne is an Executive Vice President in the Executive Risk Group focusing on executive risk liability exposures and insurance solutions.  Her specialization includes directors and officers liability, employment practices liability, fiduciary liability, general partnership liability, crime, and numerous professional liability products and exposures. Prior to joining Alliant in 2008, Susanne worked for HRH (now known as Willis HRH) for 6 years as an executive vice president and managing director of D&O, and for 7 years as the claims director and D&O practice leader for Willis.  Susanne began her career working for D’Amato & Lynch, a well-known NY law firm where she specialized in insurance law.","Susanne’s legal background, technical product knowledge and insurance market relationships provide clients with targeted consultancy, placement and servicing in executive risk.  She has been recognized as a “Woman to Watch” by Business Insurance and has appeared on Insurance Journal TV.  She has been widely quoted in numerous national publications and is a frequent speaker at legal and risk management conferences such as the American Corporate Counsel Association, American Conference Institute, Annual Securities Class Action Litigation Conference, Practicing Law Institute, Risk and Insurance Management Society (RIMS) conferences and Professional Liability Underwriters Society (PLUS) D&O conferences."]},{name:"Kamy Vacca",phone:"212-895-0263",email:"kvacca@alliant.com",title:"Senior Vice President",position:"Executive Risk Broker",location:"New York, NY",image:"./images/kamyvacca.png",bio:["Kamy is a Senior Vice President in the Executive Risk Group.  As an executive risk broker, Kamy provides comprehensive stewardship and renewal strategy presentations, policy coverage analysis and handles all aspects of policy negotiations, placement and servicing in the areas of Commercial and Financial Institutions Directors and Officers Liability, Professional Liability, Employment Practices, Fiduciary Liability and Commercial Crime (Fidelity).  Kamy works with the Executive Risk claims attorneys in crafting insurance products to match client’s needs.","Prior to joining Alliant in 2008, Kamy was a Senior Vice President at HRH (now known as Willis HRH) for 6 years in the National Executive Risk Practice, and a Vice President in the Willis Executive Risk Solutions Group for 5 years prior to HRH. Kamy began her career at Johnson and Higgins.  Kamy was recognized as an “Elite Woman In Insurance” in 2017."]},{name:"James Tolfree",phone:"212-895-0264",email:"jtolfree@alliant.com",title:"Senior Vice President",position:"Executive Risk Broker",location:"New York, NY",image:"./images/jamestolfree.png",bio:["James is a Senior Vice President in the Executive Risk Group at Alliant Insurance Services, Inc. As an Executive Risk Broker, James provides comprehensive stewardship and renewal strategy presentations, policy coverage analysis and handles all aspects of policy negotiations, placement and servicing in the areas of Directors and Officers Liability, Financial Institutions Professional Liability, Errors and Omissions, Cyber and Privacy Liability, Broker / Dealer, Employment Practices, Fiduciary Liability and Fidelity. James works in close connection with claims advocacy and has extensive insurance carrier relationships.","Prior to joining Alliant Insurance Services, Inc. James was Vice President at HRH in the National Executive Risk Practice where he serviced a wide range of clients and industry groups and placed a broad spectrum of Management Liability products. James also worked in Executive Risk at Marsh USA, Inc. in the Private Equity and Mergers and Acquisitions practice for 5 years. There he worked with some of the largest private equity firms building portfolio company programs and negotiating tail policies upon acquisitions being completed. Before becoming a Broker, James was a Management Liability and Financial Institution Underwriter at AIG and Travelers. In having both a broking and underwriting background, he is in a strong position to negotiate on his clients behalf with carriers by addressing their exposure concerns.","James is a graduate of Marist College with a BA in Political Science and holds a New York State Brokers License."]},{name:"Steve Levine, Esq.",phone:"212-895-0262",email:"slevine@alliant.com",title:"Senior Vice President",position:"Claims Attorney",location:"New York, NY",image:"./images/stevelevine.png",bio:["Steve is Senior Vice President, Claims Attorney in the Executive Risk Group, and specializes in Executive Risk liability exposures and provides claim advocacy for Alliant clientele in the areas of Directors and Officers Liability, Financial Institutions Professional Liability, Employment Practice Liability, Fiduciary Liability and Fidelity coverages.  He also drafts language and assists brokers on policy wording and enhancements.","Prior to joining Alliant, Steve served as an Assistant Vice-President for Chubb & Son in their Specialty Claim department.  Prior to Chubb, he worked for AIG Domestic Claims as a Complex Claims Director for AIG’s National D&O Accounts.  He also has an extensive background as a litigator and trial attorney whose practice in south Florida focused on complex commercial litigation and Plaintiffs’ personal injury litigation."]},{name:"Jolie Small",phone:"212-895-0277",email:"Jolie.small@alliant.com",title:"Vice President",position:"Executive Risk Broker",location:"New York, NY",image:"./images/joliesmall.png",bio:["Jolie is a Vice President in the Executive Risk Group at Alliant Insurance Services, Inc.  As an Executive Risk Broker, Jolie provides stewardship and renewal strategy presentations, policy coverage analysis and is responsible for designing, negotiating and placing Commercial and Financial Institutions Directors and Officers Liability, Professional Liability, Employment Practices, Fiduciary Liability and Commercial Crime (Fidelity). In her role Jolie analyzes exposures through pre-underwriting, benchmarking and market trends in order to formulate a tailored brokering strategy. Jolie works closely with Alliant’s claims advocacy team and has senior level market relationships.","Prior to Alliant Jolie was Assistant Vice President with Aon Risk Services in the Financial Services Group for 3 years and was with Beecher Carlson for 5 years prior to that."]},{name:"Cara Murray",phone:"212-895-0257",email:"cmurray@alliant.com",title:"Assistant Vice President",position:"Executive Risk Broker",location:"New York, NY",image:"./images/caramurray.png",bio:["Cara Mast Murray is an Assistant Vice President and Cyber Specialist in the Executive Risk Group at Alliant Insurance Services, Inc.  As an Executive Risk Broker, Cara provides stewardship and renewal strategy presentations, policy coverage analysis and is responsible for designing, negotiating and placing Commercial and Financial Institutions Directors and Officers Liability, Professional Liability, Employment Practices, Fiduciary Liability and Commercial Crime (Fidelity). Cara also focuses on Cyber and Privacy liability and Technology Errors and Omissions products and exposures.  Cara maintains comprehensive analytic comparisons of policies currently in the market; advises on developing cyber and privacy threats, exposures, and regulation; and specializes in policy wording and enhancements.","Cara is a graduate of Boston College with a BA in International Studies, with concentrated study of cyber law and cyber security that culminated in a senior honors thesis on the regulation of cyber warfare under international law."]},{name:"Michael Blake",phone:"212-895-0288",email:"Michael.blake@alliant.com",title:"Assistant Vice President",position:"Executive Risk Broker",location:"New York, NY",image:"./images/michaelblake.png",bio:["Michael Blake is an Assistant Vice President of Alliant Insurance Services focusing on Executive Risk liability exposures and solutions.  As an Executive Risk Broker, Michael provides stewardship and renewal strategy presentations, policy coverage analysis and is responsible for designing, negotiating and placing Commercial and Financial Institutions Directors and Officers Liability, Professional Liability, Employment Practices, Fiduciary Liability and Commercial Crime (Fidelity). Michael’s specialization includes Errors and Omissions Liability including; Miscellaneous Professional Liability, Lawyers Professional Liability, Media Liability, Cyber Liability as well as other areas of professional liability.  Michael’s experience extends to both public and private entities, regardless in revenue size from middle market to Fortune 100.","Prior to joining Alliant Insurance Services, Inc. Michael was a Senior Underwriter at CHUBB, Inc. (formally ACE GROUP) in the Professional Risk practice for 9 years.  Michael was responsible for new business production across various E&O products, as well as actively managing an annual renewal book of $10M.","Michael is a graduate of Marist College, with a BA in Finance and International Business."]}],articles=[{id:1,date:"October 1st, 2017",title:"Fines, Penalties and Staying Out of Jail",route:"fines-penaltiies-and-staying-out-of-jail",authors:["Susanne Murray, Esq.","Fred T. Podolsky"],blurb:"While D&O insurance can’t actually help with jail time, such policies may provide a degree of fines or penalties coverage for directors and officers.  This topic was discussed in an article previously published in Advisen’s Management Liability Journal and can be accessed here.",text:["While D&O insurance can’t actually help with jail time, such policies may provide a degree of fines or penalties coverage for directors and officers.  D&O policies generally define Covered Loss as “damages, judgments, settlements and defense costs” with various other costs and expenses thrown in, such as pre- and post-judgment interest, punitive damages and plaintiff’s attorneys fees. The availability of coverage for different types of financial loss has evolved over time, with the most recent discussion surrounding fines and penalties.","The first step in this covered loss evolution was to extend coverage for defense costs incurred in claims seeking fines and penalties, though the fines and penalties were not themselves covered. In most policies, this still needs to be requested in the negotiations process.  Foreign Corrupt Practices Act fines and penalties are also part of the D&O coverage discussion, and many insurers have extended coverage to certain types of FCPA fines and penalties, though coverage is not routinely extended to cover all fines and penalties under all sections of the FCPA.  In some instances coverage is now available for a broader range of fines and penalties, subject only to insurability.  The scope of covered loss continues to expand and is well worth attention."],tags:["D&O","FCPA","Fines and Penalties"]},{id:2,date:"October 2nd, 2017",title:"Emerging technologies provide new opportunities to do business but also open the door to new risk exposures",route:"emerging-technologies-new-opportunities-and-risk-exposures",authors:["Cara Murray"],blurb:[t("span")("New Opportunities that result from  technological advances also come with new risks. Modern business is conducted in a highly networked, data-rich environment. Dynamic and developing technologies are currently and continually being leveraged for increased operational capabilities. This opportunity and innovation does not come without challenges. In any business endeavor, the other side of opportunity is risk, and this is no less true of running a business with technological enhancements. A bigger cyber presence means more cyber exposure.  The first article in our series about Cyber, Privacy and Social Media can be accessed "),t("a",{href:"http://www.alliant.com/Risk-Solutions/Documents/Cyber_Realities_No_1.pdf"})("here"),t("span")(".  In this article we focus on Cyber Realities: Where We are Now.")],text:["New Opportunities that result from  technological advances also come with new risks. Modern business is conducted in a highly networked, data-rich environment. Dynamic and developing technologies are currently and continually being leveraged for increased operational capabilities. This opportunity and innovation does not come without challenges. In any business endeavor, the other side of opportunity is risk, and this is no less true of running a business with technological enhancements. A bigger cyber presence means more cyber exposure.","Current trends in business technology that allow for innovation but also open the door to increased risk include:","Bring your own device","Remote access","Cloud storage","Digitized records","Web presence","Clearly, the goal for modern business when it comes to technology is to balance the opportunity with the exposure to optimize the benefits of continuing advances. Having an understanding of the complexities of the dynamic modern business environment is the first step in finding ways to mitigate barriers to further success."],tags:["Cyber","Privacy"]},{id:3,date:"October 3rd, 2017",title:"D&O Liability Exposure and Insurance Trends and How to Manage Them",route:"do-liability-exposure-and-insurance-trends",authors:["Fred T. Podolsky"],blurb:"D&O exposures come from claims “fads” like IPO Laddering or credit crisis claims or disclosure only settlements driven by the plaintiff’s bar, but these fads are usually short lived. Some liability trends, however, such as securities class actions and whistleblower claims, appear to be a continuing and growing source of liability and with no end in sight.",text:["D&O exposures come from claims “fads” like IPO Laddering or credit crisis claims or disclosure only settlements driven by the plaintiff’s bar, but these fads are usually short lived. Some liability trends, however, such as securities class actions and whistleblower claims, appear to be a continuing and growing source of liability and with no end in sight.  Below is a sampling of current D&O liability triggers:",t("strong")("Shareholder Merger Objection Claims"),"All types of companies, in all industry sectors in the United States and across the globe, engage in substantial mergers and acquisitions activity. For public companies, this is an invitation for a lawsuit, and the invitation is almost always accepted by shareholders who object to the deal, sometimes on both sides of the transaction.",t("strong")("Jumpstart Our Business Startups Act (JOBS Act)"),"The JOBS Act was passed to make it easier for smaller businesses to access the capital markets through a streamlined IPO process. Emerging growth companies with less than $1 billion in sales are eligible for a JOBS Act filing and can take advantage of the reduced filing requirements, including relief from certain disclosure and accounting standards for a period of time.",t("strong")("SEC Enforcement Activity"),"While securities class actions continue to represent the highest financial risk exposure to public companies and their directors and officers, the threat of SEC enforcement activity is on the rise. The costs of resolving such enforcement actions can be substantial. According to a report entitled “SEC Enforcement Activity against Public Companies and Their Subsidiaries Midyear FY 2016,” one trend to watch is the increasing use by the SEC of administrative proceedings rather than civil proceedings to bring enforcement actions.",t("strong")("Sarbanes-Oxley Act of 2002 (SOX) and Claw-back Provisions"),"To ensure the accountability of the CEO and the CFO, and to align their financial interests with accurate reporting, the Act includes a payback, or claw-back, provision requiring that, in the event of a financial restatement due to misconduct of the issuer, the CEO and CFO would be required to repay any bonuses, incentives, and equity-based compensation and any profits from stock sales within the immediately prior 12 months."],tags:["D&O","Securities","Sarbanes-Oxley","FCPA"]},{id:4,date:"October 4th, 2017",title:"E&O Primer: Errors and omissions in delivering products or services often lead to claims",route:"eo-primer-errors-and-omissions",authors:["Michael Blake"],blurb:"Omissions, misunderstandings, misinterpretations, delays. They’re a part of every business. In addition to causing lost productivity and frustration, these issues can also result in costly claims. E&O, also known as professional liability insurance, can protect your business from liability stemming from providing or failing to provide professional services.  In the attached E&O Primer here we point out some tips for dealing with this exposure.",text:["Omissions, misunderstandings, misinterpretations, delays. They’re a part of every business. In addition to causing lost productivity and frustration, these issues can also result in costly claims. E&O, also known as professional liability insurance, can protect your business from liability stemming from providing or failing to provide professional services. As essential as this coverage has become, it is still under-utilized. Why? One reason is a general lack of clarity surrounding the coverage. Here are some guidelines to point you in the right direction when you’re considering coverage:","Know what you are getting – what are you asking for","Size up your exposure – what do you need","Know your coverage – what are you getting","Customize coverage for your industry – does this cover your larger industry exposures","Cover your back – make sure that the insurance you end up with covers your exposures"],tags:["E&O","Professional Liability"]}].sort(function(e,i){return i.id-e.id}),tags=["Claw-back","Cyber","D&O","E&O","FCPA","Fines and Penalties","IPO","JOBS Act","Privacy","Professional Liability","Sarbanes-Oxley","Securities"];routes["/admin/"]={dom:t("#admin",{className:"page"})([t("h1")("Admin Login"),t("input",{id:"admin-user",type:"text",placeholder:"user"})(),t("input",{id:"admin-pass",type:"password",placeholder:"password"})(),t("button")("Log In")])},routes["/contributors/"]={dom:t("#contributors",{className:"page"})([t("h1")("Our Contributors")].concat(contributors.map(function(e,i){return t("div",{className:"member member-"+(i+1),onclick:openMember})([t("img",{className:"member-image",src:e.image})(),t(".member-info")([t(".member-name")(e.name),t(".member-title")(e.title),t(".member-email")(e.email),t(".member-phone")(e.phone)]),t(".member-contact")([t(".member-position")(e.position),t(".member-location")(e.location)]),t(".member-bio")(e.bio.map(function(e){return t("p")(e)}))])})))},articles.forEach(function(e){routes["/articles/"+e.route+"/"]={dom:t("#article",{className:"page"})(createArticle(1)(e))}}),routes["/"]={dom:t("#home",{className:"page"})(articles.map(createArticle()))},routes["/products/"]={dom:t("#products",{className:"page"})([t("h1")("Products and Services"),t(".opener")("The Executive Risk Group of Alliant Insurance Services is a full service, product driven specialty group that delivers industry leading liability and insurance expertise combined with powerful market leverage. The result is the best possible coverage for our clients at the best possible price."),t(".list-title")("OUR TEAM APPROACH"),t("ul")([t("li")("Our proven team approach to risk management includes:"),t("li")("Top brokers with a deep understanding of the executive risk insurance marketplace and exceptional insurer relationships"),t("li")("Technical insurance experts with unsurpassed product knowledge"),t("li")("Legal liability specialists who stay  at the forefront of management liability issues"),t("li")("Claims attorneys who advise our clients before and after claims")]),t(".list-title")("OUR SERVICE DELIVERABLES"),t("ul")([t("li")("Exposure Analysis"),t("li")("Performance analytics (coverage grading, carrier performance, customer satisfaction)"),t("li")("Due Diligence Drill (D3) for mergers, acquisitions and divestitures"),t("li")("Claims Dashboard"),t("li")("Time Sensitive results")]),t(".list-title")("OUR PRODUCT-FOCUSED SPECIALTY PRACTICE"),t("ul")([t("li")("Directors and officers liability"),t("li")("General partnership liability"),t("li")("Employment practices liability"),t("li")("Network Security and Privacy (Cyber) liability"),t("li")("Miscellaneous professional liability"),t("li")("Errors and Omissions"),t("li")("Financial Institutions Fidelity"),t("li")("Commercial Crime"),t("li")("Fiduciary (ERISA) liability"),t("li")("Kidnap, Ransom and Extortion")])])},routes["/inquiry/"]={dom:t("#inquiry",{className:"page"})([t("h1")("For Business Inquiries"),t(".inquiry-form")([t("label")("Name *"),t("input",{className:"inquiry-name",type:"text",required:!0})(),t("label")("Company"),t("input",{className:"inquiry-company",type:"text"})(),t("label")("Email *"),t("input",{className:"inquiry-email",type:"email",required:!0})(),t("label")("Phone"),t("input",{className:"inquiry-phone",type:"tel"})(),t("label")("Message *"),t("textarea",{className:"inquiry-message",placeholder:"Write your message here..."})(),t("button")("Send Message")])])},tags.forEach(function(e){var i=e.toLowerCase().split(" ").join("-"),a=articles.filter(function(i){return i.tags.indexOf(e)>-1}).map(createArticle());a[0]||(a=[t(".no-match")("No articles matched.")]),el(".tags")[0].appendChild(t("a",{href:"/tags/"+i+"/",onclick:router})(e)),routes["/tags/"+i+"/"]={dom:t("#tag",{className:"page"})([t("h1")("Tag: "+e)].concat(a))}}),router(),window.addEventListener("popstate",function(e){return router()}),setTimeout(function(){return document.body.classList.add("font-loaded")},300);