import { useState, useEffect } from "react";
import { songs as allSongs } from "./data/songs";
import "./App.css";

const searchModes = ["タイトル", "作詞者", "作曲者", "収録", "披露", "ユニット"];


export default function App() {
  const [search, setSearch] = useState("");
  const [searchMode, setSearchMode] = useState("タイトル");
  const [sortOption, setSortOption] = useState("name_asc");

  useEffect(() => {
    setSearch(""); // 検索方法変更でリセット
  }, [searchMode]);


  const albums = [
    "ええじゃないか",
    "ええじゃないか[初回盤]",
    "ええじゃないか[MY BEST CD盤]",
    "ええじゃないか[通常盤]",
    "go WEST よーいドン！",
    "go WEST よーいドン！[初回盤]",
    "go WEST よーいドン！[通常盤]",
    "ジパング・おおきに大作戦/夢を抱きしめて",
    "ジパング・おおきに大作戦/夢を抱きしめて[初回A]",
    "ジパング・おおきに大作戦/夢を抱きしめて[初回B]",
    "ジパング・おおきに大作戦/夢を抱きしめて[初回C]",
    "ジパング・おおきに大作戦/夢を抱きしめて[通常盤]",
    "ズンドコ パラダイス",
    "ズンドコ パラダイス[初回A]",
    "ズンドコ パラダイス[初回B]",
    "ズンドコ パラダイス[通常盤]",
    "パリピポ",
    "パリピポ[初回盤]",
    "パリピポ[通常盤]",
    "バリ ハピ",
    "バリ ハピ[初回A]",
    "バリ ハピ[初回B]",
    "バリ ハピ[通常盤]",
    "ラッキィィィィィィィ7",
    "ラッキィィィィィィィ7[初回盤]",
    "ラッキィィィィィィィ7[通常盤]",
    "逆転Winner",
    "逆転Winner[初回A]",
    "逆転Winner[初回B]",
    "逆転Winner[通常盤]",
    "人生は素晴らしい",
    "人生は素晴らしい[初回A]",
    "人生は素晴らしい[初回B]",
    "人生は素晴らしい[通常盤]",
    "なうぇすと",
    "なうぇすと[初回盤]",
    "なうぇすと[通常盤]",
    "おーさか☆愛・EYE・哀/Ya! Hot! Hot!",
    "おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回A]",
    "おーさか☆愛・EYE・哀/Ya! Hot! Hot![初回B]",
    "おーさか☆愛・EYE・哀/Ya! Hot! Hot![通常盤]",
    "僕ら今日も生きている/考えるな、燃えろ!!",
    "僕ら今日も生きている/考えるな、燃えろ!![初回A]",
    "僕ら今日も生きている/考えるな、燃えろ!![初回B]",
    "僕ら今日も生きている/考えるな、燃えろ!![通常盤]",
    "WESTival",
    "WESTival[初回盤]",
    "WESTival[通常盤]",
    "プリンシパルの君へ/ドラゴンドッグ",
    "プリンシパルの君へ/ドラゴンドッグ[初回A]",
    "プリンシパルの君へ/ドラゴンドッグ[初回B]",
    "プリンシパルの君へ/ドラゴンドッグ[通常盤]",
    "スタートダッシュ!",
    "スタートダッシュ![初回A]",
    "スタートダッシュ![初回B]",
    "スタートダッシュ![通常盤]",
    "WESTV！",
    "WESTV！[初回盤]",
    "WESTV！[通常盤]",
    "ホメチギリスト/傷だらけの愛",
    "ホメチギリスト/傷だらけの愛[初回A]",
    "ホメチギリスト/傷だらけの愛[初回B]",
    "ホメチギリスト/傷だらけの愛[通常盤]",
    "アメノチハレ",
    "アメノチハレ[初回A]",
    "アメノチハレ[初回B]",
    "アメノチハレ[通常盤]",
    "Big Shot!!",
    "Big Shot!![初回A]",
    "Big Shot!![初回B]",
    "Big Shot!![通常盤]",
    "W trouble",
    "W trouble[初回A]",
    "W trouble[初回B]",
    "W trouble[通常盤]",
    "W trouble[通販盤]",
    "証拠",
    "証拠[初回A]",
    "証拠[初回B]",
    "証拠[通常盤]",
    "週刊うまくいく曜日",
    "週刊うまくいく曜日[初回A]",
    "週刊うまくいく曜日[初回B]",
    "週刊うまくいく曜日[通常盤]",
    "rainboW",
    "rainboW[初回A]",
    "rainboW[初回B]",
    "rainboW[通常盤]",
    "rainboW[通販盤]",
    "サムシング・ニュー",
    "サムシング・ニュー[初回A]",
    "サムシング・ニュー[初回B]",
    "サムシング・ニュー[通常盤]",
    "でっかい愛/喜努愛楽",
    "でっかい愛/喜努愛楽[初回A]",
    "でっかい愛/喜努愛楽[初回B]",
    "でっかい愛/喜努愛楽[通常盤]",
    "黎明/進むしかねぇ",
    "黎明/進むしかねぇ[初回A]",
    "黎明/進むしかねぇ[初回B]",
    "黎明/進むしかねぇ[通常盤]",
    "Mixed Juice",
    "Mixed Juice[初回A]",
    "Mixed Juice[初回B]",
    "Mixed Juice[通常盤]",
    "星の雨",
    "星の雨[初回A]",
    "星の雨[初回B]",
    "星の雨[通常盤]",
    "星の雨[通販盤]",
    "POWER",
    "POWER[初回A]",
    "POWER[初回B]",
    "POWER[通常盤]",
    "POWER[通販盤]",
    "しあわせの花",
    "しあわせの花[初回A]",
    "しあわせの花[初回B]",
    "しあわせの花[通常盤]",
    "しあわせの花[通販盤]",
    "絶体絶命 / Beautiful / AS ONE",
    "絶体絶命 / Beautiful / AS ONE[初回A]",
    "絶体絶命 / Beautiful / AS ONE[初回B]",
    "絶体絶命 / Beautiful / AS ONE[初回C]",
    "絶体絶命 / Beautiful / AS ONE[通常盤]",
    "AWARD",
    "AWARD[初回A]",
    "AWARD[初回B]",
    "AWARD[通常盤]",
    "ハート / FATE",
    "ハート / FATE[初回A]",
    "ハート / FATE[初回B]",
    "ハート / FATE[通常盤]",
    "ハート / FATE[通販盤]",
    "まぁいっか！",
    "まぁいっか！[初回A]",
    "まぁいっか！[初回B]",
    "まぁいっか！[通常盤]",
    "A.H.O. -Audio Hang Out-",
    "A.H.O. -Audio Hang Out-[初回A]",
    "A.H.O. -Audio Hang Out-[初回B]",
    "A.H.O. -Audio Hang Out-[通常盤]",
    "ウェッサイソウル！ / BIG LOVE SONG",
    "ウェッサイソウル！ / BIG LOVE SONG[初回A]",
    "ウェッサイソウル！ / BIG LOVE SONG[初回B]",
    "ウェッサイソウル！ / BIG LOVE SONG[通常盤]"
  ];
  
  const singers = Array.from(new Set(allSongs.map(song => song.singer).filter(Boolean)));
  
  const sortOptions = [
    { label: "⇅ 名前順(あ→わ)", value: "name_asc" },
    { label: "⇅ 名前順(わ→あ)", value: "name_desc" },
    { label: "⇅ 古い曲順", value: "date_asc" },
    { label: "⇅ 新しい曲順", value: "date_desc" },
  ];


  const filteredSongs = allSongs
    .filter((song) => {
      const lower = search.toLowerCase();

      if (searchMode === "タイトル") {
        return song.title.toLowerCase().includes(lower);
      }
      if (searchMode === "作詞者") {
        return song.lyricist.toLowerCase().includes(lower);
      }
      if (searchMode === "作曲者") {
        return song.composer.toLowerCase().includes(lower);
      }
      if (searchMode === "収録") {
        return search === "" || song.album.includes(search);
      }
      if (searchMode === "披露") {
        if (search === "披露あり") return song.announce == "t";
        if (search === "未披露") return song.announce === "f";
        return true;
      }
      if (searchMode === "ユニット") {
        return search === "" || song.singer === search;
      }
      
      

      return true;
    })

    .sort((a, b) => {
      const getCategory = (str) => {
        const char = str.charAt(0);
        if (char.match(/^[\u3040-\u30FF]/)) return 0; // ひらがな・カタカナ
        if (char.match(/^[a-zA-Z]/)) return 1;         // アルファベット
        return 2;                                      // 記号など
      };
    
      if (sortOption === "name_asc" || sortOption === "name_desc") {
        const catA = getCategory(a.titleKana);
        const catB = getCategory(b.titleKana);
    
        if (catA !== catB) {
          return sortOption === "name_asc" ? catA - catB : catB - catA;
        }
    
        return sortOption === "name_asc"
          ? a.titleKana.localeCompare(b.titleKana, "ja", { sensitivity: "base" })
          : b.titleKana.localeCompare(a.titleKana, "ja", { sensitivity: "base" });
      }
    
      if (sortOption === "date_asc") {
        return new Date(a.date) - new Date(b.date);
      }
      if (sortOption === "date_desc") {
        return new Date(b.date) - new Date(a.date);
      }
    
      return 0;
    });
    
    
  

    return (
      <div className="container">
        <h1>WEST. 楽曲リスト</h1>
  
        <div className="controls">
          {/* 検索対象選択 */}
          <select value={searchMode} onChange={(e) => setSearchMode(e.target.value)}>
            {searchModes.map((mode) => (
              <option key={mode} value={mode}>
                {mode}
              </option>
            ))}
          </select>
  
          {/* 入力欄の切り替え */}
          {searchMode === "収録" ? (
            <select value={search} onChange={(e) => setSearch(e.target.value)}>
              <option value="">すべての収録</option>
              {albums.map((album) => (
                <option key={album} value={album}>
                  {album}
                </option>
              ))}
            </select>
          ) : searchMode === "ユニット" ? (
              <select value={search} onChange={(e) => setSearch(e.target.value)}>
                <option value="">すべてのユニット</option>
                {singers.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
          ) : searchMode === "披露" ? (
            <select value={search} onChange={(e) => setSearch(e.target.value)}>
              <option value="">すべての曲</option>
              <option value="披露あり">披露あり</option>
              <option value="未披露">未披露</option>
            </select>
          ) : (
            <input
              type="text"
              placeholder={`${searchMode}で検索...`}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          )}
  
          {/* ソート選択 */}
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        

        <div style={{ marginBottom: "0.5rem", fontSize: "0.9rem" }}>
          {filteredSongs.length} 件の曲が見つかりました
        </div>
        <div className="song-list-wrapper">
          <div className="song-list">
            <div className="song-header">
              <span>タイトル</span>
              <span>作詞者</span>
              <span>作曲者</span>
              <span>初収録</span>
              <span>発売日</span>
            </div>
            {filteredSongs.map((song) => (
              <div key={song.id} className="song-card">
                <span className="song-title">{song.title}</span>
                <span>{song.lyricist}</span>
                <span>{song.composer}</span>
                <span>{song.album[0]}</span>
                <span className="song-date">{song.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  
}