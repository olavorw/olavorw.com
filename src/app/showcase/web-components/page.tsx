import {ArrowRightIcon} from "@heroicons/react/24/outline";
import UnifiedSection from "@/components/UnifiedSection";

export default function webComponents() {
    return (
        <>
            <UnifiedSection
                tagline={"Showcase"}
                title={"Web Components"}
                description={"A showcase of my favorite web components I've developed"}
                content={"Here are some of the best web components I've ever built! Not all of them are here, but these are the" +
                    " ones I'm most proud of. If you want to see the source code, I'll provide a link to the repository with all" +
                    " of my web components below.\nWhen I build my components, I keep the following in mind:"}
                boldTitle={true}
                features={[
                    {
                        icon: <ArrowRightIcon />,
                        title: "Feature 1",
                        description: "This is the first feature"
                    },
                    {
                        icon: <ArrowRightIcon />,
                        title: "Feature 2",
                        description: "This is the second feature"
                    },
                    {
                        icon: <ArrowRightIcon />,
                        title: "Feature 3",
                        description: "This is the third feature"
                    }
                ]}
                finalTitle={"Licensing"}
                finalContent={"All of my web components are licensed under the terms in my copyright page linked below. More" +
                    " broadly, I chose to license my works under the Apache 2.0 for attribution and it being a good license.\n" +
                    " Note that I don't usually give a fuss about giving credit, but these web components are near and dear to" +
                    " my heart, so please give attribution under license rules and the copyright. If you're wondering, I usually" +
                    " license under the GNU General Public License (GPLv3)."}

                imageSrc={"https://placehold.co/800x600/png"}
            />
        </>
    )
}