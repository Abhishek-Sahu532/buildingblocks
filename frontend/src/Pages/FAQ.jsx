import React, {useState} from "react";
import { Helmet } from "react-helmet";
import { Text } from "../Components/Text";
import { Heading } from "../Components/Heading";
import { Input } from "../Components/Input";
import { Img } from "../Components/Img";


export default function FAQPage() {
  const [searchBarValue6, setSearchBarValue6] = useState("");

  return (
    <>
      <Helmet>
        <title>FAQ</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-6 p-4">
      <div className="flex flex-col items-center justify-start w-full max-w-[1200px] gap-6">
        <Heading size="3xl" as="h1" className="tracking-[-0.92px] text-center">
          Search Property / Anything
        </Heading>
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <Input
            name="search"
            placeholder="Search Property / Anything"
            value={searchBarValue6}
            onChange={(e) => setSearchBarValue6(e)}
            prefix={<Img src="images/img_icon_24px_search_gray_600_02.svg" alt="icon / 24px / search" className="cursor-pointer" />}
            suffix={searchBarValue6?.length > 0 && (
              <Img
                src="images/img_icon_24px_filter.svg"
                alt="icon / 24px / filter"
                onClick={() => setSearchBarValue6("")}
                className="cursor-pointer"
              />
            )}
            className="w-full px-3 py-2 rounded border border-solid border-blue_gray-100_01 font-semibold"
          />
          <div className="flex flex-col items-center justify-start w-full gap-6">
            <div className="flex flex-col items-start justify-start w-full gap-6 p-4 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
              <div className="flex flex-col items-start justify-start gap-6">
                <Heading size="md" as="h2" className="tracking-[-0.40px]">
                  You're viewing sample results.
                </Heading>
                <div className="flex flex-col items-start justify-start gap-2">
                  <a href="https://relasto.com" target="_blank" rel="noreferrer">
                    <Heading as="h3" className="text-gray-600_02">
                      https://relasto.com
                    </Heading>
                  </a>
                  <Text size="xs" as="p">
                    Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam
                    autem suscipit culpa perspiciatis. Exercitationem dolorum dolore
                    perferendis praesen…
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-6 p-4 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
              <div className="flex flex-col items-start justify-start gap-6">
                <Heading size="md" as="h4" className="tracking-[-0.40px]">
                  Add CMS or Business Hosting and index your site to see real search
                  results!
                </Heading>
                <div className="flex flex-col items-start justify-start gap-2">
                  <Heading as="h5" className="text-gray-600_02">
                    https://relasto.com
                  </Heading>
                  <Text size="xs" as="p">
                    Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam
                    autem suscipit culpa perspiciatis. Exercitationem dolorum dolore
                    perferendis praesen…
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-6 p-4 border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
              <div className="flex flex-col items-start justify-start gap-6">
                <Heading size="md" as="h6" className="tracking-[-0.40px]">
                  You're viewing sample results.
                </Heading>
                <div className="flex flex-col items-start justify-start gap-2">
                  <Heading as="h6" className="text-gray-600_02">
                    https://relasto.com
                  </Heading>
                  <Text size="xs" as="p">
                    Ipsum sunt incidunt veniam sint nemo et aut. Vero ut quibusdam
                    autem suscipit culpa perspiciatis. Exercitationem dolorum dolore
                    perferendis praesen…
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
}
