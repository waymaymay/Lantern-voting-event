import React , { useRef, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import '../../pages/home/home.css';
import AreaButton from '../../component/areabutton/areaButton';
import UpperButton from '../../component/upperbutton/upperButton';
import ClosePageButton from '../../component/closepagebutton/closePageButton';
import WebPresent from '../../component/part/webPresent';
import IssueText from '../../component/issuetext/IssueText';
import MyPage from '../mypage/myPage';
import VoteButton from '../../component/part/votebutton/VoteButton';


import image101 from '../../images/contest/1山線-豐原區燈組.jpg';
import image102 from '../../images/contest/1_2山線test.jpg';
import image201 from '../../images/contest/2山線-石岡區燈組.png';
import image301 from '../../images/contest/3山線-大雅區燈組.png';
import image401 from '../../images/contest/4海線-沙鹿區燈組.jpg';
import image501 from '../../images/contest/5海線-龍井區燈組.JPG';
import image601 from '../../images/contest/6海線-梧棲區燈組.jpeg';
import image701 from '../../images/contest/7海線-大肚區燈組.png';
import image801 from '../../images/contest/8海線-清水區燈組.jpg';
import image901 from '../../images/contest/9屯區-烏日區燈組.jpg';
import image1001 from '../../images/contest/10屯區-霧峰區燈組.jpg';
import image1101 from '../../images/contest/11城區-南屯區燈組.jpg';  
import image1201 from '../../images/contest/12城區-西屯區燈組.png';  
import image1301 from '../../images/contest/13城區-北區燈組.jpg';
import image1401 from '../../images/contest/14城區-東區燈組.jpg';  
import image1501 from '../../images/contest/15山線-新社區燈組.jpg';  
import image1601 from '../../images/contest/16山線-潭子區燈組.jpg';  
import image1701 from '../../images/contest/17山線-后里區燈組.jpg';  
import image1801 from '../../images/contest/18山線-東勢區燈組.png';  
import image1901 from '../../images/contest/19山線-神岡區燈組.png'
import image2001 from '../../images/contest/20海線-大甲區燈組.jpg';
import image2101 from '../../images/contest/21海線-外埔區燈組.png';   
import image2201 from '../../images/contest/22海線-大安區燈組.jpg';   
import image2301 from '../../images/contest/23屯區-大里區燈組.jpg';   
import image2401 from '../../images/contest/24屯區-太平區燈組.jpg';   
import image2501 from '../../images/contest/25城區-南區燈組.jpg';   
import image2601 from '../../images/contest/26城區-西區燈組.jpg';   
import image2701 from '../../images/contest/27城區-北屯區燈組.jpg';   
import image2801 from '../../images/contest/28城區-中區燈組.jpg';                                                                                                                                                                                                                                                              




function Home(){
    const banner_img = require('../../images/banner_img.png')
    const banner_h5 = require('../../images/H5-index-banner.png')
    
    // 圖片區
    const carouselImages1 =[image101]; 
    const carouselImages2 =[image201 ]; 
    const carouselImages3 =[image301 ]; 
    const carouselImages4 =[image401 ]; 
    const carouselImages5 =[image501 ]; 
    const carouselImages6 =[image601 ]; 
    const carouselImages7 =[image701 ]; 
    const carouselImages8 =[image801 ]; 
    const carouselImages9 =[image901 ]; 
    const carouselImages10 =[image1001 ]; 
    const carouselImages11 =[image1101 ]; 
    const carouselImages12 =[image1201 ]; 
    const carouselImages13 =[image1301 ]; 
    const carouselImages14 =[image1401 ]; 
    const carouselImages15 =[image1501 ]; 
    const carouselImages16 =[image1601 ]; 
    const carouselImages17 =[image1701 ]; 
    const carouselImages18 =[image1801 ]; 
    const carouselImages19 =[image1901 ]; 
    const carouselImages20 =[image2001 ]; 
    const carouselImages21 =[image2101 ]; 
    const carouselImages22 =[image2201 ]; 
    const carouselImages23 =[image2301 ]; 
    const carouselImages24 =[image2401 ]; 
    const carouselImages25 =[image2501 ]; 
    const carouselImages26 =[image2601 ]; 
    const carouselImages27 =[image2701 ]; 
    const carouselImages28 =[image2801 ]; 


    //文案區
    const issueTextContent1 = {
        topTitle: '豐山線-山城龍賀尞',
        itemNumber: 1,
        mainTitle: '豐原區公所',
        groupName: '美樂豐原 龍耀葫蘆墩',
        introduce1: '吉祥物-福蘆妹,葫蘆墩圳為中部最老的灌溉水圳之一, 慈濟宮-豐原最早的廟宇及信仰中心',
    };

    const issueTextContent2 = {
        topTitle: '山線-山城龍賀尞',
        itemNumber: 2,
        mainTitle: '石岡區公所',
        groupName: '幸福臺中 愛來石岡',
        introduce1: '（待補）',
    };

    const issueTextContent3 = {
        topTitle: '山線-山城龍賀尞',
        itemNumber: 3,
        mainTitle: '大雅區公所',
        groupName: '麥麥相傳',
        introduce1: '結合小麥文化特色及大雅公仔(達達、雅雅)，以『麥麥相傳』表達「幸福永續．富市臺中」的意象。,葫蘆墩圳為中部最老的灌溉水圳之一, 慈濟宮-豐原最早的廟宇及信仰中心',
    };

    const issueTextContent4 = {
        topTitle: '海線-海線龍樂活',
        itemNumber: 4,
        mainTitle: '豐原區公所',
        groupName: '農鹿Shalu一鹿發',
        introduce1: '以「鹿角」輔以拍瀑拉圖騰為花燈基底，並放置農特產品，呈現「大地之母所賜禮物」，鹿寶身穿沙轆社服飾，凸顯地方農業與文化特色。',
    };

    const issueTextContent5 = {
        topTitle: '海線-海線龍樂活',
        itemNumber: 5,
        mainTitle: '龍井區公所',
        groupName: '續麗龍井',
        introduce1: '以回收寶特瓶堆疊編織成龍井特色景點-地中海風情塔樓，結合周邊插畫呈現在地特色景點與特產等，以裝置藝術及人文連結的角度，展現美麗視野。',
    };

    const issueTextContent6 = {
        topTitle: '海線-海線龍樂活',
        itemNumber: 6,
        mainTitle: '梧棲區公所',
        groupName: '文化梧棲 魅力無限',
        introduce1: '大庄媽進香回鑾莊嚴盛大，走大轎展現活力熱情，保存傳統文化並推展在地文化特色，協力營造區域魅力。',
    };

    const issueTextContent7 = {
        topTitle: '海線-海線龍樂活',
        itemNumber: 7,
        mainTitle: '大肚區公所',
        groupName: '文昌大肚 智慧滿載',
        introduce1: '燈組以大肚山為背景、萬里長城登山步道蜿蜒其中，山下擁有130幾年歷史的磺溪書院，文昌帝君手持文昌筆，象徵著無窮的學問和文化，「追分火車站」為追分成功的考生鋪就勝利之路，呼應SDGS 13的氣候行動，引領著永續未來的方向。',
    };

    const issueTextContent8 = {
        topTitle: '海線-海線龍樂活',
        itemNumber: 8,
        mainTitle: '清水區公所',
        groupName: '璀璨鰲峰 低碳永續',
        introduce1: '由稻米、甘藷、韭黃和白蘿蔔娃娃，騎乘微笑單車暢遊本區鰲峰山、高美濕地木棧道等重要景色，展現在地農業多樣性及感受清水自然風光。',
    };

    const issueTextContent9 = {
        topTitle: '屯區-屯區龍賀踅',
        itemNumber: 9,
        mainTitle: '烏日區公所',
        groupName: 'GOGO三姊妹',
        introduce1: '烏日為臺中市唯一三鐵共構的行政區，以三種智慧化交通運輸作為主角，顯示烏日於臺中位居交通樞紐的重要地位。將「高鐵、臺鐵、臺中捷運」以可愛的機器人模樣呈現。臺鐵是穩重而堅韌的大姊，高鐵是快速又靈活的二姊，臺中捷運則是充滿活力的小妹，各自展現獨特魅力。機器人不僅象徵AI時代的來臨，同時以女性機器人呼應性別平等意象，如同市長媽媽盧秀燕鋼鐵般的決心，守護臺中市民幸福。',
    };

    const issueTextContent10 = {
        topTitle: '屯區-屯區龍賀踅',
        itemNumber: 10,
        mainTitle: '霧峰區公所',
        groupName: '龍騰霧峰 樂活阿罩霧',
        introduce1: '以霧峰貓頭鷹Q版吉祥物為主題，融入霧峰的好山好水背景，藉由金元寶搭配農特產品，顯現霧峰之富庶，並以稻草人結合霧峰南天宮、聖賢宮、進南宮等三座重要在地民間信仰宮廟，以感念神恩浩蕩保蒼生，祈求風調雨順境內平安。',
    };

    const issueTextContent11 = {
        topTitle: '城區-城區龍幸福',
        itemNumber: 11,
        mainTitle: '南屯區公所',
        groupName: '富足臺中 足愛南屯',
        introduce1: '為推動臺中足球運動人才搖籃，落實「酷運動，酷城市」的目標，全臺首座足球園區設立在南屯，預計114年底完工，本區吉祥物穿山甲—咖咖熱情活力踢出無限潛能，期待讓世界看見臺中的美好。',
    };

    const issueTextContent12 = {
        topTitle: '城區-城區龍幸福',
        itemNumber: 12,
        mainTitle: '西屯區公所',
        groupName: '幸福臺中 琴定西屯',
        introduce1: '以科湳愛琴橋為主燈，周邊環繞中央公園四大重要建設及逢甲商圈經典美食，在浪漫燈光下，展現城市美好願景。',
    };

    const issueTextContent13 = {
        topTitle: '城區-城區龍幸福',
        itemNumber: 13,
        mainTitle: '北區區公所',
        groupName: '富市臺中 陽光北',
        introduce1: '以科博館超人氣恐龍搭乘臺中捷運輕旅行的主題意象，邀請大家一起來北區開趴!',
    };

    const issueTextContent14 = {
        topTitle: '城區-城區龍幸福',
        itemNumber: 14,
        mainTitle: '東區區公所',
        groupName: '樂來東區 月見幸福',
        introduce1: '以東區在地信仰中心-三級古蹟樂成宮為主燈意象設計，Q版媽祖及月老為輔更能加深東區在地最不可或缺的精神指標塑造東區特有區域特色與意象。',
    };

    const issueTextContent15 = {
        topTitle: '山線-山城龍賀尞',
        itemNumber: 15,
        mainTitle: '新社區公所',
        groupName: '花現新世界 燈提逛新社',
        introduce1: '花燈設計以「農特產品」及「休閒旅遊」為發想，新社生命之水-白冷圳倒虹吸管水利設施貫穿山丘場景，融入新社花海旁蝴蝶飛舞、香菇寶寶、葡萄公主歡樂氛圍，感受「花現心視界 燈提逛新社」美好遊程。',
    };

    const issueTextContent16 = {
        topTitle: '山線-山城龍賀尞',
        itemNumber: 16,
        mainTitle: '潭子區公所',
        groupName: '點亮潭心 幸福潭子',
        introduce1: '活躍潭子 - 潭心鐵馬空橋跳躍曲線 / 永續潭子 - 竹筍 馬鈴薯 四周柿 / 樂活潭子 -  自行車 蝴蝶 花卉',
    };

    const issueTextContent17 = {
        topTitle: '山線-山城龍賀尞',
        itemNumber: 17,
        mainTitle: '共譜后里新樂章 和諧共生的旋律',
        groupName: '美樂豐原 龍耀葫蘆墩',
        introduce1: `后里區有文化古蹟自然美景氣候宜人
        是「薩克斯風」的故鄉、「百合花卉」、「高接梨」、「葡萄 紅酒」及「后里馬場」代表著后里的特色區域品牌。
        「梨寶」「花妞」吉祥物寶寶是最佳代言人：帥氣的梨寶騎著來自后里馬場的駿馬，吹奏著薩克斯風；嫵媚的花妞品嚐著冠軍級葡萄美酒，欣賞著后里盛產的花卉與水果；馬車是由廢棄高接梨樹枝所構成，提醒經濟循環的重要性，詮釋出在充滿音樂人文薈萃及富饒農產的城區裡，希望能喚起對環境及氣候問題，重視永續經營愛護地球資源，在人與大自然的生存與發展中取的平衡，共存共榮中共享資源。
        展現SDGs項目：
        SDGs2農業多樣性-確保糧食安全，消除飢餓，促進永續農業
        SDGs8就業與經濟成長-透過燈會平台，促進地方文化與經濟
        SDGs13氣候行動-使用再生材料製作燈組。`,
    };

    const issueTextContent18 = {
        topTitle: '山線-山城龍賀尞',
        itemNumber: 18,
        mainTitle: '東勢區公所',
        groupName: '遇見新丁粄in東勢',
        introduce1: '由數百個小型的提燈組成巨大的新丁粄，每個提燈都呈現出新丁粄的造型，代表著由許多新生兒的誕生匯集組成的團結的社群。作品展現了東勢的文化特色。',
    };

    const issueTextContent19 = {
        topTitle: '山線-山城龍賀尞',
        itemNumber: 19,
        mainTitle: '神岡區公所',
        groupName: '燈門拜訪 訪神岡',
        introduce1: '龍來神岡串好運，認識神岡招牌「五馬文化」，霓虹燈與接地氣的台派精神帶來「神龍」好運年。',
    };

    const issueTextContent20 = {
        topTitle: '海線-海線龍樂活',
        itemNumber: 20,
        mainTitle: '大甲區公所',
        groupName: '芋見大甲 珍馨愛藺',
        introduce1: '以大甲農會芋頭娃娃「芋妮」及「裕珍馨」 Q版奶油酥餅人，結合大甲百年藺編文化，頭戴藺草帽，手拿桿麵棍、春聯舞動，呈現豐富趣味畫面。',
    };

    const issueTextContent21 = {
        topTitle: '海線-海線龍樂活',
        itemNumber: 21,
        mainTitle: '外埔區公所',
        groupName: '外埔金黃大道來報喜',
        introduce1: '以外埔之光～蜜蜂、海芋造型燈海及紅龍果交織而成的忘憂谷美景，透過燈光及再生材料堆疊製作，搭配燈光藝術展示並融合SDGs氣候行動議題，強調自然和諧環境保護及氣候變遷之重要性。',
    };

    const issueTextContent22 = {
        topTitle: '海線-海線龍樂活',
        itemNumber: 22,
        mainTitle: '大安區公所',
        groupName: '神佑大安與農共好',
        introduce1: '本燈組以Q版神農大帝為主軸，象徵孕育農業的神祇，在其庇佑下大安各項農漁畜產皆能豐收。',
    };

    const issueTextContent23 = {
        topTitle: '屯區-屯區龍賀踅',
        itemNumber: 23,
        mainTitle: '大里區公所',
        groupName: '「杙」遊大里好風華',
        introduce1: '「一府、二鹿、三艋舺、四諸羅、五竹塹、六大里杙」；大里舊稱「大里杙」，是台灣早年六大繁榮都市之一，足證大里早年繁華風光的歲月。',
    };

    const issueTextContent24 = {
        topTitle: '屯區-屯區龍賀踅',
        itemNumber: 24,
        mainTitle: '太平區公所',
        groupName: '龍馬精神 光耀太平',
        introduce1: '以太平當紅的新建設馬卡龍公園為設計主體,主體內裝滿在地水果呈現太平的物產豐碩。而長安醫院化身為白龍隨身掛著聽診器守護民眾的健康，太平的獨有的枇杷寶寶與毛小孩嬉戲其中，整座園區洋溢在幸福歡樂的氛圍中，襯托出富市臺中&新好太平的意象。',
    };

    const issueTextContent25 = {
        topTitle: '城區-城區龍幸福',
        itemNumber: 25,
        mainTitle: '南區區公所',
        groupName: '花灑南區 勒在騎中',
        introduce1: '興大園道的阿勃勒，展現浪漫黃金花雨；吉祥物阿柴、狗頭火柴盒象徵著「番仔火的故鄉」；綠空廊道保留了舊鐵道遺產，是散步、騎自行車的休閒好去處！',
    };

    const issueTextContent26 = {
        topTitle: '城區-城區龍幸福',
        itemNumber: 26,
        mainTitle: '西區區公所',
        groupName: '舞動活力 龍躍西區',
        introduce1: `以西區2大特色主軸：臺中市役所及臺中爵士音樂節為設計概念，並結合龍年意象為主角，以薩克斯風、爵士鼓、大提琴、歌唱呈現整個爵士音樂的氛圍，再配合互動感應發出爵士搖擺樂曲，讓人在新舊共榮城市中，感受歡慶元宵佳節快樂氣氛。
        藝術家名字｜張明璇、黃永祥
        贊助單位｜麻園頭福德祠`,
    };

    const issueTextContent27 = {
        topTitle: '城區-城區龍幸福',
        itemNumber: 27,
        mainTitle: '北屯區區公所',
        groupName: '躍動未來 幸福北屯',
        introduce1: '以北屯重大建設(巨蛋、北屯國民運動中心及溪東圖書館)、在地農產品(椪柑、文心蘭、竹筍)相互串聯為設計意象，展現北屯蓬勃發展、豐收滿載。',
    };

    const issueTextContent28 = {
        topTitle: '城區-城區龍幸福',
        itemNumber: 28,
        mainTitle: '中區區公所',
        groupName: '漫步舊城 新好時光~',
        introduce1: '俏皮斗笠石獅跟著三百餘年歷史萬春宮媽祖，與順天宮輔順將軍一同遊歷如日據時期臺中「小京都」風情的水岸廊道，呈現舊城豐厚文化。',
    };


    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);
    const ref5 = useRef(null);
    const ref6 = useRef(null);
    const ref7 = useRef(null);
    const ref8 = useRef(null);
    const ref9 = useRef(null);
    const ref10 = useRef(null);
    const ref11 = useRef(null);
    const ref12 = useRef(null);
    const ref13 = useRef(null);
    const ref14 = useRef(null);
    const ref15 = useRef(null);
    const ref16 = useRef(null);
    const ref17 = useRef(null);
    const ref18 = useRef(null);
    const ref19 = useRef(null);
    const ref20 = useRef(null);
    const ref21 = useRef(null);
    const ref22 = useRef(null);
    const ref23 = useRef(null);
    const ref24 = useRef(null);
    const ref25 = useRef(null);
    const ref26 = useRef(null);
    const ref27 = useRef(null);
    const ref28 = useRef(null);

    const scrollToRef = (ref) => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };



    const navigate = useNavigate();
    const navigateToMyPage = () => {
        navigate('/MyPage'); // Use the route you defined for MyPage component
    };


    return (
        <div className='layout'>
            <div className='row '> 
                <div className='banner_img'>
                    <img src= {banner_img} alt=" " className='banner web-banner'/>
                    <img src= {banner_h5} alt=' ' className='banner h5-banner'/>
                </div>
                <div className='main-content'>   
                    <div className='notice-group' >
                        <div className='notice-one'>
                            <div className='index-top top'>線上投票辦法</div>
                            <div className='index-sub-light sub'>Party龍燈區評比活動即日起開跑!</div>
                            <div className='index-sub'>投票者每人每日1組手機號碼為1票,活動結束後,票選前三名的區公所燈組,將從投此名單中各抽出10位民眾,獲得臺中市十大伴手禮 (總計30份好禮)。</div>
                        </div>
                        <hr className="my-divider" />
                        
                        <div className='notice-two'>
                            <div className='index-top top'>抽獎結果公告</div>
                            <div className='index-sub'>2024年2月27日 (週二) 公布評比結果</div>
                            <div className='index-sub'>2024年3月01日 (週五) 公布伴手禮得獎名單</div>  
                        </div>  
                    </div>

                    <div className='areabutton_group'>                
                        <div className='fir_line row flex-nowrap flex-sm-wrap' >
                            <AreaButton className="col col-sm-2" number={1} text="豐原區公所" onClickAction={() => scrollToRef(ref1)} />
                            <AreaButton className="col col-sm-2" number={2} text="石岡區公所" onClickAction={() => scrollToRef(ref2)} />
                            <AreaButton className="col col-sm-2" number={3} text="大雅區公所" onClickAction={() => scrollToRef(ref3)} />
                            <AreaButton className="col col-sm-2" number={4} text="沙鹿區公所" onClickAction={() => scrollToRef(ref4)} />
                            <AreaButton className="col col-sm-2" number={5} text="龍井區公所" onClickAction={() => scrollToRef(ref5)} />
                            <AreaButton className="col col-sm-2" number={6} text="梧棲區公所" onClickAction={() => scrollToRef(ref6)}/>
                            <AreaButton className="col col-sm-2" number={7} text="大肚區公所" onClickAction={() => scrollToRef(ref7)}/>

                            <AreaButton className="col col-sm-2" number={8} text="清水區公所" onClickAction={() => scrollToRef(ref8)}/>
                            <AreaButton className="col col-sm-2" number={9} text="烏日區公所" onClickAction={() => scrollToRef(ref9)}/>
                            <AreaButton className="col col-sm-2" number={10} text="霧峰區公所" onClickAction={() => scrollToRef(ref10)}/>
                            <AreaButton className="col col-sm-2" number={11} text="南屯區公所" onClickAction={() => scrollToRef(ref11)}/>
                            <AreaButton className="col col-sm-2" number={12} text="西屯區公所" onClickAction={() => scrollToRef(ref12)}/>
                            <AreaButton className="col col-sm-2" number={13} text="北區區公所" onClickAction={() => scrollToRef(ref13)}/>
                            <AreaButton className="col col-sm-2" number={14} text="東區區公所" onClickAction={() => scrollToRef(ref14)}/>
                     
                            <AreaButton className="col col-sm-2" number={15} text="新社區公所" onClickAction={() => scrollToRef(ref15)}/>
                            <AreaButton className="col col-sm-2" number={16} text="潭子區公所" onClickAction={() => scrollToRef(ref16)}/>
                            <AreaButton className="col col-sm-2" number={17} text="后里區公所" onClickAction={() => scrollToRef(ref17)}/>
                            <AreaButton className="col col-sm-2" number={18} text="東勢區公所" onClickAction={() => scrollToRef(ref18)}/>
                            <AreaButton className="col col-sm-2" number={19} text="神岡區公所" onClickAction={() => scrollToRef(ref19)}/>
                            <AreaButton className="col col-sm-2" number={20} text="大甲區公所" onClickAction={() => scrollToRef(ref20)}/>
                            <AreaButton className="col col-sm-2" number={21} text="外埔區公所" onClickAction={() => scrollToRef(ref21)}/>

                            <AreaButton className="col col-sm-2" number={22} text="大安區公所" onClickAction={() => scrollToRef(ref22)}/>
                            <AreaButton className="col col-sm-2" number={23} text="大里區公所" onClickAction={() => scrollToRef(ref23)}/>
                            <AreaButton className="col col-sm-2" number={24} text="太平區公所" onClickAction={() => scrollToRef(ref24)}/>
                            <AreaButton className="col col-sm-2" number={25} text="南區區公所" onClickAction={() => scrollToRef(ref25)}/>
                            <AreaButton className="col col-sm-2" number={26} text="西區區公所" onClickAction={() => scrollToRef(ref26)}/>
                            <AreaButton className="col col-sm-2" number={27} text="北屯區公所" onClickAction={() => scrollToRef(ref27)}/>
                            <AreaButton className="col col-sm-2" number={28} text="中區區公所" onClickAction={() => scrollToRef(ref28)}/>

                        </div>
                    </div>

                        <UpperButton/>

                        <div className='contest_group' ref={ref1}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages1}/>
                            </div>
                               
                            <div className='right_group'>
                                    <IssueText {...issueTextContent1} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                    <VoteButton label={"投下您的一票"} />
                                    </div>
                            </div>
                        </div>

                        <div className='contest_group_double' ref={ref2}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages2}/>
                            </div>
                            
                                <div className='right_group'>
                                    <IssueText {...issueTextContent2} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group' ref={ref3}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages3}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent3} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref4}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages4}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent4} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group' ref={ref5}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages5}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent5} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref6}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages6}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent6} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref7}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages7}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent7} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref8}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages8}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent8} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref9}>
                            <div className='left_group' >
                                < WebPresent images ={carouselImages9}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent9} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref10}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages10}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent10} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref11}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages11}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent11} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double'ref={ref12}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages12}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent12} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref13}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages13}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent13} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref14}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages14}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent14} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref15}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages15}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent15} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref16}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages16}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent16} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref17}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages17}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent17} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref18}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages18}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent18} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref19}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages19}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent19} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref20}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages20}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent20} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref21}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages21}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent21} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref22}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages22}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent22} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref23}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages23}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent23} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref24}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages24}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent24} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref25}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages25}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent25} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref26}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages26}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent26} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>
                        
                        <div className='contest_group' ref={ref27}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages27}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent27} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>

                        <div className='contest_group_double' ref={ref28}>
                            <div className='left_group'>
                                < WebPresent images ={carouselImages28}/>
                            </div>
                            <div className='right_group'>
                                    <IssueText {...issueTextContent28} />
                                    <div className='vote_button' onClick={navigateToMyPage} > 
                                            <VoteButton label={"投下您的一票"} />
                                    </div>
                                </div>
                        </div>                
                </div>
            </div>
                
        </div>
    );
}
export default Home;