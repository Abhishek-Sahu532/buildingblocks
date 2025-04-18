import { Typography } from '@material-tailwind/react';
import { Helmet } from 'react-helmet';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
          <div className="flex flex-col items-start justify-start w-full pl-[120px] pr-14">
            <div className="flex flex-col items-center justify-start w-full gap-[60px] mx-auto max-w-[1054px]">
              <div className="flex flex-col items-center justify-start w-full gap-10">
                <div className="flex flex-col items-start justify-start w-full gap-[5px]">
                  <Typography size="3xl" variant="h1" className="mt-1.5 tracking-[-0.92px]">
                    Privacy Policy
                  </Typography>
                  <Typography variant="paragraph">Last updated: January 2020</Typography>
                </div>
                <Typography variant="paragraph">
                  Hi, welcome to our privacy policy which applies to our customers. This policy sets out how if you are
                  a Relasto.com user or visitor to our site, we treat your personal information.
                  <br />
                  Last updated on March 01, 2020.
                </Typography>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-[39px]">
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-5">
                  <Typography size="lg" variant="h2" className="tracking-[-0.48px]">
                    1. The type of personal information we collect
                  </Typography>
                  <Typography variant="paragraph">
                    Hi, welcome to our privacy policy which applies to our customers. This policy sets out how if you
                    are a Relasto.com user or visitor to our site, we treat your personal information.
                    <br />
                    Last updated on March 01, 2020.
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-5">
                  <Typography size="lg" variant="h3" className="tracking-[-0.48px]">
                    2. Cookies and web analytics
                  </Typography>
                  <Typography variant="paragraph">
                    We use cookies to recognize and monitor users, their on-site behavior, and their preferences for
                    accessing their website. These cookies include the IP and time of visits by visitors. Visitors to
                    Relasto that do not want cookies put on their browsers should configure their browsers to reject
                    cookies before using the Relasto website.
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-5">
                  <Typography size="lg" variant="h4" className="tracking-[-0.48px]">
                    3. When do we need to update this policy?
                  </Typography>
                  <Typography variant="paragraph">
                    We will need to update this policy from time to time to ensure that it remains up-to-date with the
                    latest legal requirements and any improvements to our privacy management practices.
                    <br />
                    When we change the policy, we will make sure that we inform you, if any, of such changes. A copy of
                    this policy’s latest version will always be available at this page.
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-7">
                  <Typography size="lg" variant="h5" className="tracking-[-0.48px]">
                    4. Registration
                  </Typography>
                  <Typography variant="paragraph">
                    To use our Service you will need to create an account and complete the registration process at
                    https://Relasto.com/signup (Registration).
                    <br />
                    At Registration, you will select logon credentials for each user of the Service, which may be an
                    employee of the Subscriber or other individuals authorised by the Subscriber to use the Service
                    (Authorised User). Logon details should only be used by the Authorised User to whom they are
                    assigned and cannot be shared with any third parties (including another Authorised User). You are
                    solely responsible for the confidentiality and use of all logon details for your account and those
                    assigned to Authorised Users, as well as for any use or misuse of the Service using Subscriber’s or
                    any Authorised Users’ logon details. You shall notify us immediately if you become aware of any
                    loss, theft or unauthorised use of any logon details, and we reserve the right to delete or change
                    them at any time and for any reason.
                    <br />
                    You warrant and represent to us that the details you provide to us during Registration are accurate,
                    complete and up-to-date. We will hold and treat such information in accordance with the terms of our
                    Privacy Policy.
                    <br />
                    If you or your Participants use a mobile telephone to access our Service, we may need to send SMS
                    messages. You may opt out of this service by replying STOP to the SMS message or by contacting us at
                    support@Relasto.com.
                  </Typography>
                </div>
                <div className="flex flex-col items-start justify-start w-full pt-0.5 gap-5">
                  <Typography size="lg" variant="h6" className="tracking-[-0.48px]">
                    5. Marketing Choices regarding your personal data
                  </Typography>
                  <Typography variant="paragraph">
                    Where we have your permission to do so (e.g. if you subscribed to one of our email lists or
                    indicated that you are interested in receiving deals or information from us), we will send you email
                    marketing messages about products and services which we feel may be of interest to you. You can
                    ‘opt-out’ of such communications if you would prefer not to receive them in the future by using the
                    “unsubscribe” facility provided in the communication itself.
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
