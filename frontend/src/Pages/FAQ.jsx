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
      <div className="flex flex-col items-center justify-center w-full pb-64 gap-[68px] bg-gray-50_01">
   
        <div className="flex flex-row justify-center w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full pt-[7px] gap-[33px] max-w-[1200px]">
              <Heading
                size="3xl"
                as="h1"
                className="tracking-[-0.92px] text-center"
              >
                Search Property / Anything
              </Heading>
              <div className="flex flex-col items-center justify-start w-full gap-[25px]">
                <Input
                  name="search"
                  placeholder="Search Property / Anything"
                  value={searchBarValue6}
                  onChange={(e) => setSearchBarValue6(e)}
                  prefix={
                    <Img
                      src="images/img_icon_24px_search_gray_600_02.svg"
                      alt="icon / 24px / search"
                      className="cursor-pointer"
                    />
                  }
                  suffix={
                    searchBarValue6?.length > 0 ? (
                      <Img
                        src="images/img_icon_24px_filter.svg"
                        alt="icon / 24px / filter"
                        onClick={() => setSearchBarValue6("")}
                        className="cursor-pointer"
                      />
                    ) : null
                  }
                  className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                />
                <div className="flex flex-col items-start justify-start w-full gap-10 p-[27px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                  <div className="flex flex-col items-start justify-start w-[64%] pt-[3px] gap-[11px]">
                    <Heading size="md" as="h2" className="tracking-[-0.40px]">
                      You&#39;re viewing sample results.
                    </Heading>
                    <div className="flex flex-col items-start justify-start w-full gap-1">
                      <a
                        href="https://relasto.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Heading as="h3" className="!text-gray-600_02">
                          https://relasto.com
                        </Heading>
                      </a>
                      <Text size="xs" as="p">
                        Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                        quibusdam autem suscipit culpa perspiciatis.
                        Exercitationem dolorum dolore perferendis praesen…
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-10">
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[11px]">
                      <Heading size="md" as="h4" className="tracking-[-0.40px]">
                        Add CMS or Business Hosting and index your site to see
                        real search results!
                      </Heading>
                      <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                        <Heading as="h5" className="!text-gray-600_02">
                          https://relasto.com
                        </Heading>
                        <Text size="xs" as="p">
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
                    <div className="w-px h-px bg-blue_gray-100_01" />
                    <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[11px]">
                      <Heading size="md" as="h6" className="tracking-[-0.40px]">
                        You&#39;re viewing sample results.
                      </Heading>
                      <div className="flex flex-col items-start justify-start w-full gap-[7px]">
                        <Heading as="h6" className="!text-gray-600_02">
                          https://relasto.com
                        </Heading>
                        <Text size="xs" as="p">
                          Ipsum sunt incidunt veniam sint nemo et aut. Vero ut
                          quibusdam autem suscipit culpa perspiciatis.
                          Exercitationem dolorum dolore perferendis praesen…
                        </Text>
                      </div>
                    </div>
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
