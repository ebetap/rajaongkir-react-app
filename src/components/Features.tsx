import React, { FC } from "react";

interface FeatureItem {
  name: string;
  description: string;
  icon: FC<React.SVGProps<SVGSVGElement>>;
}

interface FeaturesProps {
  subTitle: string;
  title: string;
  description: string;
  items: FeatureItem[];
}

const Features: React.FC<FeaturesProps> = ({
  subTitle,
  title,
  description,
  items,
}) => {
  return (
    <div className="overflow-hidden bg-white sm:pb-32 lg:pt-8">
      <div className="mx-auto px-6 lg:px-28">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0">
          <div className="lg:pt-4">
            <div>
              <h2 className="text-base text-center font-semibold leading-7 text-indigo-600">
                {subTitle}
              </h2>
              <p className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">
                {title}
              </p>
              <p className="mt-6 text-center text-lg leading-8 text-gray-600 lg:max-w-4xl mx-auto">
                {description}
              </p>
              <dl className="mt-10 flex items-start flex-wrap justify-between text-base leading-7 text-gray-600 lg:max-w-none">
                {items.map((feature) => (
                  <div
                    key={feature.name}
                    className="relative align-top md:max-w-[30%] mb-8"
                  >
                    <dt className="flex items-center font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="text-indigo-600 max-w-10 mr-4"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="mt-4">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
