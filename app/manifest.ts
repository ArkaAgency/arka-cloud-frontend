import {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Arka Cloud - THE local cloud by default',
        short_name: 'Arka Cloud',
        icons: [
            {
                src: '/icon.png',
                type: 'image/x-icon',
                sizes: '512x512'
            }
        ],
        start_url: '.',
        display: 'fullscreen',
        theme_color: '#fff',
        background_color: '#fff'
    }
}