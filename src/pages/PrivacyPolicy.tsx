import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import SEO from '../components/Seo'
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <SEO title="Privacy Policy" />
    <Helmet>
      <title>Privacy Policy</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>Privacy Policy</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">

            <p><span>Privacy Policy of The Curvature</span></p>
    <p><span>Owner contact email: info@thecurvature.com</span></p>
    <p><span><strong>Types of Data collected</strong></span></p>
    <p><span>Among the types of Personal Data that this Application collects, by itself or through third parties, there are: Cookies; Usage Data; company name; email address.</span></p>
    <p><span>Complete details on each type of Personal Data collected are provided in the dedicated sections of this privacy policy or by specific explanation texts displayed prior to the Data collection.</span></p>
    <p><span>Personal Data may be freely provided by the User, or, in case of Usage Data, collected automatically when using this Application. </span></p>
    <p><span>Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this Data may make it impossible for this Application to provide its services. In cases where this Application specifically states that some Data is not mandatory, Users are free not to communicate this Data without consequences to the availability or the functioning of the Service. </span></p>
    <p><span>Users who are uncertain about which Personal Data is mandatory are welcome to contact the Owner. </span></p>
    <p><span>Any use of Cookies – or of other tracking tools – by this Application or by the owners of third-party services used by this Application serves the purpose of providing the Service required by the User, in addition to any other purposes described in the present document and in the Cookie Policy, if available. </span></p>
    <p><span>Users are responsible for any third-party Personal Data obtained, published or shared through this Application and confirm that they have the third party's consent to provide the Data to the Owner. </span></p>
    <p><span><strong>Mode and place of processing the Data </strong></span></p>
    <p><span><strong>Methods of processing </strong></span></p>
    <p><span>The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of the Data. </span></p>
    <p><span>The Data processing is carried out using computers and/or IT enabled tools, following organizational procedures and modes strictly related to the purposes indicated. In addition to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with the operation of this Application (administration, sales, marketing, legal, system administration) or external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated list of these parties may be requested from the Owner at any time. </span></p>
  </div>
  <div>
    <p><span><strong>Legal basis of processing </strong></span></p>
    <p><span>The Owner may process Personal Data relating to Users if one of the following applies: </span></p>
    <ul>
      <li><span>Users have given their consent for one or more specific purposes. Note: Under some legislations the Owner may be allowed to process Personal Data until the User objects to such processing (“opt-out”), without having to rely on consent or any other of the following legal bases. This, however, does not apply, whenever the processing of Personal Data is subject to European data protection law; </span></li>
      <li><span>provision of Data is necessary for the performance of an agreement with the User and/or for any pre-contractual obligations thereof; </span></li>
      <li><span>processing is necessary for compliance with a legal obligation to which the Owner is subject; </span></li>
      <li><span>processing is related to a task that is carried out in the public interest or in the exercise of official authority vested in the Owner; </span></li>
      <li><span>processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third party. </span></li>
    </ul>
    <p><span>In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing, and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a requirement necessary to enter into a contract. </span></p>
    <p><span><strong>Place </strong></span></p>
    <p><span>The Data is processed at the Owner's operating offices and in any other places where the parties involved in the processing are located. </span></p>
    <p><span>Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own. To find out more about the place of processing of such transferred Data, Users can check the section containing details about the processing of Personal Data. </span></p>
    <p><span>Users are also entitled to learn about the legal basis of Data transfers to a country outside the European Union or to any international organization governed by public international law or set up by two or more countries, such as the UN, and about the security measures taken by the Owner to safeguard their Data. </span> </p>
    <p><span>If any such transfer takes place, Users can find out more by checking the relevant sections of this document or inquire with the Owner using the information provided in the contact section. </span></p>
    <p><span><strong>Retention time </strong></span></p>
  </div>
  <div>
    <p><span>Personal Data shall be processed and stored for as long as required by the purpose they have been collected for. </span></p>
    <p><span>Therefore: </span></p>
    <ul>
      <li><span>Personal Data collected for purposes related to the performance of a contract between the Owner and the User shall be retained until such contract has been fully performed. </span></li>
      <li><span>Personal Data collected for the purposes of the Owner’s legitimate interests shall be retained as long as needed to fulfill such purposes. Users may find specific information regarding the legitimate interests pursued by the Owner within the relevant sections of this document or by contacting the Owner. </span></li>
      <li><span>The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain Personal Data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority. </span></li>
    </ul>
    <p><span>Once the retention period expires, Personal Data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period. </span></p>
    <p><span><strong>The purposes of processing </strong></span></p>
    <p><span>The Data concerning the User is collected to allow the Owner to provide its Services, as well as for the following purposes: Analytics, Hosting and backend infrastructure and Interaction with data collection platforms and other third parties. </span></p>
    <p><span>Users can find further detailed information about such purposes of processing and about the specific Personal Data used for each purpose in the respective sections of this document. </span></p>
    <p><span><strong>Detailed information on the processing of Personal Data </strong></span></p>
    <p><span>Personal Data is collected for the following purposes and using the following services: </span></p>
  </div>
  <div>
    <p><span><strong>Analytics</strong></span><span><strong> </strong></span></p>
    <p><span>The services contained in this section enable the Owner to monitor and analyze web traffic and can be used to keep track of User behavior.</span></p>
    <p><span><strong>Google Analytics (Google LLC)</strong></span><strong><span> </span></strong></p>
    <p><span>Google Analytics is a web analysis service provided by Google LLC (“Google”). Google utilizes the Data collected to track and examine the use of this Application, to prepare reports on its activities and share them with other Google services.</span></p>
    <p><span>Google may use the Data collected to contextualize and personalize the ads of its own advertising network.</span></p>
    <p><span>Personal Data collected: Cookies; Usage Data.</span></p>
    <p><span>Place of processing: United States – Privacy Policy – Opt Out. Privacy Shield participant. </span></p>
    <p><span><strong>Hosting and backend infrastructure </strong></span></p>
    <p><span> </span><span>This type of service has the purpose of hosting Data and files that enable this Application to run and be distributed as well as to provide a ready-made infrastructure to run specific features or parts of this Application.</span></p>
    <p><span>Some services among those listed below, if any, may work through geographically distributed servers, making it difficult to determine the actual location where the Personal Data are stored. </span></p>
    <p><span><strong>Netlify (Netlify, Inc.) </strong></span></p>
    <p><span> </span><span>Netlify is a hosting service provided by Netlify, Inc. </span><span>Personal Data collected: company name.</span></p>
    <p><span> </span><span>Place of processing: United States – Privacy Policy. </span></p>
    <p><span>Interaction with data collection platforms and other third parties </span></p>
    <p><span> </span><span>This type of service allows Users to interact with data collection platforms or other services directly from the pages of this Application for the purpose of saving and reusing data. </span></p>
    <p><span>If one of these services is installed, it may collect browsing and Usage Data in the pages where it is installed, even if the Users do not actively use the service. </span></p>
    <p><span><strong>Amazon Associates Program Disclosure</strong></span><strong><span> </span></strong></p>

    <p><span>thecurvature.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.</span></p>
    
    <p><span><strong>Mailchimp widget (The Rocket Science Group LLC)</strong></span><strong><span> </span></strong></p>
    <p><span>The Mailchimp widget is a service for interacting with the Mailchimp email address management and message sending service provided by The Rocket Science Group LLC. </span></p>
    <p><span> </span><span>Personal Data collected: email address. </span></p>
    <p><span> </span><span>Place of processing: United States – Privacy Policy. Privacy Shield participant. </span></p>
  </div>
  <div>
    <br/>
  </div>
  <div>
    <p><span><strong>The rights of Users </strong></span></p>
    <p><span>Users may exercise certain rights regarding their Data processed by the Owner. </span></p>
    <p><span>In particular, Users have the right to do the following: </span></p>
    <ul>
      <li><span>Withdraw their consent at any time. Users have the right to withdraw consent where they have previously given their consent to the processing of their Personal Data. </span></li>
      <li><span>Object to processing of their Data. Users have the right to object to the processing of their Data if the processing is carried out on a legal basis other than consent. Further details are provided in the dedicated section below. </span></li>
      <li><span>Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing. </span></li>
      <li><span>Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to be updated or corrected. </span></li>
      <li><span>Restrict the processing of their Data. Users have the right, under certain circumstances, to restrict the processing of their Data. In this case, the Owner will not process their Data for any purpose other than storing it. </span></li>
      <li><span>Have their Personal Data deleted or otherwise removed. Users have the right, under certain circumstances, to obtain the erasure of their Data from the Owner. </span></li>
      <li><span>Receive their Data and have it transferred to another controller. Users have the right to receive their Data in a structured, commonly used and machine readable format and, if technically feasible, to have it transmitted to another controller without any hindrance. This provision is applicable provided that the Data is processed by automated means and that the processing is based on the User's consent, on a contract which the User is part of or on pre-contractual obligations thereof. </span></li>
      <li><span>Lodge a complaint. Users have the right to bring a claim before their competent data protection authority. </span></li>
    </ul>
    <p><span><strong>Details about the right to object to processing </strong></span></p>
    <p><span>Where Personal Data is processed for a public interest, in the exercise of an official authority vested in the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such processing by providing a ground related to their particular situation to justify the objection. </span></p>
  </div>
  <div>
    <br/>
  </div>
  <div>
    <p><span>Users must know that, however, should their Personal Data be processed for direct marketing purposes, they can object to that processing at any time without providing any justification. To learn, whether the Owner is processing Personal Data for direct marketing purposes, Users may refer to the relevant sections of this document. </span></p>
    <p><span><strong>How to exercise these rights </strong></span></p>
    <p><span>Any requests to exercise User rights can be directed to the Owner through the contact details provided in this document. These requests can be exercised free of charge and will be addressed by the Owner as early as possible and always within one month. </span></p>
    <p><span><strong>Additional information about Data collection and processing </strong></span></p>
    <p><span><strong>Legal action </strong></span></p>
    <p><span>The User's Personal Data may be used for legal purposes by the Owner in Court or in the stages leading to possible legal action arising from improper use of this Application or the related Services. </span></p>
    <p><span>The User declares to be aware that the Owner may be required to reveal personal data upon request of public authorities. </span></p>
    <p><span><strong>Additional information about User's Personal Data </strong></span></p>
    <p><span>In addition to the information contained in this privacy policy, this Application may provide the User with additional and contextual information concerning particular Services or the collection and processing of Personal Data upon request. </span></p>
    <p><span><strong>System logs and maintenance </strong></span></p>
    <p><span>For operation and maintenance purposes, this Application and any third-party services may collect files that record interaction with this Application (System logs) use other Personal Data (such as the IP Address) for this purpose. </span></p>
    <p><span><strong>Information not contained in this policy </strong></span></p>
    <p><span>More details concerning the collection or processing of Personal Data may be requested from the Owner at any time. Please see the contact information at the beginning of this document. </span></p>
    <p><span><strong>How “Do Not Track” requests are handled </strong></span></p>
    <p><span>This Website does not support “Do Not Track” requests. </span></p>
    <p><span>To determine whether any of the third-party services it uses honor the “Do Not Track” requests, please read their privacy policies. </span></p>
  </div>
  <div>
    <br/>
  </div>
  <div>
    <p><span><strong>Changes to this privacy policy </strong></span></p>
    <p><span>The Owner reserves the right to make changes to this privacy policy at any time by giving notice to its Users on this page and possibly within this Application and/or - as far as technically and legally feasible - sending a notice to Users via any contact information available to the Owner. It is strongly recommended to check this page often, referring to the date of the last modification listed at the bottom. </span></p>
    <p><span>Should the changes affect processing activities performed on the basis of the User’s consent, the Owner shall collect new consent from the User, where required. </span></p>
    <p><span><strong>Definitions and legal references </strong></span></p>
    <p><span><strong>Personal Data (or Data) </strong></span></p>
    <p><span>Any information that directly, indirectly, or in connection with other information — including a personal identification number — allows for the identification or identifiability of a natural person. </span></p>
    <p><span><strong>Usage Data </strong></span></p>
    <p><span>Information collected automatically through this Application (or third-party services employed in this Application), which can include: the IP addresses or domain names of the computers utilized by the Users who use this Application, the URI addresses (Uniform Resource Identifier), the time of the request, the method utilized to submit the request to the server, the size of the file received in response, the numerical code indicating the status of the server's answer (successful outcome, error, etc.), the country of origin, the features of the browser and the operating system utilized by the User, the various time details per visit (e.g., the time spent on each page within the Application) and the details about the path followed within the Application with special reference to the sequence of pages visited, and other parameters about the device operating system and/or the User's IT environment. </span></p>
    <p><span><strong>User </strong></span></p>
    <p><span>The individual using this Application who, unless otherwise specified, coincides with the Data Subject. </span></p>
    <p><span><strong>Data Subject </strong></span></p>
    <p><span>The natural person to whom the Personal Data refers. </span></p>
    <p><span><strong>Data Processor (or Data Supervisor) </strong></span></p>
    <p><span>The natural or legal person, public authority, agency or other body which processes Personal Data on behalf of the Controller, as described in this privacy policy. </span></p>
  </div>
  <div>
    <br/>
  </div>
  <div>
    <p><span><strong>Data Controller (or Owner) </strong></span></p>
    <p><span>The natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of Personal Data, including the security measures concerning the operation and use of this Application. The Data Controller, unless otherwise specified, is the Owner of this Application. </span></p>
    <p><span><strong>This website</strong></span></p>
    <p><span>The means by which the Personal Data of the User is collected and processed. </span></p>
    <p><span><strong>Service </strong></span></p>
    <p><span>The service provided by this Application as described in the relative terms (if available) and on this site/application. </span></p>
    <p><span><strong>European Union (or EU) </strong></span></p>
    <p><span>Unless otherwise specified, all references made within this document to the European Union include all current member states to the European Union and the European Economic Area. </span></p>
    <p><span><strong>Cookies </strong></span></p>
    <p><span>Small sets of data stored in the User's device. </span></p>
    <p><span><strong>Legal information </strong></span></p>
    <p><span>This privacy statement has been prepared based on provisions of multiple legislations, including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation). </span></p>
    <p><span> </span></p>
    <p><span>This privacy policy relates solely to this Application, if not stated otherwise within this document. </span></p>
    <p><span>Latest update: December 22, 2019 </span></p>
              
              
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
