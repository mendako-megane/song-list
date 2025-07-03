import { useState, useEffect } from "react";
import { songs as allSongs } from "./data/songs";
import "./App.css";

import SongModal from "./SongModal.jsx";

const searchModes = ["タイトル", "作詞者", "作曲者", "編曲者", "歌詞", "収録", "披露", "ユニット", "タイアップ","セトリ"];


export default function App() {
  const [search, setSearch] = useState("");
  const [searchMode, setSearchMode] = useState("タイトル");
  const [sortOption, setSortOption] = useState("name_asc");
  const [selectedSong, setSelectedSong] = useState(null); // 選択された楽曲の情報を保持
  const [isModalOpen, setIsModalOpen] = useState(false); // モーダルが開いているかどうかの状態

  const [selectedPerformanceType, setSelectedPerformanceType] = useState("");

  useEffect(() => {
    setSearch(""); // 検索方法変更でリセット
    setSelectedPerformanceType("");
  }, [searchMode]); // ★追加：公演の種類もリセット★

  useEffect(() => {
    setSearch("");
  }, [selectedPerformanceType]);


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

  const performanceCategories = {
    "ライブ":[
      "なにわともあれ、ほんまにありがとう！",
      "一発めぇぇぇぇぇぇぇ！","一発めぇぇぇぇぇぇぇ！(各会場オーラス)","一発めぇぇぇぇぇぇぇ！(大阪オーラス)",
      "パリピポ","パリピポ(各会場オーラス)","パリピポ(兵庫オーラス)",
      "ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟)","ラッキィィィィィィィ7(大阪,横浜,愛知,広島,福岡,新潟のオーラス)","ラッキィィィィィィィ7(大阪,宮城)","ラッキィィィィィィィ7(大阪オーラス)","ラッキィィィィィィィ7(宮城オーラス)",
      "24(ニシ)から感謝届けます♡","24(ニシ)から感謝届けます♡(オーラス)",
      "なうぇすと(〜横浜3日目)","なうぇすと(横浜4日目〜,福井,福岡,宮城,愛知,静岡,大阪,北海道,広島)","なうぇすと(各会場オーラス)","なうぇすと(広島オーラス)",
      "WESTival","WESTival(各会場オーラス)","WESTival(北海道オーラス)",
      "WESTV!","WESTV!(各会場オーラス)","WESTV!(北海道オーラス)",
      "W trouble12/11","W trouble12/12昼,12/13夜","W trouble12/12夜,12/13昼",
      "rainboW(北海道)","rainboW(宮城,愛知,新潟,埼玉,熊本)","rainboW(円盤)",
      "Mixed Juice(静岡3/20,熊本3/26,宮城4/1,宮城4/2,愛知4/10,愛知4/15,横浜4/28,北海道6/10)","Mixed Juice(静岡3/21,熊本3/27,宮城4/3,愛知4/9,大阪4/16,大阪4/17,横浜4/27昼,横浜4/29昼,横浜4/30,城ホ5/5昼,新潟5/15昼,北海道6/11)","Mixed Juice(横浜4/27夜,横浜5/1夜,城ホ5/5夜,新潟5/15夜,北海道6/12夜)","Mixed Juice(横浜4/29夜,横浜5/1昼,城ホ5/4,新潟5/16,北海道6/12昼)","Mixed Juice(北海道オーラス)",
      "TO BE KANSAI COLOR-翔べ関西から-(大阪)","TO BE KANSAI COLOR-翔べ関西から-(名古屋)","TO BE KANSAI COLOR-翔べ関西から-(東京)","TO BE KANSAI COLOR-翔べ関西から-(東京オーラス)",
      "POWER(宮城)","POWER(横浜,福岡,新潟,静岡,大阪,北海道,愛知)","POWER(愛知オーラス)",
      "AWARD(大阪)","AWARD(新潟)","AWARD(宮城)","AWARD(愛知)","AWARD(横浜,静岡,福岡,広島,北海道)","AWARD(北海道オーラス)",
      "DOME TOUR AWARD(大阪,福岡)","DOME TOUR AWARD(東京)","DOME TOUR AWARD(東京オーラス)",
      "A.H.O. -Audio Hang Out-(香川,大阪,福岡,宮城4/12)","A.H.O. -Audio Hang Out-(宮城4/13,北海道,横浜,新潟,静岡,愛知)","A.H.O. -Audio Hang Out-A.H.O(愛知オーラス)",
    ],
    "フェス":[
      "メトロック2022(大阪)","LOVE MUSIC FESTIVAL2022","サマソニ2023(大阪,東京)","めざまし30周年フェス(東京)","メトロック2024(東京)","サマソニ2024(大阪,東京)","a-nation2024","KOYABU SONIC2024","CDTV ライブ！ ライブ！大感謝祭2024","CDTV ライブ！ ライブ！春の大感謝祭2025","メトロック2025(東京)",
    ],
    "ファンクラブ限定動画":[
      "ファンクラブ限定動画(改名発表)","ファンクラブ限定動画(ゴールデンウィークはWEST. WEEK!<Special Performance>)",
    ],
    "Happy Live with you":[
      "Johnny's World Happy LIVE with YOU(3/29)","Johnny's World Happy LIVE with YOU(6/18)",
    ],
    "シングルアルバム特典":[
      "ジャニーズWEST デビュー記念イベント デビューしてもええじゃないか ～バンザイ!! その先の一等賞へ～","皆様のおかげSummer Carnival!","５周ねんやねん♪よろしゅうねん♪","Special Studio Recording(証拠[初回B])","Johnny's DREAM IsLAND 2020→2025 〜大好きなこの街から〜 大阪松竹座 ジャニーズWEST公演","SPECIAL LIVE(サムシング・ニュー[初回B])","スペシャルセッション(しあわせの花[初回B])",
    ],
    "YouTube生配信":[
      "新グループ名発表します","【WESTube生配信SP】結成10周年やねぇぇぇぇぇぇぇん","【WESTube生配信】4.23デビュー10周年やねぇぇぇぇぇぇぇんSP","【年越し生配信2024→2025】デビュー10周年ありがとう⭐️&登録者数100万人達成記念SP🎉 ✨100/100✨",
    ],
    "虹会":[
      "7周年生配信イベント「虹会」","8周年生配信トーク＆ライブ「虹会」","9周年生配信トーク＆ライブ「虹会」","10周年生配信トーク＆ライブ「虹会」","11周年生配信トーク＆ライブ「虹会」",
    ],
    "WOWOW":[
      "WEST. 10th Anniversary Live “W”","WEST. 10th Anniversary Live “W”-Film edition-",
    ],
    "舞台":[
      "なにわ侍　ハローTOKYO!!","台風n Dreamer","なにわ侍 団五郎一座","WEST. 10th Anniversary 大阪松竹座公演(昼)","WEST. 10th Anniversary 大阪松竹座公演(夜)","WEST. 10th Anniversary 大阪松竹座公演(千穐楽)",
    ],
      // 他の公演名があればここに追加
  };

  const performanceTypes = Object.keys(performanceCategories);

  const filteredPerformances = selectedPerformanceType
    ? performanceCategories[selectedPerformanceType]
    : []; // 種類が選択されていない場合は空配列
  // ★ここまで公演リストの定義を多段階用に変更★
  
  const singers = Array.from(new Set(allSongs.map(song => song.singer).filter(Boolean)));
  
  const sortOptions = [
    { label: "⇅ 名前順(あ→わ)", value: "name_asc" },
    { label: "⇅ 名前順(わ→あ)", value: "name_desc" },
    { label: "⇅ 古い曲順", value: "date_asc" },
    { label: "⇅ 新しい曲順", value: "date_desc" },     
  ];

  const parsePerformanceEntry = (entry) => {
    const match = entry.match(/(.*?)\{(\d+)\}/); // 正規表現で公演名と順序番号を抽出
    if (match && match[1] && match[2]) {
      return { name: match[1], order: parseInt(match[2], 10) }; // 数値に変換
    }
    return null; // フォーマットが一致しない場合はnullを返す
  };


  const processedSongs = allSongs.flatMap(song => {
    if (!song.performances || song.performances.length === 0) {
      // 公演情報を持たない楽曲は、performanceDetailがnullのアイテムとして扱う
      return [{
        originalSong: song,
        performanceDetail: null,
        id: `song-${song.id}` // ユニークなID
      }];
    }

    // 各楽曲のperformances配列内の各エントリに対して、新しいオブジェクトを生成
    return song.performances.map(pEntry => {
      const parsedPerformance = parsePerformanceEntry(pEntry);
      if (!parsedPerformance) {
        console.warn(`Warning: Could not parse performance entry: "${pEntry}" for song: "${song.title}"`);
        return {
          originalSong: song,
          performanceDetail: null, // 解析失敗の場合もnull
          id: `song-${song.id}-unparsed-${pEntry.replace(/[^a-zA-Z0-9]/g, '')}`
        };
      }
      return {
        originalSong: song, // 元の楽曲オブジェクトを保持
        performanceDetail: parsedPerformance, // 公演詳細（名前と順序）
        id: `${song.id}-${parsedPerformance.name}-${parsedPerformance.order}` // 各公演ごとのユニークID
      };
    }).filter(Boolean); // null (解析失敗) のエントリを除外
  });

  let currentFilteredList = [];

  if (searchMode === "セトリ") {
    // 公演検索モードの場合、processedSongs をベースにフィルタリング
    currentFilteredList = processedSongs.filter(item => {
      // 公演情報を持たない項目は除外
      if (!item.performanceDetail) {
        return false;
      }
      // 1段目の公演の種類が選択されていない場合、何も表示しない
      if (selectedPerformanceType === "") { // ★追加された条件★
        return false;
      }
      if (search === "") { 
        console.log("DEBUG: セトリモードで検索値が空です。このアイテムは除外されます。", item.originalSong.title); // デバッグ用ログ
        return false; // ★ここが「すべての公演」を表示しないロジックの核心です★
      }
      // 選択された公演名でフィルタリング (searchが空なら全ての公演情報を持つ項目を表示)
      const isTypeMatch = item.performanceDetail.name && performanceCategories[selectedPerformanceType]?.includes(item.performanceDetail.name); // ★変更された条件★
      const isNameMatch = item.performanceDetail.name === search;

      return isTypeMatch && isNameMatch; // 両方の条件が満たされる場合のみ表示
    });

    // ソートも公演の順序番号で行う
    currentFilteredList.sort((a, b) => {
      let aOrder = a.performanceDetail ? a.performanceDetail.order : Infinity;
      let bOrder = b.performanceDetail ? b.performanceDetail.order : Infinity;
      return aOrder - bOrder;
    });
                    
  } else {
    // 公演検索モード以外の場合、allSongs をベースにフィルタリング
    currentFilteredList = allSongs.filter(song => {
      const lower = search.toLowerCase();
      const normalizeText = (text) => {
        if (!text) return '';
        return text
          .toLowerCase()
          .replace(/[！♪？「」（）、。、～…]/g, '')
          .replace(/[\s　]+/g, ' ')
          .trim();
      };

      if (searchMode === "タイトル") {
        return song.title.toLowerCase().includes(lower);
      }
      if (searchMode === "作詞者") {
        return song.lyricist.toLowerCase().includes(lower);
      }
      if (searchMode === "作曲者") {
        return song.composer.toLowerCase().includes(lower);
      }
      if (searchMode === "編曲者") {
        return song.arranger.toLowerCase().includes(lower);
      }
      if (searchMode === "歌詞") {
        return normalizeText(song.lyrics).includes(normalizeText(lower));
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
      if (searchMode === "タイアップ") {
        if (search === "あり") {
          return song.tiup && song.tiup.trim() !== '';
        }
        if (search === "なし") {
          return !song.tiup || song.tiup.trim() === '';
        }
        return true;
      }
      return true;
    });

    currentFilteredList.sort((a, b) => {
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
  }

  const filteredSongs = currentFilteredList; // 計算されたリストを最終的なfilteredSongsとして設定
  // ★ここまで filteredSongs の計算ロジックを変更★
    
    const openModal = (song) => {
      setSelectedSong(song);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
      setSelectedSong(null);
    }
    
  

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
          ) : searchMode === "タイアップ" ? ( // ★ここから追加★ タイアップ検索のセレクトバー
            <select value={search} onChange={(e) => setSearch(e.target.value)}>
              <option value="">すべて</option> {/* 「すべて」の状態 */}
              <option value="あり">あり</option>
              <option value="なし">なし</option>
            </select>
          ) : searchMode === "セトリ" ? ( // ★このブロックが追加されました★
            // 公演検索の場合、セレクトバーを表示
            <>
              {/* 1段目のセレクトバー：公演の種類 */}
              <select
                value={selectedPerformanceType}
                onChange={(e) => setSelectedPerformanceType(e.target.value)}
                className="control-select"
              >
                <option value="" disabled selected>公演の種類を選択</option>
                {performanceTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              {/* 2段目のセレクトバー：ツアーの種類（公演名） */}
              {selectedPerformanceType && (
                <select value={search} onChange={(e) => setSearch(e.target.value)} className="control-select">
                  <option value="" disabled selected>ツアーの種類を選択</option>
                  {filteredPerformances.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              )}
            </>
          ) : searchMode === "歌詞" ? ( // ★ここから追加★ 歌詞検索
            <input
              type="text"
              placeholder="歌詞で検索..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
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
          <div 
            className={searchMode === "セトリ" && search !== "" ? "song-list show-performance-cols" : "song-list"}
          >
            <div className="song-header">
              <span>タイトル</span>
              <span>作詞者</span>
              <span>作曲者</span>
              <span>初収録</span>
              <span>発売日</span>
            </div>
            {filteredSongs.map((item) => ( // ★itemはallSongsのsongオブジェクトか、processedSongsのアイテムオブジェクト★
              <div 
                key={searchMode === "セトリ" ? item.id : item.id} // 公演モードならprocessedSongsのID、そうでなければallSongsのID
                className="song-card" 
                onClick={() => openModal(searchMode === "セトリ" ? item.originalSong : item)} // 公演モードならoriginalSong、そうでなければitem自体
              >
                {/* 参照するプロパティを searchMode に応じて分岐 */}
                <span className="song-title">{searchMode === "セトリ" ? item.originalSong.title : item.title}</span>
                <span>{searchMode === "セトリ" ? item.originalSong.lyricist : item.lyricist}</span>
                <span>{searchMode === "セトリ" ? item.originalSong.composer : item.composer}</span>
                <span>{searchMode === "セトリ" ? item.originalSong.album[0] : item.album[0]}</span>
                <span className="song-date">{searchMode === "セトリ" ? item.originalSong.date : item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && selectedSong && (
          <SongModal song={selectedSong} onClose={closeModal} />
        )}

      </div>
    );
}