import React from 'react';

import ImageGallery from 'react-image-gallery';

const pictures = [
    {
      original: 'images/topanga-lookout-hike-sunset.jpg',
      thumbnail: 'images/topanga-lookout-hike-sunset.jpg',
      description: `Scenic viewpoint at the end of the Topanga Lookout hike`,
      originalHeight: '450px',
    },
    {
        original: 'images/chino-hills-park-poppy-flowers.jpg',
        thumbnail: 'images/chino-hills-park-poppy-flowers.jpg',
        description: `Chino Hills State Park during a poppy bloom`,
        originalHeight: '450px',
    },
    {
        original: 'images/joshua-tree-sunset.jpg',
        thumbnail: 'images/joshua-tree-sunset.jpg',
        description: `Sunset at a hike Joshua Tree National Park`,
        originalHeight: '450px',
    },
    {
        original: 'images/los-angeles-skyline-hike.jpg',
        thumbnail: 'images/los-angeles-skyline-hike.jpg',
        description: `View of the Los Angeles skyline from a park at night`,
        originalHeight: '450px',
    },
    {
        original: 'images/seattle-skyline-blue.jpg',
        thumbnail: 'images/seattle-skyline-blue.jpg',
        description: `View of Seattle from the top floor of one of Seattle's highest buildings.`,
        originalHeight: '450px',
    },
    {
        original: 'images/yosemite-mirror-lake.jpg',
        thumbnail: 'images/yosemite-mirror-lake.jpg',
        description: `Mirror Lake at Yosemite National Park in the fall season.`,
        originalHeight: '450px',
      },
      {
        original: 'images/sequoia-national-park-tunnel-log.jpg',
        thumbnail: 'images/sequoia-national-park-tunnel-log.jpg',
        description: `Hike to Tunnel Log in Sequoia National Park in the spring.`,
        originalHeight: '450px',
      },
      {
        original: 'images/yosemite-valley-fall.jpg',
        thumbnail: 'images/yosemite-valley-fall.jpg',
        description: `Scenic lookout of Yosemite Valley during the fall season.`,
        originalHeight: '450px',
      },
      {
        original: 'images/yosemite-valley-morning-fog.jpg',
        thumbnail: 'images/yosemite-valley-morning-fog.jpg',
        description: `Foggy Yosemite Valley morning with views of mountains and trees.`,
        originalHeight: '450px',
      },
      {
        original: 'images/yosemitev-valley-morning.jpg',
        thumbnail: 'images/yosemitev-valley-morning.jpg',
        description: `Morning light peaking into a field in Yosemite Valley in the fall season.`,
        originalHeight: '450px',
      },
    ]

    function Gallery() {
        return (
            <>
            <h2>Gallery of Photos</h2>
            <p>Slideshow of my photography over the years</p>
            <article class="gallery">
                <ImageGallery items={pictures}/>
            </article>
            </>
        );
    }

export default Gallery;
