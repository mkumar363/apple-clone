import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MusicCard from '../components/MusicCard';
import { useUser } from '../providers/UserProvider';
import { useNavigate } from 'react-router-dom';
import { CircularProgress, Typography } from '@mui/material';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../App.css';

function Album() {
  const [albumData, setAlbumData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setSongId } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchAlbumData() {
      setLoading(true);
      try {
        const response = await axios.get('https://academics.newtonschool.co/api/v1/music/album', {
          headers: {
            projectId: 'cp0doe0u3fx9'
          }
        });
        setAlbumData(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        setError('Error fetching album data');
      } finally {
        setLoading(false);
      }
    }

    fetchAlbumData();
  }, []);

  const handleAlbumClick = async (albumId) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://academics.newtonschool.co/api/v1/music/album/${albumId}`, {
        headers: {
          projectId: 'cp0doe0u3fx9'
        }
      });
      setSongId(response.data.data);
      navigate(`/AlbumSongs/${albumId}`);
      console.log(albumId);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div style={{ marginTop: '20px', marginRight: '10px' }}>
      {loading && <CircularProgress />}
      {error && <Typography variant="body1" color="error">{error}</Typography>}
      <Carousel 
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000} // Adjusted to 5000ms (5 seconds) for better user experience
        keyBoardControl={true}
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={['tablet', 'mobile', 'laptop', 'desktop']}
      >
        {albumData.map((album, index) => (
          <div key={index} style={{ padding: '0 10px' }}>
            <MusicCard
              title={album.title}
              thumbnail={album.image}
              artist={album.artists}
              id={album._id}
              onMusicHandler={() => handleAlbumClick(album._id)}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Album;
