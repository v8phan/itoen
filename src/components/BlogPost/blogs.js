import React from 'react';
import weekendfly from '../../images/weekendfly.jpg';
import redclay from '../../images/redclay.jpg';
import nightfamily from '../../images/nightfamily.jpg';

const blogList = [
  {
    name: 'Sample Sampler: The Jones Girls - Who Can I Run To',
    blogSideDate: 'September 2, 2017',
    blogSideTags:
      'Anderson .Paak, Bas, hip hop, Isaiah Rashad, Junggigo, samples, Xscape',
    description: (
      <div>
        <p>
          I love samples of all kinds, whether I find them in hip hop, K-pop, or
          Costco. Particularly, I'm interested in how artists, often in very
          contrasting genres, can take the same sample and reinterpret it
          uniquely. Sample clearance issues are so lame; if you wanted your
          music to last and be remembered, wouldn't you want to let other
          artists be inspired by your music and use it and perpetuate it?
          Anyway, here's one of my favorite samples of all time, which I first
          encountered in one of my favorite songs of all time: Sounds From
          Friday Morning by Isaiah Rashad.
        </p>
      </div>
    ),
    link: (
      <iframe
        src="https://open.spotify.com/embed/track/3sFoSCg2KoaCUrOeKYMqvI"
        width="300"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    ),
  },
  {
    name: 'The Last Shadow Puppets – The Age of the Understatement',
    blogSideDate: 'September 2, 2017',
    blogSideTags:
      '60s, Alex Turner, Arctic Monkeys, Bond, James Bond, rock, The Last Shadow Puppets',
    description: (
      <div>
        <p>
          Arctic Monkeys frontman Alex Turner teams up with The Rascals’ Miles
          Kane to make the perfect soundtrack to a Bond movie if it was ever a
          Western. Heavily influenced by equal parts ’60s English pop rock and
          nostalgic heartache, this vivid and indulgent project will have you
          swaying to lush string arrangements and yearning harmonies while
          Alex’s signature songwriting will leave you with “paper cuts from the
          love letters you never gave him.”
        </p>
        <p>
          Favorite song:
          <b> Meeting Place</b>
        </p>
      </div>
    ),
    link: (
      <iframe
        title="Age of the Understatement - TLSP"
        src="https://open.spotify.com/embed/album/4fxflUQfRpsSPzVVBMZLQm"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    ),
  },
  {
    name: 'The Kount x Verhoog – Childhood',
    blogSideDate: 'September 1, 2017',
    blogSideTags: 'jazz, synth, The Kount, Verhoog',
    description: (
      <p>
        Crooning over the Kount’s soulful synth-infused jazz chords, the
        existential Verhoog asks us: “What’s really real?” I’m not sure, but I
        know these tears on my keyboard are.
      </p>
    ),
    link: (
      <iframe
        title="Childhood"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/230959692&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
    ),
  },
  {
    name: 'Jeremiah Jae & L’Orange – The Night Took Us In Like Family',
    blogSideDate: 'September 1, 2017',
    blogSideTags: "hip hop, Jeremiah Jae, L'Orange",
    image: nightfamily,
    description: (
      <div>
        <p>
          This is the album I play when I feel like robbing banks with Tommy
          guns in my favorite trench coat. With his dark and smooth production
          and deftly utilized noir film samples, L’Orange shows us the gritty
          underworld of the 1930s gangster. Rapping from what is probably a dark
          alley behind a greasy speakeasy, Jeremiah Jae gives us a peek into the
          confident yet paranoid mind of a Prohibition-era crime lord. Together,
          they make your world feel black and white.
        </p>
        <p>
          Favorite song:
          <b> Underworld</b>
        </p>
      </div>
    ),
  },
  {
    name: 'Charlotte Dos Santos - Cleo',
    blogSideDate: 'August 31, 2017',
    blogSideTags: 'charlotte dos santos, cleo, jazz, oldies, soul',
    image: redclay,
    description:
      'Cleo is a classic soul album recorded in 2017 that has a cover of a “round” sung in the 13th century? As explained in a note to Fader, Red Clay is a metaphor comparing clay’s malleability and also fragility to “vapid people who lack identity and need others to give them a purpose.” Vapid or not, this smoky and sexy album will mold your hips into a grind and heads into a bob.',
    link: (
      <iframe
        title="Cleo"
        src="https://open.spotify.com/embed/album/1peRsBvuNWGMgEcwj1lx0K"
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
      />
    ),
  },
  {
    name: 'Isaiah Rashad’s Find A Topic w/ original sample',
    blogSideDate: 'August 30, 2017',
    blogSideTags: 'hip hop, isaiah rashad, tde',
    description: (
      <p>
        Isaiah originally planned to use a sample of George Benson’s soulful
        guitar in Find A Topic, but unfortunately it couldn’t get cleared and he
        was forced to reproduce it himself. Isaiah and crew did a good job, but
        of course the original guitar is impossible to recreate perfectly. Here
        is the original, produced by Free P and J.LBS.
      </p>
    ),
    link: (
      <iframe
        title="Find A Topic"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/281865623&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
    ),
  },
  {
    name: 'Anna Wise - Some Mistakes (prod. MNDSGN)',
    blogSideDate: 'August 30, 2017',
    blogSideTags: '80s, Anna Wise, groovy, MNDSGN',
    description: (
      <p>
        MNDSGN's funky basslines and Anna Wise showing us why she's one of
        Kendrick Lamar's favorite collabs (Real, These Walls,
        Institutionalized.)
      </p>
    ),
    link: (
      <iframe
        title="Some Mistakes"
        width="100%"
        height="300"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/304152402&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
      />
    ),
  },
  {
    name: 'City Pop Curated',
    blogSideDate: 'August 30, 2017',
    blogSideTags: '80s, city pop, funk, japan, pop',
    image: weekendfly,
    alt: 'Weekend Fly To The Sun by Toshiki Kadomatsu',
    description: (
      <p>
        City Pop is a genre from 1980’s Japan and is a smooth amalgamation of
        Western influenced sounds like funk, rock, and jazz. During their
        unprecedented economic boom, Japan started putting more and more stereos
        into their brand new sports cars. Of course, this meant that they now
        demanded more music for when you’re driving around a sophisticated
        metropolitan or open coastline with your convertible roof down. I came
        across it in a fighting game forum: on a thread about Chun Li’s latest
        businesswoman-themed alt costume, someone posted Office Lady by Toshiki
        Kadomatsu. This is some of the best stuff I’ve found since then.
      </p>
    ),
    link: (
      <iframe
        title="City Pop Curated"
        width="100%"
        height="450"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/339120201&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
      />
    ),
  },
];

export default blogList;

{
  /* 
name: '',
blogSideDate: '',
blogSideTags: '',
image: ,
alt: '',
description:
link: , only take iframe to iframe if soundcloud
*/
}
