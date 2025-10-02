// src/SongModal.jsx

import React, { useState } from 'react';
import './SongModal.css';

const SongModal = ({ song, onClose }) => {
  if (!song) {
    return null;
  }

  // 歌割り表示/通常表示のトグル状態
  const [showLyricsSplit, setShowLyricsSplit] = useState(false);
  // 新バージョン/旧バージョンのトグル状態
  const [showNewLyrics, setShowNewLyrics] = useState(false);

  // 歌割り表示時に\nを<br />に変換する必要があるため、ここでヘルパー関数を定義
  const formatLyrics = (lyrics) => {
    if (typeof lyrics === 'string') {
      // プレーンテキストの場合、\nを<br />に変換
      return lyrics.replace(/\n/g, '<br />');
    }
    return '';
  };

  // 表示する歌詞のプロパティ名を決定し、コンテンツを返すロジック
  const getLyricsContent = () => {
    // 1. ベースとなる通常バージョンのキー (lyrics or lyrics1) を決定
    const baseKey = showNewLyrics ? 'lyrics1' : 'lyrics';
    
    // 2. 歌割りキーを決定 (lyricsn or lyrics1n)
    const splitKey = baseKey + 'n'; // 例: lyrics1n

    // 3. --- 歌割り表示がオンの場合の厳密なロジック ---
    if (showLyricsSplit) {
      const splitData = song[splitKey]; // 選択中の歌割りデータ（lyricsn1 または lyricsn）
      
      if (showNewLyrics) {
        // 新バージョン歌割り選択時: 厳密にlyricsn1のみを要求
        if (song['lyricsn1']) {
          return song['lyricsn1'];
        } else {
          // lyricsn1 が存在しない場合は、何も返さない（空文字列）
          return ''; 
        }
      } else {
        // 旧バージョン歌割り選択時: 厳密にlyricsnのみを要求
        if (song['lyricsn']) {
          return song['lyricsn'];
        } else {
          // lyricsn が存在しない場合は、何も返さない（空文字列）
          return '';
        }
      }
    }
    
    // 4. --- 歌割り表示がオフの場合（通常表示） ---
    // 選択されているバージョン（lyrics または lyrics1）の通常表示データを返す
    return formatLyrics(song[baseKey]);
  };


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
    const match = entry.match(/(.*?)\{/);
    if (match && match[1]) {
      return match[1];
    }
    return entry;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{song.title}</h2>
        <p><strong>作詞者:</strong> <span className="modal-item-value">{song.lyricist}</span></p>
        <p><strong>作曲者:</strong> <span className="modal-item-value">{song.composer}</span></p>
        {song.arranger && (
          <p><strong>編曲者:</strong> <span className="modal-item-value">{song.arranger}</span></p>
        )}
        {song.brassarrange && (
          <p><strong>ブラスアレンジ:</strong> <span className="modal-item-value">{song.brassarrange}</span></p>
        )}
        {song.produce && (
          <p><strong>プロデュース:</strong> <span className="modal-item-value">{song.produce}</span></p>
        )}
        {song.stringsarrange && (
          <p><strong>ストリングスアレンジ:</strong> <span className="modal-item-value">{song.stringsarrange}</span></p>
        )}
        {song.translate && (
          <p><strong>英訳詞:</strong> <span className="modal-item-value">{song.translate}</span></p>
        )}

        <p><strong>ユニット:</strong> <span className="modal-item-value">{song.singer || 'WEST.'}</span></p>
        <p><strong>発売日:</strong> <span className="modal-item-value">{song.date}</span></p>
        {song.tiup && (
          <p><strong>タイアップ:</strong> <span className="modal-item-value">{song.tiup}</span></p>
        )}
        {song.mv && (
          <p className="mv-section">
            <strong>映像:</strong>
            <span 
              className="modal-item-value"
              dangerouslySetInnerHTML={{ __html: formatLyrics(song.mv) }}
            />
          </p>
        )}
        <p><strong>収録シングル/アルバム:</strong></p>
        <ul>
          {filteredAlbums.map((album, index) => (
            <li key={index}><span className="modal-item-value">{album}</span></li>
          ))}
          {filteredAlbums.length === 0 && (
            <li><span className="modal-item-value">[]付きの収録はありません</span></li>
          )}
        </ul>
        <p><strong>披露情報:</strong> <span className="modal-item-value">{displayAnnounce(song.announce)}</span></p>
        
        {/* 歌詞セクション */}
        {song.lyrics && (
          <div className="lyrics-section">
            <div className="lyrics-header">
              <h3>歌詞</h3>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                {/* 1. 新旧切り替えスイッチ (lyrics1があれば表示) */}
                {song.lyrics1 && (
                  <div className="toggle-switch-container">
                    <label className="toggle-switch">
                      <input
                        type="checkbox"
                        checked={showNewLyrics}
                        onChange={() => {
                          setShowNewLyrics(!showNewLyrics);
                        }}
                      />
                      <span className="slider"></span>
                    </label>
                    <span className="toggle-label">{showNewLyrics ? '(2025)表示' : '原曲表示'}</span>
                  </div>
                )}

                {/* 2. 歌割り/通常表示スイッチ (lyricsn, lyricsn1のどちらかがあれば表示) */}
                {(song.lyricsn || song.lyricsn1) && (
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
            </div>

            {/* 最終的な歌詞表示エリア */}
            <p
              className="modal-lyrics-text"
              dangerouslySetInnerHTML={{ __html: getLyricsContent() }}
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
