import React from 'react';
import { IoLogoInstagram } from 'react-icons/io';
import InstShowcaseWrapper, {
  InstashowcaseCol,
  InstashowcaseRow,
  ShowcaseTitle,
} from './style';
import InstagramGrid from '../../components/instagram-grid/instagram-grid';
import useInstagram from '../../hooks/use-instagram';

interface ShowcaseProps {}

const InstagramShowcase: React.FunctionComponent<ShowcaseProps> = () => {
  const instagramPhotos = useInstagram();

  return (
    <InstShowcaseWrapper>
      <ShowcaseTitle>
        <IoLogoInstagram
          style={{
            display: 'block',
            marginRight: '12px',
            fontSize: '20px',
          }}
        />
        Me On Instagram
      </ShowcaseTitle>
      <InstashowcaseRow>
        {instagramPhotos?.slice(0, 4).map((photo: any) => (
          <InstashowcaseCol key={photo?.id}>
            <InstagramGrid image={photo?.media_url} url={photo?.permalink} />
          </InstashowcaseCol>
        ))}
      </InstashowcaseRow>
    </InstShowcaseWrapper>
  );
};

export default InstagramShowcase;
