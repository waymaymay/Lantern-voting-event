import React, { useEffect } from 'react';
import '../../pages/mypage07/myPage07.css'
import AreaButton from '../../component/areabutton/areaButton';
import UpperButton from '../../component/upperbutton/upperButton';
import ClosePageButton from '../../component/closepagebutton/closePageButton';
import WebPresent from '../../component/part/webPresent';
import IssueText from '../../component/issuetext/IssueText';
import VoteButton from '../../component/part/votebutton/VoteButton';
import { useNavigate } from 'react-router-dom';

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



function toggleBodyScroll(isEnabled) {
    if (isEnabled) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }
  }
  

function MyPage07() {
    const header_pc = require('../../images/header_pc.png')
    const header_mb = require('../../images/header_mb.png')

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

      // 圖片區
    const carouselImages8 =[image801]; 


    //文案區
    const issueTextContent = {
        topTitle: '海線-海線龍樂活',
        itemNumber: 8,
        mainTitle: '清水區公所',
        groupName: '璀璨鰲峰 低碳永續',
        introduce1: '由稻米、甘藷、韭黃和白蘿蔔娃娃，騎乘微笑單車暢遊本區鰲峰山、高美濕地木棧道等重要景色，展現在地農業多樣性及感受清水自然風光。',

    };

    const navigate = useNavigate();

    const handleVoteClick = () => {
        navigate('/ThanksPage'); // Use the route you defined for MyPage component
    };



    return (
      <div className="page-container">
        <div className="scroll-container">
            <div className="header">
                <div className='banner_img'>
                    <img src= {header_pc} alt=" " className='header pc-banner'/>
                    <img src= {header_mb} alt=' ' className='header mb-banner'/>
                </div>
            </div>
            
            <div className="content">
                <div className='contest_group_page'>
                    <div className='left_group'>
                        < WebPresent images ={carouselImages8}/>
                    </div>
                    <div className='right_group'>
                        <IssueText {...issueTextContent} />
                    </div>
                </div>
            </div>
            <div className="info-section"> 
                    <div className='notice-group' >
                        <div className='notice-one'>
                            <div className='top_group'>
                                <div className='index-top top'>投票辦法</div>
                                <hr className="my-divider-page" />
                            </div>

                            <div className='index-sub sub'>1. 以手機號碼投票, 投票者每人每日1組手機號碼為1票。</div>
                            <div className='index-sub'>2. 活動結束後, 票選前三名的區公所燈組, 將從投此名單中各抽出10位民眾, 獲得臺中市十大伴手禮(總計30份好禮)。</div>
                            <div className='index-sub'>3. 活動將於2024.2.27(二) 公布評比結果, 2024.3.1(五) 公布伴手禮得獎名單。</div>
                        </div>

                        <div className='notice-two'>
                            <div className='index-top top'>活動注意事項</div>
                            <hr className="my-divider-page" />
                            <div className='index-sub'>1. 參加者必須依照下方的指示, 完成指定動作並填寫基本資料者, 方有抽獎資格。</div>
                            <div className='index-sub'>2. 本活動抽獎規則已詳細載明於活動網頁中, 參加者於參加本活動時, 即同意接受所有活動規則之規範。如有違反本活動規則, 主辦單位得以取消資格並依法處理。</div>  
                            <div className='index-sub'>3. 參加者保證所有填寫或提出的資料並非冒用或盜用第三人之個資或智慧財產權, 如有不實或不正確之情事或第三方提出任何法律或侵權訴訟, 得由參加者本人全權負責, 概與主辦單位無關, 同時主辦單位有權利取消該資格並將相關資料自網路活動中移除。</div>
                            <div className='index-sub'>4. 得獎者須知：</div> 
                            <div className='index-sub'>(1) 得獎者以臺中市政府民政局粉絲專頁、此網站公告為主, 並以電話通知, 收到通知者請於10日內私訊臺中市政府民政局粉絲專頁, 回覆贈品寄送之聯絡資訊, 逾時得取消資格。</div>
                            <div className='index-sub'>(2) 活動得獎者如沒有收到電話通知, 請於開獎日後 10日內私訊臺中市政府民政局粉絲專頁, 並提供中獎姓名、電話等, 以供主辦單位查驗得獎資格; 以上以私訊粉絲專頁為憑, 逾時得取消資格。</div>  
                        </div>
                        
                        <div className='notice-three'>
                            <div className='index-top top'>其他注意事項</div>
                            <hr className="my-divider-page" />
                            <div className='index-sub'>1. 主辦單位擁有保留獎品、活動時程的修改權利, 以及中獎資格審核之最終權利。</div>
                            <div className='index-sub'>2. 獎品以實物為準, 如遇產品缺貨或其他不可抗力之事由, 主辦單位得保留更換等值獎品之權利, 不另行告知。</div>  
                            <div className='index-sub'>3. 本活動若因故無法進行時, 主辦單位將於臺中市政府民政局粉絲專頁、此網站公告,並有權決定修改、暫停或取消本活動。</div>
                            <div className='index-sub'>4. 為求活動之公平及公正, 參加者若以惡意之電腦程式或其他明顯違反活動公平性之方式,意圖混淆或影響活動結果者, 一經主辦單位察覺得立即取消參加與得獎資格, 並得追回獎品及活動執行單位將保留法律追訴權力。</div> 
                            <div className='index-sub'>5. 本活動有任何因電腦、網路、技術或其他不可歸責於主辦單位之事由, 而使參與本活動者所登錄之資料有所遺失、錯誤、無法辨識或毀損所導致資料無效之情況, 活動小組不負任何法律責任, 參加者與得獎者亦不得異議。</div>
                            <div className='index-sub'>6. 同意個人基本資料無條件授權於行銷活動範圍內處理及利用。</div>  
                        </div>

                        <div className='notice-four'>
                            <div className='index-top top'>個資使用注意事項</div>
                            <hr className="my-divider-page" />
                            <div className='index-sub'>1. 針對您於登錄本網頁時所提供之個人資料, 我們除嚴格遵守中華民國個人資料保護法之規定外, 更會以非常嚴謹的態度與具體作為, 來管理及保護您的個人資料, 以下為本公司對您個人資料保護的說明, 請您詳細閱讀及了解。</div>
                            <div className='index-sub'>2. 個人資料蒐集目的：主辦單位: 臺中市政府民政局為行銷、進行本抽獎活動及提供本公司各項產品訊息之目的範圍內，依法令規定蒐集、處理及利用參加本活動者之個人資料。</div>  
                            <div className='index-sub'>3. 蒐集資料類別：您提供於抽獎頁面上之各項個人資料（包括但不限於姓名、電話）。依據個人資料保護法，參加本活動者視為了解及同意本公司於抽獎及行銷活動之需要進行蒐集、處理及利用其個人資料(僅限電話等資訊)。</div>
                            <div className='index-sub'>4. 個人資料利用之期間、地區、對象及方式:(1)期間:2024/02/16-02/25  (2)地區:台澎金馬地區 (3)對象:參與本活動投票者 (4)方式：以自動化機器或其他非自動化之利用方式。</div> 
                        </div>

                        <label className="terms">
                            <input type="checkbox" id="agree" />
                            已詳讀並同意以上辦法
                        </label>
                    </div>
            </div>
        </div>

          <div className="person_data">
          <div class="input-group">
                <label for="name">姓名：</label>
                <input type="text" id="name" placeholder="您的姓名" />
            </div>
            <div class="input-group">
                <label for="feedback">手機號碼：</label>
                <input type="text" id="feedback" placeholder="您的手機號碼" />
            </div>
           
                <label className="terms">
                    <input type="checkbox" id="agree" />
                        個資聲明及同意
                </label>
            

            <div className='vote_button_page' > 
                <VoteButton label={"投票"} onClick={handleVoteClick}  />
            </div>

             </div>
          </div>
        
    
    );
  }
  
  export default MyPage07;