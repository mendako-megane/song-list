// src/SongModal.jsx

import React from 'react';
import './SongModal.css';

const SongModal = ({ song, onClose }) => {
  if (!song) {
    return null;
  }

  const displayAnnounce = (announce) => {
    if (announce === 't') {
      return '披露あり';
    } else if (announce === 'f') {
      return '未披露';
    }
    return '不明';
  };

  const filteredAlbums = song.album.filter(albumName => albumName.includes('[') && albumName.includes(']'));


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{song.title}</h2>
        <p><strong>作詞者:</strong> <span className="modal-item-value">{song.lyricist}</span></p>   {/* 追加 */}
        <p><strong>作曲者:</strong> <span className="modal-item-value">{song.composer}</span></p> {/* 追加 */}
        {song.arranger && ( // 編曲者情報がある場合のみ表示
          <p><strong>編曲者:</strong> <span className="modal-item-value">{song.arranger}</span></p>
        )}

        <p><strong>ユニット:</strong> <span className="modal-item-value">{song.singer || 'WEST.'}</span></p> {/* 追加 */}
        <p><strong>発売日:</strong> <span className="modal-item-value">{song.date}</span></p>      {/* 追加 */}
        <p><strong>収録シングル/アルバム:</strong></p>
        <ul>
          {filteredAlbums.map((album, index) => (
            <li key={index}><span className="modal-item-value">{album}</span></li>
          ))}
          {/* もし[]付きのアルバムがない場合、その旨を表示する（任意） */}
          {filteredAlbums.length === 0 && (
            <li><span className="modal-item-value">[]付きの収録はありません</span></li>
          )}
        </ul>
        <p><strong>披露情報:</strong> <span className="modal-item-value">{displayAnnounce(song.announce)}</span></p> {/* 追加 */}
        {song.lyrics && (
          <div className="lyrics-section"> {/* クラス名を追加 */}
            <h3>歌詞</h3>
            <p className="modal-lyrics-text">{song.lyrics}</p> {/* クラス名を追加 */}
          </div>
        )}
        <button onClick={onClose} className="modal-close-button">閉じる</button>
      </div>
    </div>
  );
};

export default SongModal;