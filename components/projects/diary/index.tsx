import React from "react";
import styled from "styled-components";
import Image from "next/image";
import OverviewImg from "public/diary-overview.png";
import MoodTrackerImg from "public/diary-moodtracker.png";
import StatisticsImg from "public/diary-statistics.png";
import WriteImg from "public/diary-write.png";
import ImageRow from "components/image-row";

const Disclaimer = styled.p`
  font-size: 13px;
  opacity: 0.5;
`;

const Diary: React.FC = () => {
  return (
    <>
      <h2>Digital diary</h2>
      <p>
        In my free time, I have developed a digital diary for personal use only.
        I use it to keep track of thoughts, dreams and feelings.
      </p>
      <p>
        It&apos;s developed using a NextJS client and an ExpressJS server. The
        client is deployed on Vercel and connects to the server using GraphQL.
        The server is deployed on Repl.it and connects to a MongoDB database
        where all data is stored.
      </p>
      <h3>Functionalities</h3>
      <ImageRow
        imageElement={
          <Image
            src={OverviewImg}
            style={{ width: "100%", height: "100%" }}
            alt="Overview of all posts made in the diary."
            layout="responsive"
          />
        }
        position="right"
      >
        <h4>Diary overview</h4>
        <p>
          There is an overview of all posts, showing the newest at the top.
          There are filtering options for the selected mood, date and a search
          function. Posts can be edited, deleted, and commented.
        </p>
      </ImageRow>
      <ImageRow
        imageElement={
          <Image
            src={WriteImg}
            style={{ width: "100%", height: "100%" }}
            alt="View in diary where you select the mood for your post."
            layout="responsive"
          />
        }
        position="left"
      >
        <h4>Creating posts</h4>
        <p>
          Posts in the diary are tied to a specific feeling, which are divided
          into categories. Once a feeling is selected, the user can write a post
          of any length.
        </p>
      </ImageRow>
      <ImageRow
        imageElement={
          <Image
            src={StatisticsImg}
            style={{ width: "100%", height: "100%" }}
            alt="Statistics module showing a table with the types of feelings posted on each day."
            layout="responsive"
          />
        }
        position="right"
      >
        <h4>Statistics</h4>
        <p>
          The statistics module shows a table over which types of feelings are
          posted on each day. The table shows the posts for a single month, and
          you can use buttons to navigate between months.
        </p>
      </ImageRow>
      <ImageRow
        imageElement={
          <Image
            src={MoodTrackerImg}
            style={{ width: "100%", height: "100%" }}
            alt="Mood tracker module showing a graph of the mood over time."
            layout="responsive"
          />
        }
        position="left"
      >
        <h4>Mood tracker</h4>
        <p>
          The mood tracker module let&apos; the user rate their mood each day on
          a scale from 1 to 5. The user can then track their mood over time with
          the graph at the top of the page. There&apos;s an option to add a note
          to each day, which will be shown under the graph or on hover.
        </p>
      </ImageRow>
      <Disclaimer>
        * All screenshots are taken in <em>secret mode</em>, which means the
        data shown in the images is randomised.
      </Disclaimer>
    </>
  );
};

export default Diary;
