import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import client from "../sanity";

export function urlFor (source) {
    return imageUrlBuilder(client).image(source)
}

export const ptComponents = {
    list: {
        bullet: ({children}) => <ul className="leading-tight">{children}</ul>,
    },
    types: {

        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                // <div className={'block w-full'}>
                //     <Image
                //         src={urlFor(value).maxHeight(600).auto('format').url()}
                //         layout={'responsive'}
                //         // objectFit={'cover'}
                //         height={600}
                //         width={600}
                //     />
                // </div>

                <img
                    alt={value.alt || ' '}
                    loading="lazy"
                    src={urlFor(value).maxHeight(600).fit('max').auto('format')}
                    className={'rounded'}
                />
            )
        }
    }
}
