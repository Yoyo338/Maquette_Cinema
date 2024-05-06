import React, { useState, useEffect } from 'react';
import Instafeed from 'instafeed.js';

export default function ReseauxSociaux() {
    const [instagramPosts, setInstagramPosts] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les dernières publications Instagram basées sur un hashtag
    const fetchInstagramPosts = async () => {
      try {
        // Appel à l'API Instagram pour récupérer les dernières publications
        const response = await fetch('https://www.instagram.com/explore/tags/YOUR_HASHTAG/?__a=1');
        const data = await response.json();
        setInstagramPosts(data.graphql.hashtag.edge_hashtag_to_media.edges);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    // Charger les données à l'initialisation du composant
    fetchInstagramPosts();
  }, []);

  return (
    <div>
      {instagramPosts.map(post => (
        <img key={post.node.id} src={post.node.display_url} alt={post.node.edge_media_to_caption.edges[0].node.text} />
      ))}
    </div>
  );
}
