import React from 'react';
import { InstashowcaseCol, InstashowcaseRow } from './style';
import InstagramGrid from '../../components/instagram-grid/instagram-grid';
import useInstagram from '../../hooks/use-instagram';

interface ShowcaseProps {}

const InstaDrawerGrid: React.FunctionComponent<ShowcaseProps> = () => {
  const instagramPhotos = useInstagram();

  return (
    <InstashowcaseRow>
      {instagramPhotos?.slice(0, 4).map((node: any) => (
        <InstashowcaseCol key={node.id} className="drawerGrid">
          <InstagramGrid image={node?.media_url} url={node?.permalink} />
        </InstashowcaseCol>
      ))}
    </InstashowcaseRow>
  );
};

export default InstaDrawerGrid;
