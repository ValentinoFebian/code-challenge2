import contentfulClient from "@/contentful/contentfulClient";
import { TypeAboutSectionSkeleton } from "@/contentful/types/blog.types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"; // Rich Text Renderer

{/*Fetching Content from Contentful*/}
const getAboutContentful = async () => {
    try {
        const data = await contentfulClient.getEntries<TypeAboutSectionSkeleton>({
            content_type: "aboutSection",
        });
        return data.items;
    } catch (err) {
        console.log(err);
        return [];
    }
};

export default async function AboutSection() {
    
    const about = await getAboutContentful();

    return (
        <div className="flex flex-col gap-10 items-center px-6 pt-16 pb-4 bg-[#ECDFCC] ">

            {/*Title*/}
            <div className="text-center mb-4">
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-800">About us</h2>
                <p className="text-xl text-gray-600 mt-4">
                    Learn more about our mission, values, and what drives us to deliver quality education.
                </p>
            </div>

            {/*Content*/}
            <div className="w-full px-4">
                {about.map((aboutItem, idx) => (
                    <div
                    key={idx}
                    className="max-w-full mx-auto p-6 mb-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-shadow"
                    >
                    {/* Display the title */}
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                        {aboutItem.fields.title}
                    </h3>

                    {/* Display the body (Rich Text) */}
                    {aboutItem.fields.body && (
                        <div className="text-lg text-gray-700 leading-relaxed">
                        {documentToReactComponents(aboutItem.fields.body)}
                        </div>
                    )}
                    </div>
                ))}
            </div>
        </div>
    );
}
