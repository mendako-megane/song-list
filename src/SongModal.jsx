// src/SongModal.jsx

import React, { useState } from 'react'; // useEffectは不要になったため削除
import './SongModal.css';

const SongModal = ({ song, onClose }) => {
  if (!song) {
    return null;
  }

  const [showLyricsSplit, setShowLyricsSplit] = useState(false);
  

  const displayAnnounce = (announce) => {
    if (announce === 't') {
      return '披露あり';
    } else if (announce === 'f') {
      return '未披露';
    }
    return '不明';
  };

  const filteredAlbums = song.album.filter(albumName => albumName.includes('[') && albumName.includes(']'));

  const getPerformanceName = (entry) => {
    const match = entry.match(/(.*?)\{/); // '{'の手前までの文字列を抽出
    if (match && match[1]) {
      return match[1]; // 公演名のみを返す
    }
    return entry; // フォーマットが一致しない場合は、元の文字列をそのまま返す
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{song.title}</h2>
        <p><strong>作詞者:</strong> <span className="modal-item-value">{song.lyricist}</span></p>   {/* 追加 */}
        <p><strong>作曲者:</strong> <span className="modal-item-value">{song.composer}</span></p> {/* 追加 */}
        {song.arranger && ( // 編曲者情報がある場合のみ表示
          <p><strong>編曲者:</strong> <span className="modal-item-value">{song.arranger}</span></p>
        )}
        {song.brassarrange && ( // ブラスアレンジ情報がある場合のみ表示
          <p><strong>ブラスアレンジ:</strong> <span className="modal-item-value">{song.brassarrange}</span></p>
        )}
        {song.produce && ( // プロデュース情報がある場合のみ表示
          <p><strong>プロデュース:</strong> <span className="modal-item-value">{song.produce}</span></p>
        )}
        {song.stringsarrange && ( // ストリングスアレンジ情報がある場合のみ表示
          <p><strong>ストリングスアレンジ:</strong> <span className="modal-item-value">{song.stringsarrange}</span></p>
        )}
        {song.translate && ( // 英訳詞情報がある場合のみ表示
          <p><strong>英訳詞:</strong> <span className="modal-item-value">{song.translate}</span></p>
        )}

        <p><strong>ユニット:</strong> <span className="modal-item-value">{song.singer || 'WEST.'}</span></p> {/* 追加 */}
        <p><strong>発売日:</strong> <span className="modal-item-value">{song.date}</span></p>      {/* 追加 */}
        {song.tiup && ( // タイアップ情報がある場合のみ表示
          <p><strong>タイアップ:</strong> <span className="modal-item-value">{song.tiup}</span></p>
        )}
        {song.mv && (
          <p className="mv-section">
            <strong>映像:</strong>
            <span 
              className="modal-item-value"
              dangerouslySetInnerHTML={{ __html: song.mv.replace(/\n/g, '<br />') }}
            />
          </p>
        )}
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
          <div className="lyrics-section">
            <div className="lyrics-header">
              <h3>歌詞</h3>
              {song.lyricsn && (
                <div className="toggle-switch-container">
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={showLyricsSplit}
                      onChange={() => setShowLyricsSplit(!showLyricsSplit)}
                    />
                    <span className="slider"></span>
                  </label>
                  <span className="toggle-label">{showLyricsSplit ? '歌割り表示' : '通常表示'}</span>
                </div>
              )}
            </div>
            {/* ★修正：showLyricsSplitの状態に応じてdangerouslySetInnerHTMLを使用★ */}
            <p
              className="modal-lyrics-text"
              dangerouslySetInnerHTML={{
                __html: showLyricsSplit && song.lyricsn
                  ? song.lyricsn // 歌割り表示
                  : song.lyrics.replace(/\n/g, '<br />') // 通常表示
              }}
            />
          </div>
        )}
        {song.performances && song.performances.length > 0 && (
          <>
            <p><strong>披露公演:</strong></p>
            <ul className="performance-list">
              {song.performances.map((pEntry, index) => (
                <li key={index}>
                  <span className="modal-item-value">{getPerformanceName(pEntry)}</span>
                </li>
              ))}
            </ul>
          </>
        )}
        <button onClick={onClose} className="modal-close-button">閉じる</button>
      </div>
    </div>
  );
};

export default SongModal;