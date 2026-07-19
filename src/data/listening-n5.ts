// AUTO-GENERATED listening scripts for N5. Assembled from verified
// fragments; regenerate rather than hand-editing. Audio: scripts/gen-audio.mjs.
import type { Listening } from '../types'

export const N5_LISTENING: Listening[] = [
  {
    "id": "listening:N5:apple-shop",
    "level": "N5",
    "title": "くだものの買[か]い物[もの]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません。このりんごは いくらですか。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "一[ひと]つ 百円[ひゃくえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、三[みっ]つ ください。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "はい、ぜんぶで 三百円[さんびゃくえん]です。"
      }
    ],
    "translation": "Woman: Excuse me. How much are these apples?\nShopkeeper (man): They are 100 yen each.\nWoman: Then three, please.\nShopkeeper (man): OK, that is 300 yen in total.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は りんごを いくつ 買[か]いますか。",
        "questionTranslation": "How many apples does the woman buy?",
        "options": [
          {
            "text": "一つ",
            "explanation": "Wrong — 100 yen is the price of one apple, not how many she buys."
          },
          {
            "text": "二つ",
            "explanation": "Wrong — the number two is never mentioned."
          },
          {
            "text": "三つ",
            "explanation": "Correct — she says 三つください (three, please)."
          },
          {
            "text": "四つ",
            "explanation": "Wrong — the number four is never mentioned."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "りんごは ぜんぶで いくらですか。",
        "questionTranslation": "How much are the apples in total?",
        "options": [
          {
            "text": "百円",
            "explanation": "Wrong — 100 yen is the price of ONE apple."
          },
          {
            "text": "二百円",
            "explanation": "Wrong — this amount is never mentioned."
          },
          {
            "text": "三百円",
            "explanation": "Correct — the shopkeeper says ぜんぶで三百円です (300 yen in total)."
          },
          {
            "text": "四百円",
            "explanation": "Wrong — this amount is never mentioned."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:station-announcement",
    "level": "N5",
    "title": "駅[えき]のアナウンス",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "まもなく、三番線[さんばんせん]に 東京行[とうきょうゆ]きの 電車[でんしゃ]が きます。あぶないですから、黄色[きいろ]い 線[せん]の 内側[うちがわ]で お待[ま]ちください。"
      }
    ],
    "translation": "Announcement: The train bound for Tokyo will soon arrive at track 3. It is dangerous, so please wait inside the yellow line.",
    "questions": [
      {
        "question": "電車[でんしゃ]は どこに きますか。",
        "questionTranslation": "Where will the train arrive?",
        "options": [
          {
            "text": "一番線",
            "explanation": "Wrong — track 1 is never mentioned."
          },
          {
            "text": "二番線",
            "explanation": "Wrong — track 2 is never mentioned."
          },
          {
            "text": "三番線",
            "explanation": "Correct — the announcement says the train arrives at 三番線 (track 3)."
          },
          {
            "text": "四番線",
            "explanation": "Wrong — track 4 is never mentioned."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "人[ひと]は どこで 電車[でんしゃ]を 待[ま]ちますか。",
        "questionTranslation": "Where should people wait for the train?",
        "options": [
          {
            "text": "黄色い線の内側",
            "explanation": "Correct — the announcement says 黄色い線の内側でお待ちください (wait inside the yellow line)."
          },
          {
            "text": "黄色い線の外側",
            "explanation": "Wrong — outside the yellow line is the dangerous side; the announcement says the opposite."
          },
          {
            "text": "電車の中",
            "explanation": "Wrong — the train has not arrived yet, so no one can wait inside it."
          },
          {
            "text": "かいだんの下",
            "explanation": "Wrong — stairs are never mentioned."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:a-cafe-order",
    "level": "N5",
    "title": "きっさてんで",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、コーヒーを一[ひと]つください。"
      },
      {
        "speaker": "女[おんな]の店[みせ]の人[ひと]",
        "text": "はい。コーヒーは三百円[さんびゃくえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "サンドイッチもありますか。"
      },
      {
        "speaker": "女[おんな]の店[みせ]の人[ひと]",
        "text": "はい、あります。サンドイッチは四百円[よんひゃくえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃ、コーヒーとサンドイッチをください。"
      },
      {
        "speaker": "女[おんな]の店[みせ]の人[ひと]",
        "text": "ありがとうございます。全部[ぜんぶ]で七百円[ななひゃくえん]です。"
      }
    ],
    "translation": "Man: Excuse me, one coffee please.\nClerk (woman): Yes. Coffee is 300 yen.\nMan: Do you have sandwiches too?\nClerk (woman): Yes, we do. A sandwich is 400 yen.\nMan: Then I'll have a coffee and a sandwich.\nClerk (woman): Thank you. That comes to 700 yen in total.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は何[なに]を買[か]いますか。",
        "questionTranslation": "What does the man buy?",
        "options": [
          {
            "text": "コーヒーだけ",
            "explanation": "He starts by ordering coffee, but he then adds a sandwich, so coffee alone is not his final order."
          },
          {
            "text": "サンドイッチだけ",
            "explanation": "He asks whether they have sandwiches, but he orders it together with coffee, not by itself."
          },
          {
            "text": "コーヒーとサンドイッチ",
            "explanation": "Correct. The man says コーヒーとサンドイッチをください (a coffee and a sandwich, please)."
          },
          {
            "text": "おちゃとサンドイッチ",
            "explanation": "Tea is never mentioned in the conversation; the drink he orders is coffee."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "全部[ぜんぶ]でいくらですか。",
        "questionTranslation": "How much is it in total?",
        "options": [
          {
            "text": "三百円",
            "explanation": "300 yen is the price of the coffee alone, not the total."
          },
          {
            "text": "七百円",
            "explanation": "Correct. The clerk says 全部で七百円です (it is 700 yen in total): 300 yen for coffee plus 400 yen for the sandwich."
          },
          {
            "text": "四百円",
            "explanation": "400 yen is the price of the sandwich alone, not the total."
          },
          {
            "text": "千円",
            "explanation": "1,000 yen is never mentioned; the total the clerk states is 700 yen."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:a-tshirt-size",
    "level": "N5",
    "title": "Tシャツを買[か]う",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、このTシャツのMサイズはありますか。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "白[しろ]はSサイズだけです。青[あお]はMサイズがありますよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃ、青[あお]いのをください。いくらですか。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "千五百円[せんごひゃくえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、お願[ねが]いします。"
      }
    ],
    "translation": "Woman: Excuse me, do you have this T-shirt in size M?\nClerk (man): The white one only comes in S. The blue one is available in M.\nWoman: Then I'll take the blue one. How much is it?\nClerk (man): It's 1,500 yen.\nWoman: OK, I'll take it.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどのTシャツを買[か]いますか。",
        "questionTranslation": "Which T-shirt does the woman buy?",
        "options": [
          {
            "text": "青いMサイズ",
            "explanation": "Correct. The clerk says the blue one comes in M, and the woman answers 青いのをください (the blue one, please)."
          },
          {
            "text": "白いSサイズ",
            "explanation": "The white shirt only comes in S, but the woman wants size M, so she does not buy the white one."
          },
          {
            "text": "白いMサイズ",
            "explanation": "The clerk says the white one is available only in S, so a white M does not exist in the shop."
          },
          {
            "text": "青いSサイズ",
            "explanation": "The woman asked for size M, and the blue shirt she buys is an M, not an S."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "Tシャツはいくらですか。",
        "questionTranslation": "How much is the T-shirt?",
        "options": [
          {
            "text": "五百円",
            "explanation": "500 yen is not mentioned; the clerk states a higher price."
          },
          {
            "text": "千円",
            "explanation": "1,000 yen is not mentioned; the clerk states a different price."
          },
          {
            "text": "五千円",
            "explanation": "5,000 yen mixes up the digits; the clerk says a much lower price."
          },
          {
            "text": "千五百円",
            "explanation": "Correct. The clerk says 千五百円です (it is 1,500 yen)."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:a-movie-time",
    "level": "N5",
    "title": "映画[えいが]の時間[じかん]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "映画[えいが]は何時[なんじ]からですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "三時半[さんじはん]からですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "今[いま]、何時[なんじ]ですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "二時[にじ]です。まだ時間[じかん]がありますね。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃ、まずきっさてんでお茶[ちゃ]を飲[の]みましょう。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。"
      }
    ],
    "translation": "Woman: What time does the movie start?\nMan: It starts at 3:30.\nWoman: What time is it now?\nMan: It's 2 o'clock. We still have time.\nWoman: Then let's have tea at a cafe first.\nMan: Sounds good.",
    "questions": [
      {
        "question": "映画[えいが]は何時[なんじ]からですか。",
        "questionTranslation": "What time does the movie start?",
        "options": [
          {
            "text": "三時",
            "explanation": "3:00 is close, but the man says the movie starts at half past three, not three."
          },
          {
            "text": "三時半",
            "explanation": "Correct. The man says 三時半からですよ (it starts at 3:30)."
          },
          {
            "text": "二時",
            "explanation": "2:00 is the current time, not the movie's start time."
          },
          {
            "text": "二時半",
            "explanation": "2:30 is never mentioned; the current time is 2:00 and the movie starts at 3:30."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "二人[ふたり]は映画[えいが]の前[まえ]に何[なに]をしますか。",
        "questionTranslation": "What will the two of them do before the movie?",
        "options": [
          {
            "text": "お茶を飲む",
            "explanation": "Correct. The woman suggests まずきっさてんでお茶を飲みましょう (let's have tea at a cafe first), and the man agrees."
          },
          {
            "text": "映画を見る",
            "explanation": "Watching the movie is what they will do afterward; the question asks what they do before it."
          },
          {
            "text": "ばんごはんを食べる",
            "explanation": "Eating dinner is never mentioned in the conversation."
          },
          {
            "text": "買い物をする",
            "explanation": "Shopping is never mentioned; the plan before the movie is to drink tea."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:a-library-where",
    "level": "N5",
    "title": "図書館[としょかん]はどこ",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、図書館[としょかん]はどこですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あの銀行[ぎんこう]のとなりですよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "銀行[ぎんこう]のとなりですね。ここからとおいですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいえ、歩[ある]いて五分[ごふん]ぐらいです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうですか。ありがとうございます。"
      }
    ],
    "translation": "Man: Excuse me, where is the library?\nWoman: It's next to that bank.\nMan: Next to the bank, right. Is it far from here?\nWoman: No, it's about five minutes on foot.\nMan: I see. Thank you very much.",
    "questions": [
      {
        "question": "図書館[としょかん]はどこにありますか。",
        "questionTranslation": "Where is the library?",
        "options": [
          {
            "text": "駅の前",
            "explanation": "A station is never mentioned in the conversation."
          },
          {
            "text": "学校のとなり",
            "explanation": "A school is never mentioned; the library is next to a different building."
          },
          {
            "text": "銀行の中",
            "explanation": "The library is next to the bank, not inside it."
          },
          {
            "text": "銀行のとなり",
            "explanation": "Correct. The woman says あの銀行のとなりですよ (it is next to that bank)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "図書館[としょかん]まで歩[ある]いてどのぐらいかかりますか。",
        "questionTranslation": "About how long does it take to walk to the library?",
        "options": [
          {
            "text": "十五分",
            "explanation": "Fifteen minutes is not what the woman says; she gives a shorter time."
          },
          {
            "text": "五十分",
            "explanation": "Fifty minutes reverses the digits; the woman says a much shorter time."
          },
          {
            "text": "五分",
            "explanation": "Correct. The woman says 歩いて五分ぐらいです (about five minutes on foot)."
          },
          {
            "text": "十分",
            "explanation": "Ten minutes is not mentioned; the woman says about five minutes."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:a-homework-deadline",
    "level": "N5",
    "title": "宿題[しゅくだい]はいつまで",
    "script": [
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "先生[せんせい]、宿題[しゅくだい]はいつまでですか。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "金曜日[きんようび]までですよ。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "何[なん]ページですか。"
      },
      {
        "speaker": "女[おんな]の先生[せんせい]",
        "text": "二十[にじゅう]ページから二十二[にじゅうに]ページまでです。"
      },
      {
        "speaker": "男[おとこ]の学生[がくせい]",
        "text": "わかりました。ありがとうございます。"
      }
    ],
    "translation": "Male student: Teacher, when is the homework due?\nFemale teacher: It's due Friday.\nMale student: Which pages?\nFemale teacher: From page 20 to page 22.\nMale student: I understand. Thank you.",
    "questions": [
      {
        "question": "宿題[しゅくだい]はいつまでですか。",
        "questionTranslation": "When is the homework due?",
        "options": [
          {
            "text": "金曜日",
            "explanation": "Correct. The teacher says 金曜日までですよ (it is due by Friday)."
          },
          {
            "text": "月曜日",
            "explanation": "Monday is never mentioned; the teacher says the deadline is Friday."
          },
          {
            "text": "水曜日",
            "explanation": "Wednesday is never mentioned; the teacher says the deadline is Friday."
          },
          {
            "text": "土曜日",
            "explanation": "Saturday is never mentioned; the teacher says the deadline is Friday."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "宿題[しゅくだい]はどこからどこまでですか。",
        "questionTranslation": "Which pages is the homework?",
        "options": [
          {
            "text": "12ページから22ページまで",
            "explanation": "The homework starts at page 20, not page 12."
          },
          {
            "text": "20ページから22ページまで",
            "explanation": "Correct. The teacher says 二十ページから二十二ページまでです (from page 20 to page 22)."
          },
          {
            "text": "20ページから25ページまで",
            "explanation": "The homework ends at page 22, not page 25."
          },
          {
            "text": "2ページから22ページまで",
            "explanation": "The homework starts at page 20, not page 2."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:a-test-day",
    "level": "N5",
    "title": "テストの日[ひ]",
    "script": [
      {
        "speaker": "女[おんな]の学生[がくせい]",
        "text": "先生[せんせい]、テストは何曜日[なんようび]ですか。"
      },
      {
        "speaker": "男[おとこ]の先生[せんせい]",
        "text": "木曜日[もくようび]ですよ。九時[くじ]から始[はじ]まります。"
      },
      {
        "speaker": "女[おんな]の学生[がくせい]",
        "text": "何[なに]を持[も]って来[き]ますか。"
      },
      {
        "speaker": "男[おとこ]の先生[せんせい]",
        "text": "えんぴつとけしゴムだけです。じしょは使[つか]わないでください。"
      },
      {
        "speaker": "女[おんな]の学生[がくせい]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Female student: Teacher, what day is the test?\nMale teacher: It's Thursday. It starts at 9 o'clock.\nFemale student: What should we bring?\nMale teacher: Only a pencil and an eraser. Please don't use a dictionary.\nFemale student: Yes, I understand.",
    "questions": [
      {
        "question": "テストはいつですか。",
        "questionTranslation": "When is the test?",
        "options": [
          {
            "text": "火曜日の9時",
            "explanation": "The day is wrong: the test is on Thursday, not Tuesday."
          },
          {
            "text": "木曜日の10時",
            "explanation": "The day is right, but the test starts at 9 o'clock, not 10."
          },
          {
            "text": "木曜日の9時",
            "explanation": "Correct. The teacher says 木曜日ですよ。九時から始まります (it is Thursday; it starts at 9 o'clock)."
          },
          {
            "text": "金曜日の9時",
            "explanation": "The time is right, but the test is on Thursday, not Friday."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "学生[がくせい]はテストに何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What will the students take to the test?",
        "options": [
          {
            "text": "じしょとえんぴつ",
            "explanation": "The teacher explicitly says じしょは使わないでください (please don't use a dictionary), so a dictionary is not allowed."
          },
          {
            "text": "けしゴムだけ",
            "explanation": "An eraser alone is not enough; the teacher says to bring a pencil and an eraser."
          },
          {
            "text": "じしょだけ",
            "explanation": "A dictionary is exactly what the teacher tells them not to use."
          },
          {
            "text": "えんぴつとけしゴム",
            "explanation": "Correct. The teacher says えんぴつとけしゴムだけです (only a pencil and an eraser)."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:a-shopping-with-mother",
    "level": "N5",
    "title": "明日[あした]の買[か]い物[もの]",
    "script": [
      {
        "speaker": "男[おとこ]の子[こ]",
        "text": "お母[かあ]さん、明日[あした]どこかへ行[い]きますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "午前中[ごぜんちゅう]はスーパーへ行[い]きますよ。"
      },
      {
        "speaker": "男[おとこ]の子[こ]",
        "text": "ぼくも行[い]きたいです。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですよ。午後[ごご]はおばあちゃんの家[いえ]へ行[い]きます。"
      },
      {
        "speaker": "男[おとこ]の子[こ]",
        "text": "じゃ、スーパーでケーキを買[か]いましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですね。おばあちゃんはケーキが好[す]きですから。"
      }
    ],
    "translation": "Boy: Mom, are we going anywhere tomorrow?\nWoman (mother): In the morning I'm going to the supermarket.\nBoy: I want to go too.\nWoman (mother): Sure. In the afternoon we're going to Grandma's house.\nBoy: Then let's buy a cake at the supermarket.\nWoman (mother): Good idea. Grandma likes cake.",
    "questions": [
      {
        "question": "二人[ふたり]は午前中[ごぜんちゅう]、どこへ行[い]きますか。",
        "questionTranslation": "Where will the two of them go in the morning?",
        "options": [
          {
            "text": "おばあちゃんの家",
            "explanation": "Grandma's house is the afternoon plan, not the morning one."
          },
          {
            "text": "スーパー",
            "explanation": "Correct. The mother says 午前中はスーパーへ行きますよ (in the morning I'm going to the supermarket), and the boy joins her."
          },
          {
            "text": "学校",
            "explanation": "School is never mentioned in the conversation."
          },
          {
            "text": "デパート",
            "explanation": "A department store is never mentioned; they go to the supermarket."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "二人[ふたり]は午後[ごご]、何[なに]をしますか。",
        "questionTranslation": "What will the two of them do in the afternoon?",
        "options": [
          {
            "text": "おばあちゃんの家へ行く",
            "explanation": "Correct. The mother says 午後はおばあちゃんの家へ行きます (in the afternoon we're going to Grandma's house)."
          },
          {
            "text": "スーパーへ行く",
            "explanation": "The supermarket is the morning plan, not the afternoon one."
          },
          {
            "text": "ケーキを作る",
            "explanation": "They plan to buy a cake at the supermarket, not make one."
          },
          {
            "text": "家でテレビを見る",
            "explanation": "Watching TV at home is never mentioned in the conversation."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:a-dinner-tonight",
    "level": "N5",
    "title": "今日[きょう]の晩[ばん]ご飯[はん]",
    "script": [
      {
        "speaker": "女[おんな]の子[こ]",
        "text": "お父[とう]さん、今日[きょう]の晩[ばん]ご飯[はん]は何[なん]ですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "カレーですよ。"
      },
      {
        "speaker": "女[おんな]の子[こ]",
        "text": "やった!何時[なんじ]に食[た]べますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "七時[しちじ]です。その前[まえ]におふろに入[はい]ってくださいね。"
      },
      {
        "speaker": "女[おんな]の子[こ]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Girl: Dad, what's for dinner today?\nMan (father): It's curry.\nGirl: Yay! What time are we eating?\nMan (father): At 7 o'clock. Please take a bath before then.\nGirl: OK, I will.",
    "questions": [
      {
        "question": "今日[きょう]の晩[ばん]ご飯[はん]は何[なん]ですか。",
        "questionTranslation": "What is for dinner today?",
        "options": [
          {
            "text": "すし",
            "explanation": "Sushi is never mentioned in the conversation."
          },
          {
            "text": "ラーメン",
            "explanation": "Ramen is never mentioned in the conversation."
          },
          {
            "text": "サラダ",
            "explanation": "Salad is never mentioned in the conversation."
          },
          {
            "text": "カレー",
            "explanation": "Correct. The father says カレーですよ (it's curry)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "女[おんな]の子[こ]は晩[ばん]ご飯[はん]の前[まえ]に何[なに]をしますか。",
        "questionTranslation": "What will the girl do before dinner?",
        "options": [
          {
            "text": "宿題をする",
            "explanation": "Homework is never mentioned in the conversation."
          },
          {
            "text": "テレビを見る",
            "explanation": "Watching TV is never mentioned in the conversation."
          },
          {
            "text": "おふろに入る",
            "explanation": "Correct. The father says その前におふろに入ってくださいね (please take a bath before then), and the girl agrees."
          },
          {
            "text": "カレーを作る",
            "explanation": "The father is the one handling dinner; the girl is told to take a bath, not to cook."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:a-ramen-shop",
    "level": "N5",
    "title": "ラーメン屋[や]で",
    "script": [
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "いらっしゃいませ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ラーメンを一[ひと]つください。それから、ジュースもお願[ねが]いします。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "ジュースは大[おお]きいのが二百円[にひゃくえん]、小[ちい]さいのが百円[ひゃくえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "小[ちい]さいのをください。"
      },
      {
        "speaker": "男[おとこ]の店[みせ]の人[ひと]",
        "text": "はい。ラーメンが五百円[ごひゃくえん]ですから、全部[ぜんぶ]で六百円[ろっぴゃくえん]です。"
      }
    ],
    "translation": "Clerk (man): Welcome!\nWoman: One ramen, please. And a juice as well.\nClerk (man): For juice, the large is 200 yen and the small is 100 yen.\nWoman: I'll have the small one.\nClerk (man): Certainly. The ramen is 500 yen, so it's 600 yen in total.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は何[なに]を買[か]いますか。",
        "questionTranslation": "What does the woman buy?",
        "options": [
          {
            "text": "ラーメンと小さいジュース",
            "explanation": "Correct. She orders one ramen and then says 小さいのをください (the small one, please) about the juice."
          },
          {
            "text": "ラーメンと大きいジュース",
            "explanation": "She chooses the small juice, not the large one."
          },
          {
            "text": "ラーメンだけ",
            "explanation": "She also orders a juice, so ramen alone is not her full order."
          },
          {
            "text": "ジュースだけ",
            "explanation": "She orders a ramen first, so juice alone is not her full order."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "全部[ぜんぶ]でいくらですか。",
        "questionTranslation": "How much is it in total?",
        "options": [
          {
            "text": "五百円",
            "explanation": "500 yen is the price of the ramen alone, not the total."
          },
          {
            "text": "六百円",
            "explanation": "Correct. The clerk says 全部で六百円です (it is 600 yen in total): 500 yen for ramen plus 100 yen for the small juice."
          },
          {
            "text": "七百円",
            "explanation": "700 yen would be the total with the large juice, but she chose the small one."
          },
          {
            "text": "百円",
            "explanation": "100 yen is the price of the small juice alone, not the total."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:b-school-pool-closed",
    "level": "N5",
    "title": "学校[がっこう]のプールのお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさん、こんにちは。明日[あした]、学校[がっこう]のプールは休[やす]みです。あさっては午前九時[ごぜんくじ]から使[つか]うことができます。"
      }
    ],
    "translation": "Announcement: Hello, everyone. Tomorrow, the school pool will be closed. The day after tomorrow, you can use it from 9 a.m.",
    "questions": [
      {
        "question": "プールはいつ休[やす]みですか。",
        "questionTranslation": "When is the pool closed?",
        "options": [
          {
            "text": "今日",
            "explanation": "The announcement is about tomorrow, not today. Nothing is said about the pool being closed today."
          },
          {
            "text": "明日",
            "explanation": "Correct. The announcement says 明日、学校のプールは休みです (tomorrow, the school pool is closed)."
          },
          {
            "text": "あさって",
            "explanation": "The day after tomorrow the pool reopens — the announcement says it can be used from 9 a.m. that day."
          },
          {
            "text": "日曜日",
            "explanation": "Sunday is never mentioned in the announcement; the pool is closed tomorrow."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "あさって、プールは何時[なんじ]からですか。",
        "questionTranslation": "From what time can the pool be used the day after tomorrow?",
        "options": [
          {
            "text": "午前八時から",
            "explanation": "Eight o'clock is not mentioned; the announcement gives 9 a.m. as the opening time."
          },
          {
            "text": "午前十時から",
            "explanation": "Ten o'clock is not mentioned; the announcement gives 9 a.m. as the opening time."
          },
          {
            "text": "午前九時から",
            "explanation": "Correct. The announcement says あさっては午前九時から使うことができます (the day after tomorrow it can be used from 9 a.m.)."
          },
          {
            "text": "午後九時から",
            "explanation": "The announcement says 午前九時 (9 a.m.), not 9 p.m."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:b-supermarket-apple-sale",
    "level": "N5",
    "title": "スーパーのお知[し]らせ",
    "script": [
      {
        "speaker": "店[みせ]の人[ひと]",
        "text": "いらっしゃいませ。今日[きょう]、りんごは三[みっ]つで二百円[にひゃくえん]です。りんごの売[う]り場[ば]は二階[にかい]です。"
      }
    ],
    "translation": "Store clerk: Welcome! Today, apples are three for 200 yen. The apple section is on the second floor.",
    "questions": [
      {
        "question": "りんごは三[みっ]つでいくらですか。",
        "questionTranslation": "How much are three apples?",
        "options": [
          {
            "text": "百円",
            "explanation": "The announcement says 200 yen for three apples, not 100 yen."
          },
          {
            "text": "三百円",
            "explanation": "The announcement says 200 yen for three apples; 300 is the number of yen mixed up with the number of apples (three)."
          },
          {
            "text": "五百円",
            "explanation": "500 yen is never mentioned in the announcement."
          },
          {
            "text": "二百円",
            "explanation": "Correct. The clerk says 三つで二百円です (three for 200 yen)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "りんごの売[う]り場[ば]はどこですか。",
        "questionTranslation": "Where is the apple section?",
        "options": [
          {
            "text": "一階です",
            "explanation": "The first floor is not mentioned; the clerk says the apple section is on the second floor."
          },
          {
            "text": "二階です",
            "explanation": "Correct. The clerk says りんごの売り場は二階です (the apple section is on the second floor)."
          },
          {
            "text": "三階です",
            "explanation": "The third floor is not mentioned; the apple section is on the second floor."
          },
          {
            "text": "四階です",
            "explanation": "The fourth floor is not mentioned; the apple section is on the second floor."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:b-sports-day-postponed",
    "level": "N5",
    "title": "うんどうかいのお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさん、おはようございます。今日[きょう]のうんどうかいは、雨[あめ]ですから、ありません。来週[らいしゅう]の土曜日[どようび]にします。"
      }
    ],
    "translation": "Announcement: Good morning, everyone. Today's sports day is cancelled because of rain. It will be held next Saturday instead.",
    "questions": [
      {
        "question": "今日[きょう]、どうしてうんどうかいがありませんか。",
        "questionTranslation": "Why is there no sports day today?",
        "options": [
          {
            "text": "雨が降るから",
            "explanation": "Correct. The announcement says 雨ですから、ありません (because it is raining, it will not be held)."
          },
          {
            "text": "雪が降るから",
            "explanation": "Snow is never mentioned; the reason given is rain."
          },
          {
            "text": "寒いから",
            "explanation": "Cold weather is never mentioned; the reason given is rain."
          },
          {
            "text": "先生が休みだから",
            "explanation": "Nothing is said about a teacher being absent; the reason given is rain."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "うんどうかいはいつになりましたか。",
        "questionTranslation": "When will the sports day be held instead?",
        "options": [
          {
            "text": "今日の午後",
            "explanation": "Sports day is cancelled for today entirely; it is moved to next Saturday, not this afternoon."
          },
          {
            "text": "明日",
            "explanation": "Tomorrow is never mentioned; the announcement says it will be next Saturday."
          },
          {
            "text": "来週の土曜日",
            "explanation": "Correct. The announcement says 来週の土曜日にします (it will be held next Saturday)."
          },
          {
            "text": "来週の日曜日",
            "explanation": "The announcement says next Saturday (土曜日), not Sunday (日曜日)."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:b-movie-phone-message",
    "level": "N5",
    "title": "友[とも]だちからのでんわ",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "もしもし、田中[たなか]さん。山田[やまだ]です。明日[あした]の映画[えいが]は三時[さんじ]からですよ。二時半[にじはん]に映画館[えいがかん]の前[まえ]で会[あ]いましょう。"
      }
    ],
    "translation": "Woman: Hello, Tanaka-san. This is Yamada. Tomorrow's movie starts at three o'clock. Let's meet in front of the movie theater at two thirty.",
    "questions": [
      {
        "question": "映画[えいが]は何時[なんじ]からですか。",
        "questionTranslation": "What time does the movie start?",
        "options": [
          {
            "text": "二時",
            "explanation": "Two o'clock is not mentioned; the movie starts at three, and the meeting time is two thirty."
          },
          {
            "text": "二時半",
            "explanation": "Two thirty is the time they will meet in front of the theater, not the time the movie starts."
          },
          {
            "text": "三時",
            "explanation": "Correct. The message says 映画は三時からですよ (the movie starts at three o'clock)."
          },
          {
            "text": "三時半",
            "explanation": "Three thirty is not mentioned; the movie starts at three o'clock."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "二人[ふたり]はどこで会[あ]いますか。",
        "questionTranslation": "Where will the two of them meet?",
        "options": [
          {
            "text": "駅の前",
            "explanation": "A station is never mentioned; they will meet in front of the movie theater."
          },
          {
            "text": "学校の前",
            "explanation": "A school is never mentioned; they will meet in front of the movie theater."
          },
          {
            "text": "田中さんの家",
            "explanation": "Tanaka-san's house is never mentioned as the meeting place; they will meet in front of the movie theater."
          },
          {
            "text": "映画館の前",
            "explanation": "Correct. The message says 映画館の前で会いましょう (let's meet in front of the movie theater)."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:b-sunday-park-plans",
    "level": "N5",
    "title": "日曜日[にちようび]のやくそく",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "もしもし、ゆきさんですか。けんです。日曜日[にちようび]、いっしょに公園[こうえん]へ行[い]きませんか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですね。何時[なんじ]がいいですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "午前十時[ごぜんじゅうじ]はどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、午前[ごぜん]はちょっと…。午後一時[ごごいちじ]はどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですよ。じゃあ、公園[こうえん]の入[い]り口[ぐち]で会[あ]いましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Man: Hello, is this Yuki? It's Ken. Won't you go to the park with me on Sunday?\nWoman: That sounds nice. What time is good?\nMan: How about 10 a.m.?\nWoman: Sorry, the morning is a bit difficult... How about 1 p.m.?\nMan: That's fine. Then let's meet at the park entrance.\nWoman: Okay, understood.",
    "questions": [
      {
        "question": "二人[ふたり]は何時[なんじ]に会[あ]いますか。",
        "questionTranslation": "What time will the two of them meet?",
        "options": [
          {
            "text": "午前十時",
            "explanation": "The man suggests 10 a.m., but the woman says 午前はちょっと… (the morning is a bit difficult), so they do not meet then."
          },
          {
            "text": "午前十一時",
            "explanation": "Eleven o'clock is never mentioned in the conversation."
          },
          {
            "text": "午後二時",
            "explanation": "Two p.m. is never mentioned; the woman proposes 1 p.m. and the man agrees."
          },
          {
            "text": "午後一時",
            "explanation": "Correct. The woman suggests 午後一時はどうですか (how about 1 p.m.?) and the man answers いいですよ (that's fine)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "二人[ふたり]はどこで会[あ]いますか。",
        "questionTranslation": "Where will the two of them meet?",
        "options": [
          {
            "text": "公園の入り口",
            "explanation": "Correct. The man says 公園の入り口で会いましょう (let's meet at the park entrance)."
          },
          {
            "text": "駅の前",
            "explanation": "A station is never mentioned; they will meet at the park entrance."
          },
          {
            "text": "公園の中",
            "explanation": "They will meet at the entrance of the park, not inside the park."
          },
          {
            "text": "映画館の前",
            "explanation": "A movie theater is never mentioned; they will meet at the park entrance."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:b-birthday-party-call",
    "level": "N5",
    "title": "たんじょうびパーティーのでんわ",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "もしもし、たかしさん?あきこです。土曜日[どようび]、わたしのたんじょうびパーティーに来[き]ませんか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。何時[なんじ]からですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "午後六時[ごごろくじ]からです。わたしの家[いえ]でします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。何[なに]か持[も]って行[い]きましょうか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、飲[の]み物[もの]をおねがいします。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Woman: Hello, Takashi? It's Akiko. Won't you come to my birthday party on Saturday?\nMan: Sounds great. What time does it start?\nWoman: It starts at 6 p.m. It will be at my house.\nMan: Got it. Shall I bring something?\nWoman: Then please bring drinks.\nMan: Okay, understood.",
    "questions": [
      {
        "question": "パーティーは何時[なんじ]からですか。",
        "questionTranslation": "What time does the party start?",
        "options": [
          {
            "text": "午後五時",
            "explanation": "Five o'clock is never mentioned; the party starts at 6 p.m."
          },
          {
            "text": "午後六時",
            "explanation": "Correct. The woman says 午後六時からです (it starts at 6 p.m.)."
          },
          {
            "text": "午後七時",
            "explanation": "Seven o'clock is never mentioned; the party starts at 6 p.m."
          },
          {
            "text": "午前六時",
            "explanation": "The party is at 6 in the evening (午後), not 6 in the morning (午前)."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "男[おとこ]の人[ひと]は何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What will the man bring?",
        "options": [
          {
            "text": "食べ物",
            "explanation": "Food is not requested; the woman asks for drinks."
          },
          {
            "text": "ケーキ",
            "explanation": "A cake is never mentioned in the conversation; the woman asks for drinks."
          },
          {
            "text": "花",
            "explanation": "Flowers are never mentioned in the conversation; the woman asks for drinks."
          },
          {
            "text": "飲み物",
            "explanation": "Correct. The woman says 飲み物をおねがいします (please bring drinks) and the man agrees."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:b-post-office-directions",
    "level": "N5",
    "title": "ゆうびんきょくはどこですか",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません。この近[ちか]くにゆうびんきょくはありますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、ありますよ。この道[みち]をまっすぐ行[い]ってください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "二[ふた]つ目[め]のかどを右[みぎ]にまがってください。ゆうびんきょくは銀行[ぎんこう]のとなりにあります。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "二[ふた]つ目[め]のかどを右[みぎ]ですね。ありがとうございます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいえ、どういたしまして。"
      }
    ],
    "translation": "Man: Excuse me. Is there a post office near here?\nWoman: Yes, there is. Please go straight down this street.\nMan: Okay.\nWoman: Turn right at the second corner. The post office is next to the bank.\nMan: Right at the second corner, got it. Thank you.\nWoman: Not at all, you're welcome.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]はどこへ行[い]きたいですか。",
        "questionTranslation": "Where does the man want to go?",
        "options": [
          {
            "text": "ゆうびんきょく",
            "explanation": "Correct. The man asks この近くにゆうびんきょくはありますか (is there a post office near here?)."
          },
          {
            "text": "銀行",
            "explanation": "The bank is only mentioned as a landmark — the post office is next to it. The man is looking for the post office."
          },
          {
            "text": "スーパー",
            "explanation": "A supermarket is never mentioned in the conversation."
          },
          {
            "text": "学校",
            "explanation": "A school is never mentioned in the conversation."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "男[おとこ]の人[ひと]はどこをまがりますか。",
        "questionTranslation": "Where should the man turn?",
        "options": [
          {
            "text": "一つ目のかどを右",
            "explanation": "The woman says the second corner, not the first."
          },
          {
            "text": "二つ目のかどを右",
            "explanation": "Correct. The woman says 二つ目のかどを右にまがってください (please turn right at the second corner)."
          },
          {
            "text": "二つ目のかどを左",
            "explanation": "The corner is correct, but the direction is wrong — the woman says to turn right, not left."
          },
          {
            "text": "一つ目のかどを左",
            "explanation": "Both the corner and the direction are wrong — the woman says to turn right at the second corner."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:b-flower-shop-directions",
    "level": "N5",
    "title": "花[はな]やへの道[みち]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、この近[ちか]くに花[はな]やはありますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい。あの白[しろ]いビルの中[なか]にありますよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あの高[たか]いビルですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいえ、高[たか]いビルじゃありません。レストランの前[まえ]の白[しろ]いビルです。花[はな]やは二階[にかい]にあります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかりました。ありがとうございます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "どういたしまして。"
      }
    ],
    "translation": "Woman: Excuse me, is there a flower shop near here?\nMan: Yes. It's inside that white building.\nWoman: That tall building?\nMan: No, not the tall building. It's the white building in front of the restaurant. The flower shop is on the second floor.\nWoman: I see. Thank you very much.\nMan: You're welcome.",
    "questions": [
      {
        "question": "花[はな]やはどこにありますか。",
        "questionTranslation": "Where is the flower shop?",
        "options": [
          {
            "text": "高いビルの中",
            "explanation": "The man explicitly says 高いビルじゃありません (it's not the tall building)."
          },
          {
            "text": "レストランの二階",
            "explanation": "The flower shop is in the white building, not inside the restaurant. The restaurant is only a landmark."
          },
          {
            "text": "銀行のとなり",
            "explanation": "A bank is never mentioned in this conversation."
          },
          {
            "text": "白いビルの二階",
            "explanation": "Correct. The man says the shop is in the white building and 花やは二階にあります (the flower shop is on the second floor)."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "白[しろ]いビルはどこにありますか。",
        "questionTranslation": "Where is the white building?",
        "options": [
          {
            "text": "レストランの前",
            "explanation": "Correct. The man says レストランの前の白いビルです (it's the white building in front of the restaurant)."
          },
          {
            "text": "レストランのとなり",
            "explanation": "The man says the building is in front of (前) the restaurant, not next to (となり) it."
          },
          {
            "text": "銀行の前",
            "explanation": "A bank is never mentioned; the building is in front of the restaurant."
          },
          {
            "text": "学校のうしろ",
            "explanation": "A school is never mentioned; the building is in front of the restaurant."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:b-tennis-weather-plans",
    "level": "N5",
    "title": "明日[あした]の天気[てんき]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "明日[あした]、いっしょにテニスをしませんか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。でも、明日[あした]の午後[ごご]は雨[あめ]ですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですか。じゃあ、午前中[ごぜんちゅう]にしましょう。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですよ。午前九時[ごぜんくじ]に公園[こうえん]で会[あ]いましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、そうしましょう。"
      }
    ],
    "translation": "Woman: Won't you play tennis with me tomorrow?\nMan: Sounds nice. But it's going to rain tomorrow afternoon.\nWoman: Is that so? Then let's do it in the morning.\nMan: Sure. Let's meet at the park at 9 a.m.\nWoman: Yes, let's do that.",
    "questions": [
      {
        "question": "明日[あした]の午後[ごご]の天気[てんき]はどうですか。",
        "questionTranslation": "What will the weather be like tomorrow afternoon?",
        "options": [
          {
            "text": "晴れ",
            "explanation": "Sunny weather is not mentioned; the man says it will rain tomorrow afternoon."
          },
          {
            "text": "くもり",
            "explanation": "Cloudy weather is not mentioned; the man says it will rain tomorrow afternoon."
          },
          {
            "text": "雨",
            "explanation": "Correct. The man says 明日の午後は雨ですよ (it's going to rain tomorrow afternoon)."
          },
          {
            "text": "雪",
            "explanation": "Snow is not mentioned; the man says it will rain tomorrow afternoon."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "二人[ふたり]はいつテニスをしますか。",
        "questionTranslation": "When will the two of them play tennis?",
        "options": [
          {
            "text": "今日の午後",
            "explanation": "They are talking about tomorrow, not today."
          },
          {
            "text": "明日の午前九時",
            "explanation": "Correct. Because of the afternoon rain they choose the morning, and the man says 午前九時に公園で会いましょう (let's meet at the park at 9 a.m.)."
          },
          {
            "text": "明日の午後",
            "explanation": "They avoid tomorrow afternoon because it will rain then."
          },
          {
            "text": "明日の午前十時",
            "explanation": "They agree to meet at 9 a.m., not 10 a.m."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:c-bag-color",
    "level": "N5",
    "title": "かばんの色[いろ]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、そのかばんを見[み]せてください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、どうぞ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "赤[あか]いのはありますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "すみません、赤[あか]いのはありません。青[あお]いのと黒[くろ]いのがあります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですか。じゃあ、青[あお]いのをください。いくらですか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "三千円[さんぜんえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、お願[ねが]いします。"
      }
    ],
    "translation": "Woman: Excuse me, please show me that bag. / Clerk: Here you are. / Woman: Do you have a red one? / Clerk: I'm sorry, we don't have a red one. We have a blue one and a black one. / Woman: I see. Then I'll take the blue one. How much is it? / Clerk: It's 3,000 yen. / Woman: OK, I'll take it.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は何色[なにいろ]のかばんを買[か]いますか。",
        "questionTranslation": "What color bag does the woman buy?",
        "options": [
          {
            "text": "赤いかばん",
            "explanation": "She asked for a red one, but the clerk said they don't have red."
          },
          {
            "text": "青いかばん",
            "explanation": "Correct. After hearing red was unavailable, she said 「青いのをください」— she takes the blue one."
          },
          {
            "text": "黒いかばん",
            "explanation": "The clerk offered black as well, but the woman chose blue instead."
          },
          {
            "text": "白いかばん",
            "explanation": "A white bag is never mentioned in the conversation."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "かばんはいくらですか。",
        "questionTranslation": "How much is the bag?",
        "options": [
          {
            "text": "300円",
            "explanation": "The clerk said さんぜんえん (3,000 yen), not さんびゃくえん (300 yen)."
          },
          {
            "text": "2000円",
            "explanation": "2,000 yen is not mentioned; the clerk said 3,000 yen."
          },
          {
            "text": "3000円",
            "explanation": "Correct. The clerk says 「三千円です」— the bag costs 3,000 yen."
          },
          {
            "text": "3500円",
            "explanation": "3,500 yen is not mentioned; the price given was exactly 3,000 yen."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:c-shoe-size",
    "level": "N5",
    "title": "くつのサイズ",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、この黒[くろ]いくつ、二十三[にじゅうさん]センチはありますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、ありますよ。どうぞ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、ちょっと小[ちい]さいですね。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "では、二十四[にじゅうよん]センチはどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "あ、ちょうどいいです。これをください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "ありがとうございます。四千円[よんせんえん]です。"
      }
    ],
    "translation": "Man: Excuse me, do you have these black shoes in 23 centimeters? / Clerk: Yes, we do. Here you are. / Man: Hmm, they're a little small. / Clerk: Then how about 24 centimeters? / Man: Ah, they fit perfectly. I'll take these. / Clerk: Thank you. That's 4,000 yen.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]はどのくつを買[か]いますか。",
        "questionTranslation": "Which shoes does the man buy?",
        "options": [
          {
            "text": "23センチの黒いくつ",
            "explanation": "He tried the 23 cm pair first, but they were too small."
          },
          {
            "text": "24センチの黒いくつ",
            "explanation": "Correct. The 23 cm shoes were small, so he took the 24 cm pair: 「ちょうどいいです。これをください」."
          },
          {
            "text": "23センチの白いくつ",
            "explanation": "The shoes are black, and 23 cm was too small anyway."
          },
          {
            "text": "24センチの白いくつ",
            "explanation": "The size is right, but the shoes he asked about are black, not white."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうして男[おとこ]の人[ひと]は二十三[にじゅうさん]センチのくつを買[か]いませんでしたか。",
        "questionTranslation": "Why didn't the man buy the 23-centimeter shoes?",
        "options": [
          {
            "text": "小さかったから",
            "explanation": "Correct. He said 「ちょっと小さいですね」— the 23 cm shoes were a little small."
          },
          {
            "text": "大きかったから",
            "explanation": "He said they were small, not big."
          },
          {
            "text": "高かったから",
            "explanation": "He never complained about the price; 4,000 yen was the price of the pair he bought."
          },
          {
            "text": "店になかったから",
            "explanation": "The clerk said they did have 23 cm — the problem was the fit, not the stock."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:c-bakery-bread",
    "level": "N5",
    "title": "パン屋[や]で",
    "script": [
      {
        "speaker": "店員[てんいん]",
        "text": "いらっしゃいませ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "このパンを三[みっ]つください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい。ほかに何[なに]かいかがですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですね。じゃあ、メロンパンも二[ふた]つください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、パンが三[みっ]つとメロンパンが二[ふた]つですね。全部[ぜんぶ]で六百円[ろっぴゃくえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい。あ、すみません、牛乳[ぎゅうにゅう]はありますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "すみません、牛乳[ぎゅうにゅう]はありません。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかりました。じゃあ、それだけでお願[ねが]いします。"
      }
    ],
    "translation": "Clerk: Welcome! / Woman: Three of this bread, please. / Clerk: Certainly. Anything else? / Woman: Let's see... I'll also take two melon breads. / Clerk: OK, three breads and two melon breads. That's 600 yen in total. / Woman: Yes. Oh, excuse me, do you have milk? / Clerk: I'm sorry, we don't have milk. / Woman: I see. Then just those, please.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は何[なに]を買[か]いますか。",
        "questionTranslation": "What does the woman buy?",
        "options": [
          {
            "text": "パンを3つとメロンパンを2つ",
            "explanation": "Correct. She orders three breads and two melon breads; the milk she also wanted was not available."
          },
          {
            "text": "パンを2つとメロンパンを3つ",
            "explanation": "The counts are reversed — it was three breads and two melon breads."
          },
          {
            "text": "パンを3つと牛乳",
            "explanation": "She asked about milk, but the shop didn't have any."
          },
          {
            "text": "メロンパンを2つだけ",
            "explanation": "She bought the melon breads in addition to the three breads, not instead of them."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "全部[ぜんぶ]でいくらですか。",
        "questionTranslation": "How much is it in total?",
        "options": [
          {
            "text": "300円",
            "explanation": "300 yen is not mentioned; the clerk said 600 yen in total."
          },
          {
            "text": "500円",
            "explanation": "500 yen is not mentioned; the total was 600 yen."
          },
          {
            "text": "600円",
            "explanation": "Correct. The clerk says 「全部で六百円です」— 600 yen in total."
          },
          {
            "text": "800円",
            "explanation": "800 yen is not mentioned; the total was 600 yen."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:c-curry-lunch",
    "level": "N5",
    "title": "レストランで昼[ひる]ごはん",
    "script": [
      {
        "speaker": "店員[てんいん]",
        "text": "いらっしゃいませ。ご注文[ちゅうもん]は。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ビーフカレーをください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "すみません、ビーフカレーは今日[きょう]はありません。チキンカレーはいかがですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうですか。じゃあ、チキンカレーをお願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "お飲[の]み物[もの]はいかがですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "コーヒーを…あ、すみません、やっぱり水[みず]でいいです。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、わかりました。少[すこ]し待[ま]ってください。"
      }
    ],
    "translation": "Clerk: Welcome! May I take your order? / Man: Beef curry, please. / Clerk: I'm sorry, we don't have beef curry today. How about chicken curry? / Man: I see. Then chicken curry, please. / Clerk: Would you like something to drink? / Man: Coffee... ah, sorry, actually just water is fine. / Clerk: Understood. Please wait a moment.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は何[なに]を食[た]べますか。",
        "questionTranslation": "What will the man eat?",
        "options": [
          {
            "text": "ビーフカレー",
            "explanation": "He ordered it first, but the restaurant didn't have beef curry today."
          },
          {
            "text": "チキンカレー",
            "explanation": "Correct. Since beef curry was unavailable, he said 「チキンカレーをお願いします」."
          },
          {
            "text": "カレーパン",
            "explanation": "Curry bread is never mentioned in the conversation."
          },
          {
            "text": "何も食べません",
            "explanation": "He does order food — the chicken curry."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "男[おとこ]の人[ひと]は何[なに]を飲[の]みますか。",
        "questionTranslation": "What will the man drink?",
        "options": [
          {
            "text": "コーヒー",
            "explanation": "He started to order coffee but changed his mind: 「やっぱり水でいいです」."
          },
          {
            "text": "お茶",
            "explanation": "Tea is never mentioned in the conversation."
          },
          {
            "text": "水",
            "explanation": "Correct. He changed his order to water: 「やっぱり水でいいです」."
          },
          {
            "text": "ジュース",
            "explanation": "Juice is never mentioned in the conversation."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:c-egg-where",
    "level": "N5",
    "title": "スーパーで",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、卵[たまご]はどこにありますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "卵[たまご]はあそこです。牛乳[ぎゅうにゅう]の隣[となり]ですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "牛乳[ぎゅうにゅう]の隣[となり]ですね。ありがとうございます。あ、それから、パンはどこですか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "パンは店[みせ]の入口[いりぐち]の近[ちか]くです。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかりました。どうもありがとうございます。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "いいえ。"
      }
    ],
    "translation": "Woman: Excuse me, where are the eggs? / Clerk: The eggs are over there, next to the milk. / Woman: Next to the milk, I see. Thank you. Oh, and where is the bread? / Clerk: The bread is near the entrance of the store. / Woman: Got it. Thank you very much. / Clerk: You're welcome.",
    "questions": [
      {
        "question": "卵[たまご]はどこにありますか。",
        "questionTranslation": "Where are the eggs?",
        "options": [
          {
            "text": "牛乳の隣",
            "explanation": "Correct. The clerk says 「卵は…牛乳の隣ですよ」— the eggs are next to the milk."
          },
          {
            "text": "入口の近く",
            "explanation": "That's where the bread is, not the eggs."
          },
          {
            "text": "パンの隣",
            "explanation": "The eggs are next to the milk; the bread is in a different place, near the entrance."
          },
          {
            "text": "店の外",
            "explanation": "Outside the store is never mentioned."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "パンはどこにありますか。",
        "questionTranslation": "Where is the bread?",
        "options": [
          {
            "text": "牛乳の隣",
            "explanation": "That's where the eggs are, not the bread."
          },
          {
            "text": "卵の隣",
            "explanation": "Next to the eggs is the milk; the bread is elsewhere."
          },
          {
            "text": "店の入口の近く",
            "explanation": "Correct. The clerk says 「パンは店の入口の近くです」— near the store entrance."
          },
          {
            "text": "店の二階",
            "explanation": "A second floor is never mentioned."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:c-juice-size",
    "level": "N5",
    "title": "ジュースの店[みせ]で",
    "script": [
      {
        "speaker": "店員[てんいん]",
        "text": "いらっしゃいませ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "オレンジジュースをください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "サイズは大[おお]きいのと小[ちい]さいのがあります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いくらですか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "大[おお]きいのは四百円[よんひゃくえん]、小[ちい]さいのは三百円[さんびゃくえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、大[おお]きいのを一[ひと]つください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、四百円[よんひゃくえん]です。ありがとうございます。"
      }
    ],
    "translation": "Clerk: Welcome! / Woman: Orange juice, please. / Clerk: We have a large size and a small size. / Woman: How much are they? / Clerk: The large one is 400 yen and the small one is 300 yen. / Woman: Then one large one, please. / Clerk: That's 400 yen. Thank you.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどのジュースを買[か]いますか。",
        "questionTranslation": "Which juice does the woman buy?",
        "options": [
          {
            "text": "大きいオレンジジュース",
            "explanation": "Correct. After hearing the prices she says 「大きいのを一つください」— one large orange juice."
          },
          {
            "text": "小さいオレンジジュース",
            "explanation": "The small size was offered for 300 yen, but she chose the large one."
          },
          {
            "text": "大きいりんごジュース",
            "explanation": "She ordered orange juice, not apple juice."
          },
          {
            "text": "小さいりんごジュース",
            "explanation": "Neither the flavor nor the size matches — she bought a large orange juice."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "女[おんな]の人[ひと]のジュースはいくらですか。",
        "questionTranslation": "How much is the woman's juice?",
        "options": [
          {
            "text": "300円",
            "explanation": "300 yen is the price of the small one, which she didn't buy."
          },
          {
            "text": "400円",
            "explanation": "Correct. She bought the large juice, and the clerk says 「四百円です」."
          },
          {
            "text": "500円",
            "explanation": "500 yen is not mentioned in the conversation."
          },
          {
            "text": "700円",
            "explanation": "700 yen would be both sizes together; she bought only the large one for 400 yen."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:c-fruit-shop-bananas",
    "level": "N5",
    "title": "果物[くだもの]の店[みせ]で",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、このバナナはいくらですか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "一本[いっぽん]百円[ひゃくえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、三本[さんぼん]ください。それから、みかんもください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "みかんは一[ひと]つ五十円[ごじゅうえん]です。いくつですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "四[よっ]つお願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "バナナが三本[さんぼん]とみかんが四[よっ]つですね。全部[ぜんぶ]で五百円[ごひゃくえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、どうぞ。"
      }
    ],
    "translation": "Man: Excuse me, how much are these bananas? / Clerk: 100 yen each. / Man: Then three, please. And some mikan oranges too, please. / Clerk: The mikan are 50 yen each. How many? / Man: Four, please. / Clerk: Three bananas and four mikan — 500 yen in total. / Man: Here you are.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は何[なに]を買[か]いますか。",
        "questionTranslation": "What does the man buy?",
        "options": [
          {
            "text": "バナナを3本とみかんを4つ",
            "explanation": "Correct. He asks for three bananas, then four mikan, and the clerk confirms the order."
          },
          {
            "text": "バナナを4本とみかんを3つ",
            "explanation": "The counts are reversed — three bananas and four mikan."
          },
          {
            "text": "バナナを3本だけ",
            "explanation": "He also bought four mikan in addition to the bananas."
          },
          {
            "text": "みかんを4つとりんごを3つ",
            "explanation": "Apples are never mentioned; he bought bananas and mikan."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "全部[ぜんぶ]でいくらですか。",
        "questionTranslation": "How much is it in total?",
        "options": [
          {
            "text": "350円",
            "explanation": "350 yen is not the total; the clerk says 500 yen."
          },
          {
            "text": "400円",
            "explanation": "400 yen is not mentioned; the total was 500 yen."
          },
          {
            "text": "450円",
            "explanation": "450 yen is not mentioned; the total was 500 yen."
          },
          {
            "text": "500円",
            "explanation": "Correct. Three bananas (300 yen) plus four mikan (200 yen): 「全部で五百円です」."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:c-umbrella-buy",
    "level": "N5",
    "title": "傘[かさ]を買[か]う",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、傘[かさ]はありますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、こちらです。大[おお]きい傘[かさ]は千円[せんえん]、小[ちい]さい傘[かさ]は五百円[ごひゃくえん]です。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "小[ちい]さいのは何色[なにいろ]がありますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "白[しろ]と青[あお]があります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、小[ちい]さい白[しろ]いのをください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、五百円[ごひゃくえん]です。ありがとうございます。"
      }
    ],
    "translation": "Woman: Excuse me, do you have umbrellas? / Clerk: Yes, over here. The big umbrellas are 1,000 yen and the small ones are 500 yen. / Woman: What colors do the small ones come in? / Clerk: We have white and blue. / Woman: Then I'll take a small white one. / Clerk: That's 500 yen. Thank you.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどの傘[かさ]を買[か]いますか。",
        "questionTranslation": "Which umbrella does the woman buy?",
        "options": [
          {
            "text": "大きい白い傘",
            "explanation": "She chose the small size, not the big one."
          },
          {
            "text": "大きい青い傘",
            "explanation": "Neither the size nor the color matches — she bought a small white one."
          },
          {
            "text": "小さい白い傘",
            "explanation": "Correct. She says 「小さい白いのをください」— a small white umbrella."
          },
          {
            "text": "小さい青い傘",
            "explanation": "Blue was available in the small size, but she chose white."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "傘[かさ]はいくらですか。",
        "questionTranslation": "How much is the umbrella?",
        "options": [
          {
            "text": "500円",
            "explanation": "Correct. The small umbrella costs 500 yen: 「はい、五百円です」."
          },
          {
            "text": "1000円",
            "explanation": "1,000 yen is the price of the big umbrella, which she didn't buy."
          },
          {
            "text": "1500円",
            "explanation": "1,500 yen would be both umbrellas; she bought only the small one."
          },
          {
            "text": "50円",
            "explanation": "The clerk said ごひゃくえん (500 yen), not ごじゅうえん (50 yen)."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:c-post-office-stamps",
    "level": "N5",
    "title": "郵便局[ゆうびんきょく]で",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、八十円[はちじゅうえん]の切手[きって]を五枚[ごまい]ください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、八十円[はちじゅうえん]切手[きって]を五枚[ごまい]ですね。四百円[よんひゃくえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "それから、はがきも三枚[さんまい]お願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はがきは一枚[いちまい]五十円[ごじゅうえん]です。全部[ぜんぶ]で五百五十円[ごひゃくごじゅうえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、お願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "ありがとうございました。"
      }
    ],
    "translation": "Man: Excuse me, five 80-yen stamps, please. / Clerk: Five 80-yen stamps, that's 400 yen. / Man: And three postcards too, please. / Clerk: The postcards are 50 yen each. That's 550 yen in total. / Man: Yes, please. / Clerk: Thank you very much.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は切手[きって]を何枚[なんまい]買[か]いますか。",
        "questionTranslation": "How many stamps does the man buy?",
        "options": [
          {
            "text": "3枚",
            "explanation": "Three is the number of postcards, not stamps."
          },
          {
            "text": "5枚",
            "explanation": "Correct. He asks for 「八十円の切手を五枚」— five 80-yen stamps."
          },
          {
            "text": "8枚",
            "explanation": "Eight comes from mishearing はちじゅうえん (80 yen), the price of each stamp."
          },
          {
            "text": "50枚",
            "explanation": "Fifty comes from the postcard price (50 yen each), not the number of stamps."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "全部[ぜんぶ]でいくらですか。",
        "questionTranslation": "How much is it in total?",
        "options": [
          {
            "text": "400円",
            "explanation": "400 yen is only the stamps; the postcards added 150 yen more."
          },
          {
            "text": "500円",
            "explanation": "500 yen is not mentioned; the total was 550 yen."
          },
          {
            "text": "550円",
            "explanation": "Correct. Stamps 400 yen plus three 50-yen postcards: 「全部で五百五十円です」."
          },
          {
            "text": "650円",
            "explanation": "650 yen is not mentioned; the total was 550 yen."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:c-restaurant-seat",
    "level": "N5",
    "title": "レストランの席[せき]",
    "script": [
      {
        "speaker": "店員[てんいん]",
        "text": "いらっしゃいませ。何名[なんめい]さまですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "三人[さんにん]です。窓[まど]の近[ちか]くの席[せき]はありますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "すみません、窓[まど]の近[ちか]くの席[せき]は今[いま]いっぱいです。こちらのドアの近[ちか]くの席[せき]はいかがですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですか。じゃあ、そこでお願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、こちらへどうぞ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ありがとうございます。"
      }
    ],
    "translation": "Clerk: Welcome! How many people? / Woman: Three. Is there a seat near the window? / Clerk: I'm sorry, the seats near the window are full right now. How about this seat near the door? / Woman: I see. Then that one, please. / Clerk: Right this way. / Woman: Thank you.",
    "questions": [
      {
        "question": "何人[なんにん]でレストランに来[き]ましたか。",
        "questionTranslation": "How many people came to the restaurant?",
        "options": [
          {
            "text": "1人",
            "explanation": "The woman says three people, not one."
          },
          {
            "text": "2人",
            "explanation": "The woman says three people, not two."
          },
          {
            "text": "3人",
            "explanation": "Correct. When asked 「何名さまですか」, she answers 「三人です」."
          },
          {
            "text": "4人",
            "explanation": "The woman says three people, not four."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "三人[さんにん]はどこの席[せき]に座[すわ]りますか。",
        "questionTranslation": "Where will the three of them sit?",
        "options": [
          {
            "text": "窓の近くの席",
            "explanation": "She wanted a window seat, but those were full."
          },
          {
            "text": "ドアの近くの席",
            "explanation": "Correct. The window seats were full, so she accepted the seat near the door."
          },
          {
            "text": "店の外の席",
            "explanation": "Outside seating is never mentioned."
          },
          {
            "text": "二階の席",
            "explanation": "A second floor is never mentioned."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:c-convenience-bento",
    "level": "N5",
    "title": "コンビニで",
    "script": [
      {
        "speaker": "店員[てんいん]",
        "text": "いらっしゃいませ。お弁当[べんとう]は温[あたた]めますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、お願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "お箸[はし]はいりますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいえ、いりません。家[いえ]で食[た]べますから。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "袋[ふくろ]はいかがですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、ください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "全部[ぜんぶ]で五百円[ごひゃくえん]です。"
      }
    ],
    "translation": "Clerk: Welcome! Shall I heat up the bento? / Man: Yes, please. / Clerk: Do you need chopsticks? / Man: No, I don't. I'll eat at home. / Clerk: Would you like a bag? / Man: Yes, please. / Clerk: That's 500 yen in total.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]は何[なに]がいりませんか。",
        "questionTranslation": "What does the man NOT need?",
        "options": [
          {
            "text": "お箸",
            "explanation": "Correct. When asked about chopsticks he says 「いいえ、いりません」because he'll eat at home."
          },
          {
            "text": "袋",
            "explanation": "He said yes to the bag: 「はい、ください」."
          },
          {
            "text": "お弁当",
            "explanation": "The bento is what he's buying."
          },
          {
            "text": "お金",
            "explanation": "Money isn't something he declined; he pays 500 yen."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "男[おとこ]の人[ひと]はどこでお弁当[べんとう]を食[た]べますか。",
        "questionTranslation": "Where will the man eat the bento?",
        "options": [
          {
            "text": "店の中で",
            "explanation": "He doesn't eat in the store; he says he'll eat at home."
          },
          {
            "text": "会社で",
            "explanation": "The office is never mentioned."
          },
          {
            "text": "公園で",
            "explanation": "A park is never mentioned."
          },
          {
            "text": "家で",
            "explanation": "Correct. He says 「家で食べますから」— that's why he doesn't need chopsticks."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:c-flowers-for-mother",
    "level": "N5",
    "title": "母[はは]の誕生日[たんじょうび]の花[はな]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、母[はは]の誕生日[たんじょうび]に花[はな]を買[か]いたいです。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "そうですか。このバラはいかがですか。一本[いっぽん]三百円[さんびゃくえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、ちょっと高[たか]いですね。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "では、こちらのチューリップはいかがですか。一本[いっぽん]百円[ひゃくえん]ですよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。じゃあ、チューリップを五本[ごほん]ください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、五百円[ごひゃくえん]です。ありがとうございます。"
      }
    ],
    "translation": "Man: Excuse me, I want to buy flowers for my mother's birthday. / Clerk: I see. How about these roses? They're 300 yen each. / Man: Hmm, that's a bit expensive. / Clerk: Then how about these tulips? They're 100 yen each. / Man: That's nice. Then five tulips, please. / Clerk: That's 500 yen. Thank you.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]はどの花[はな]を買[か]いますか。",
        "questionTranslation": "Which flowers does the man buy?",
        "options": [
          {
            "text": "バラを5本",
            "explanation": "The roses were suggested first, but he found them too expensive."
          },
          {
            "text": "バラを3本",
            "explanation": "He didn't buy any roses; 300 yen was the price of one rose."
          },
          {
            "text": "チューリップを5本",
            "explanation": "Correct. He says 「チューリップを五本ください」— five tulips."
          },
          {
            "text": "チューリップを3本",
            "explanation": "He bought five tulips, not three."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうして男[おとこ]の人[ひと]はバラを買[か]いませんでしたか。",
        "questionTranslation": "Why didn't the man buy the roses?",
        "options": [
          {
            "text": "高かったから",
            "explanation": "Correct. He says 「ちょっと高いですね」about the 300-yen roses."
          },
          {
            "text": "店になかったから",
            "explanation": "The roses were in stock — the clerk offered them first."
          },
          {
            "text": "母がバラが嫌いだから",
            "explanation": "His mother's tastes are never mentioned."
          },
          {
            "text": "色がよくなかったから",
            "explanation": "The color of the roses is never mentioned."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:c-hat-shop",
    "level": "N5",
    "title": "帽子[ぼうし]の店[みせ]で",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、その帽子[ぼうし]を見[み]せてください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "白[しろ]いのですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいえ、黒[くろ]いのです。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、どうぞ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "うーん、ちょっと大[おお]きいですね。もっと小[ちい]さいのはありますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、こちらの黒[くろ]いのは小[ちい]さいですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あ、これはいいですね。これをください。"
      }
    ],
    "translation": "Woman: Excuse me, please show me that hat. / Clerk: The white one? / Woman: No, the black one. / Clerk: Here you are. / Woman: Hmm, it's a little big. Do you have a smaller one? / Clerk: Yes, this black one is small. / Woman: Ah, this one is nice. I'll take it.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどんな帽子[ぼうし]を買[か]いますか。",
        "questionTranslation": "What kind of hat does the woman buy?",
        "options": [
          {
            "text": "大きい黒い帽子",
            "explanation": "The first black hat was too big for her."
          },
          {
            "text": "小さい黒い帽子",
            "explanation": "Correct. The first one was big, so she took the smaller black hat: 「これはいいですね。これをください」."
          },
          {
            "text": "大きい白い帽子",
            "explanation": "She corrected the clerk — she wanted the black hat, not the white one."
          },
          {
            "text": "小さい白い帽子",
            "explanation": "The size is right, but she chose a black hat, not white."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうして女[おんな]の人[ひと]は最初[さいしょ]の帽子[ぼうし]を買[か]いませんでしたか。",
        "questionTranslation": "Why didn't the woman buy the first hat?",
        "options": [
          {
            "text": "小さかったから",
            "explanation": "The first hat was big, not small."
          },
          {
            "text": "大きかったから",
            "explanation": "Correct. She says 「ちょっと大きいですね」and asks for a smaller one."
          },
          {
            "text": "高かったから",
            "explanation": "Price is never mentioned in the conversation."
          },
          {
            "text": "色が白だったから",
            "explanation": "The first hat she tried was already the black one; the problem was the size."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:c-cleaning-shop",
    "level": "N5",
    "title": "クリーニングの店[みせ]で",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すみません、このシャツをお願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい。金曜日[きんようび]にできますよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "うーん、木曜日[もくようび]にほしいです。木曜日[もくようび]にできますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "木曜日[もくようび]ですね。はい、大丈夫[だいじょうぶ]です。午後[ごご]三時[さんじ]に来[き]てください。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。いくらですか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "二百円[にひゃくえん]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい。じゃあ、木曜日[もくようび]に来[き]ます。"
      }
    ],
    "translation": "Man: Excuse me, this shirt, please. / Clerk: Sure. It will be ready on Friday. / Man: Hmm, I'd like it on Thursday. Can you do it by Thursday? / Clerk: Thursday... yes, that's fine. Please come at 3 p.m. / Man: Understood. How much is it? / Clerk: 200 yen. / Man: OK. I'll come on Thursday then.",
    "questions": [
      {
        "question": "男[おとこ]の人[ひと]はいつシャツを取[と]りに来[き]ますか。",
        "questionTranslation": "When will the man come to pick up the shirt?",
        "options": [
          {
            "text": "木曜日の午後3時",
            "explanation": "Correct. He asked to have it by Thursday, and the clerk said to come at 3 p.m. that day."
          },
          {
            "text": "金曜日の午後3時",
            "explanation": "Friday was the clerk's first offer, but the man asked for Thursday instead."
          },
          {
            "text": "木曜日の午前9時",
            "explanation": "The day is right, but the clerk said 3 p.m., not 9 a.m."
          },
          {
            "text": "金曜日の午前9時",
            "explanation": "Neither the day nor the time matches — Thursday at 3 p.m."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "クリーニングはいくらですか。",
        "questionTranslation": "How much is the cleaning?",
        "options": [
          {
            "text": "100円",
            "explanation": "100 yen is not mentioned; the clerk said 200 yen."
          },
          {
            "text": "200円",
            "explanation": "Correct. The clerk says 「二百円です」."
          },
          {
            "text": "300円",
            "explanation": "300 yen is not mentioned; the price was 200 yen."
          },
          {
            "text": "2000円",
            "explanation": "The clerk said にひゃくえん (200 yen), not にせんえん (2,000 yen)."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:c-ice-cream-shop",
    "level": "N5",
    "title": "アイスクリームの店[みせ]で",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、チョコレートのアイスクリームをください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "すみません、チョコレートは今[いま]ありません。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですか。何[なに]がありますか。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "バニラといちごがあります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、いちごを二[ふた]つください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい、一[ひと]つ二百円[にひゃくえん]ですから、四百円[よんひゃくえん]です。"
      }
    ],
    "translation": "Woman: Excuse me, a chocolate ice cream, please. / Clerk: I'm sorry, we don't have chocolate right now. / Woman: I see. What do you have? / Clerk: We have vanilla and strawberry. / Woman: Then two strawberry ones, please. / Clerk: Sure, they're 200 yen each, so that's 400 yen.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどのアイスクリームを買[か]いますか。",
        "questionTranslation": "Which ice cream does the woman buy?",
        "options": [
          {
            "text": "チョコレートを2つ",
            "explanation": "She wanted chocolate first, but the shop didn't have it."
          },
          {
            "text": "バニラを2つ",
            "explanation": "Vanilla was available, but she chose strawberry."
          },
          {
            "text": "いちごを2つ",
            "explanation": "Correct. Since chocolate was unavailable, she says 「いちごを二つください」."
          },
          {
            "text": "いちごを1つ",
            "explanation": "She bought two strawberry ice creams, not one."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "全部[ぜんぶ]でいくらですか。",
        "questionTranslation": "How much is it in total?",
        "options": [
          {
            "text": "200円",
            "explanation": "200 yen is the price of one ice cream; she bought two."
          },
          {
            "text": "400円",
            "explanation": "Correct. Two ice creams at 200 yen each: 「四百円です」."
          },
          {
            "text": "600円",
            "explanation": "600 yen is not mentioned; two at 200 yen each is 400 yen."
          },
          {
            "text": "100円",
            "explanation": "100 yen is not mentioned; the total was 400 yen."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:d-math-homework-pages",
    "level": "N5",
    "title": "数学[すうがく]の宿題[しゅくだい]",
    "script": [
      {
        "speaker": "先生[せんせい]",
        "text": "みなさん、宿題[しゅくだい]があります。教科書[きょうかしょ]の10ページから15ページまでです。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、15ページまでですか。多[おお]いです。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "そうですね。じゃあ、10ページから12ページまでにしましょう。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい。いつまでですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "明日[あした]の朝[あさ]、出[だ]してください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Teacher: Everyone, there is homework. It's from page 10 to page 15 of the textbook. / Student: Sensei, up to page 15? That's a lot. / Teacher: True. Then let's make it from page 10 to page 12. / Student: OK. When is it due? / Teacher: Please hand it in tomorrow morning. / Student: Yes, understood.",
    "questions": [
      {
        "question": "学生[がくせい]は宿題[しゅくだい]をどこからどこまでしますか。",
        "questionTranslation": "From which page to which page does the student do the homework?",
        "options": [
          {
            "text": "10ページから15ページまで",
            "explanation": "This was the teacher's first plan, but after the student said it was too much, the teacher changed it."
          },
          {
            "text": "10ページから12ページまで",
            "explanation": "Correct. The teacher says 「10ページから12ページまでにしましょう」 after the student complains it is too much."
          },
          {
            "text": "12ページから15ページまで",
            "explanation": "The homework starts at page 10, not page 12; 15 was the rejected end page."
          },
          {
            "text": "10ページから11ページまで",
            "explanation": "The teacher said up to page 12, not page 11."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "宿題[しゅくだい]はいつまでですか。",
        "questionTranslation": "When is the homework due?",
        "options": [
          {
            "text": "今日の午後",
            "explanation": "This afternoon is not mentioned; the teacher says tomorrow morning."
          },
          {
            "text": "あさっての朝",
            "explanation": "The day after tomorrow is not mentioned; it is due tomorrow morning."
          },
          {
            "text": "明日の朝",
            "explanation": "Correct. The teacher says 「明日の朝、出してください」 — hand it in tomorrow morning."
          },
          {
            "text": "今週の金曜日",
            "explanation": "Friday is never mentioned in the dialogue."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:d-kanji-test-day",
    "level": "N5",
    "title": "漢字[かんじ]のテスト",
    "script": [
      {
        "speaker": "先生[せんせい]",
        "text": "みなさん、来週[らいしゅう]、漢字[かんじ]のテストをします。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、テストは木曜日[もくようび]ですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いいえ、木曜日[もくようび]は漢字[かんじ]の授業[じゅぎょう]がありません。金曜日[きんようび]です。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "金曜日[きんようび]ですね。何[なに]を勉強[べんきょう]しますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "教科書[きょうかしょ]の漢字[かんじ]を20個[こ]、勉強[べんきょう]してください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "20個[こ]ですね。はい、わかりました。"
      }
    ],
    "translation": "Teacher: Everyone, next week we will have a kanji test. / Student: Sensei, is the test on Thursday? / Teacher: No, there is no kanji class on Thursday. It's on Friday. / Student: Friday, right? What should we study? / Teacher: Please study 20 kanji from the textbook. / Student: 20, right? Understood.",
    "questions": [
      {
        "question": "テストはいつですか。",
        "questionTranslation": "When is the test?",
        "options": [
          {
            "text": "来週の金曜日",
            "explanation": "Correct. The teacher says there is no kanji class on Thursday, so the test is Friday (「金曜日です」)."
          },
          {
            "text": "来週の木曜日",
            "explanation": "The student guessed Thursday, but the teacher said there is no kanji class that day."
          },
          {
            "text": "今週の金曜日",
            "explanation": "The test is next week (来週), not this week."
          },
          {
            "text": "来週の月曜日",
            "explanation": "Monday is never mentioned in the dialogue."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "学生[がくせい]は漢字[かんじ]をいくつ勉強[べんきょう]しますか。",
        "questionTranslation": "How many kanji will the student study?",
        "options": [
          {
            "text": "10",
            "explanation": "The teacher said 20 kanji, not 10."
          },
          {
            "text": "15",
            "explanation": "15 is not mentioned; the teacher said 20 kanji."
          },
          {
            "text": "30",
            "explanation": "The teacher said 20 kanji, not 30."
          },
          {
            "text": "20",
            "explanation": "Correct. The teacher says 「教科書の漢字を20個、勉強してください」."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:d-art-class-crayons",
    "level": "N5",
    "title": "絵[え]の授業[じゅぎょう]",
    "script": [
      {
        "speaker": "先生[せんせい]",
        "text": "明日[あした]は絵[え]の授業[じゅぎょう]です。クレヨンを持[も]って来[き]てください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、紙[かみ]も持[も]って来[き]ますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いいえ、紙[かみ]は学校[がっこう]にありますから、いりません。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "えんぴつはどうですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "えんぴつもいりません。クレヨンだけ持[も]って来[き]てください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Teacher: Tomorrow is art class. Please bring crayons. / Student: Sensei, should we bring paper too? / Teacher: No, the school has paper, so you don't need it. / Student: What about pencils? / Teacher: You don't need pencils either. Please bring only crayons. / Student: Yes, understood.",
    "questions": [
      {
        "question": "学生[がくせい]は明日[あした]、何[なに]を持[も]って来[き]ますか。",
        "questionTranslation": "What will the student bring tomorrow?",
        "options": [
          {
            "text": "クレヨンと紙",
            "explanation": "Paper is not needed because the school has it."
          },
          {
            "text": "クレヨンだけ",
            "explanation": "Correct. The teacher says 「クレヨンだけ持って来てください」 — bring only crayons."
          },
          {
            "text": "えんぴつと紙",
            "explanation": "The teacher said neither pencils nor paper are needed."
          },
          {
            "text": "クレヨンとえんぴつ",
            "explanation": "The teacher said pencils are not needed (「えんぴつもいりません」)."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうして紙[かみ]を持[も]って来[き]ませんか。",
        "questionTranslation": "Why doesn't the student bring paper?",
        "options": [
          {
            "text": "紙を使わないから",
            "explanation": "Paper will be used; it just doesn't need to be brought because the school has it."
          },
          {
            "text": "先生が買うから",
            "explanation": "The teacher never says they will buy paper."
          },
          {
            "text": "学校に紙があるから",
            "explanation": "Correct. The teacher says 「紙は学校にありますから、いりません」 — the school has paper."
          },
          {
            "text": "紙が高いから",
            "explanation": "Price is never mentioned in the dialogue."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:d-english-room-change",
    "level": "N5",
    "title": "教室[きょうしつ]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさん、おはようございます。今日[きょう]の英語[えいご]の授業[じゅぎょう]についてお知[し]らせします。"
      },
      {
        "speaker": "アナウンス",
        "text": "いつもは2階[かい]の2番[ばん]教室[きょうしつ]です。"
      },
      {
        "speaker": "アナウンス",
        "text": "でも、今日[きょう]は3階[がい]の5番[ばん]教室[きょうしつ]でします。"
      },
      {
        "speaker": "アナウンス",
        "text": "時間[じかん]はいつもと同[おな]じ、10時[じ]からです。"
      },
      {
        "speaker": "アナウンス",
        "text": "教科書[きょうかしょ]とノートを持[も]って行[い]ってください。"
      },
      {
        "speaker": "アナウンス",
        "text": "3階[がい]の5番[ばん]教室[きょうしつ]です。よろしくお願[ねが]いします。"
      }
    ],
    "translation": "Announcement: Good morning, everyone. Here is a notice about today's English class. Usually it is in classroom 2 on the second floor. But today it will be held in classroom 5 on the third floor. The time is the same as always, from 10 o'clock. Please take your textbook and notebook. Classroom 5 on the third floor. Thank you.",
    "questions": [
      {
        "question": "今日[きょう]の英語[えいご]の授業[じゅぎょう]はどこでありますか。",
        "questionTranslation": "Where is today's English class held?",
        "options": [
          {
            "text": "2階の2番教室",
            "explanation": "That is the usual room, but today the class was moved."
          },
          {
            "text": "2階の5番教室",
            "explanation": "Classroom 5 is on the third floor, not the second floor."
          },
          {
            "text": "3階の2番教室",
            "explanation": "The room number is 5, not 2; only the usual room is number 2."
          },
          {
            "text": "3階の5番教室",
            "explanation": "Correct. The announcement says 「今日は3階の5番教室でします」 and repeats it at the end."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "授業[じゅぎょう]は何時[なんじ]からですか。",
        "questionTranslation": "What time does the class start?",
        "options": [
          {
            "text": "10時",
            "explanation": "Correct. The announcement says the time is the same as always, from 10 o'clock (「10時からです」)."
          },
          {
            "text": "9時",
            "explanation": "9 o'clock is not mentioned; the class starts at 10."
          },
          {
            "text": "11時",
            "explanation": "11 o'clock is not mentioned; the class starts at 10."
          },
          {
            "text": "10時半",
            "explanation": "The announcement says 10 o'clock, not 10:30."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:d-tennis-practice-time",
    "level": "N5",
    "title": "テニスの練習[れんしゅう]",
    "script": [
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、今日[きょう]のテニスの練習[れんしゅう]は3時[じ]からですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いいえ、今日[きょう]は先生[せんせい]たちの会議[かいぎ]がありますから、4時[じ]からです。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "4時[じ]ですね。どこでしますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いつもと同[おな]じで、学校[がっこう]のコートです。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "何[なに]か持[も]って行[い]きますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "暑[あつ]いですから、飲[の]み物[もの]を持[も]って来[き]てください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Student: Sensei, is today's tennis practice from 3 o'clock? / Teacher: No, today the teachers have a meeting, so it's from 4 o'clock. / Student: 4 o'clock, right? Where will we practice? / Teacher: Same as always, the school court. / Student: Should I bring anything? / Teacher: It's hot, so please bring a drink. / Student: Yes, understood.",
    "questions": [
      {
        "question": "今日[きょう]の練習[れんしゅう]は何時[なんじ]からですか。",
        "questionTranslation": "What time does today's practice start?",
        "options": [
          {
            "text": "3時",
            "explanation": "3 o'clock was the student's guess (the usual time), but today it was moved."
          },
          {
            "text": "3時半",
            "explanation": "3:30 is never mentioned; practice starts at 4."
          },
          {
            "text": "4時",
            "explanation": "Correct. The teacher says that because of a teachers' meeting, practice is from 4 o'clock (「4時からです」)."
          },
          {
            "text": "5時",
            "explanation": "5 o'clock is never mentioned; practice starts at 4."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうして練習[れんしゅう]の時間[じかん]が変[か]わりましたか。",
        "questionTranslation": "Why did the practice time change?",
        "options": [
          {
            "text": "雨が降るから",
            "explanation": "Weather is mentioned only as being hot; rain is not the reason."
          },
          {
            "text": "先生たちの会議があるから",
            "explanation": "Correct. The teacher says 「先生たちの会議がありますから、4時からです」."
          },
          {
            "text": "コートが使えないから",
            "explanation": "The court is fine — they practice at the usual school court."
          },
          {
            "text": "学生が少ないから",
            "explanation": "The number of students is never mentioned."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:d-forgot-dictionary",
    "level": "N5",
    "title": "辞書[じしょ]を忘[わす]れました",
    "script": [
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、すみません。辞書[じしょ]を忘[わす]れました。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "そうですか。今日[きょう]の授業[じゅぎょう]で使[つか]いますよ。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]の辞書[じしょ]を貸[か]してください。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "私[わたし]のは今[いま]、使[つか]っています。図書室[としょしつ]で借[か]りてください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "図書室[としょしつ]ですね。行[い]って来[き]ます。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "授業[じゅぎょう]は10分後[ぷんご]に始[はじ]まりますよ。急[いそ]いでください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい！"
      }
    ],
    "translation": "Student: Sensei, excuse me. I forgot my dictionary. / Teacher: I see. We will use it in today's class. / Student: Please lend me your dictionary. / Teacher: I'm using mine right now. Please borrow one from the library room. / Student: The library room, right? I'll go. / Teacher: Class starts in 10 minutes. Please hurry. / Student: Yes!",
    "questions": [
      {
        "question": "学生[がくせい]はこのあと、まず何[なに]をしますか。",
        "questionTranslation": "What will the student do first after this?",
        "options": [
          {
            "text": "図書室で辞書を借りる",
            "explanation": "Correct. The teacher says 「図書室で借りてください」 and the student replies that they will go."
          },
          {
            "text": "先生の辞書を借りる",
            "explanation": "The student asked for this, but the teacher is using their own dictionary."
          },
          {
            "text": "家に辞書を取りに帰る",
            "explanation": "Going home is never mentioned; there is no time before class."
          },
          {
            "text": "友だちに辞書を借りる",
            "explanation": "Borrowing from a friend is never mentioned in the dialogue."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "授業[じゅぎょう]はいつ始[はじ]まりますか。",
        "questionTranslation": "When does the class start?",
        "options": [
          {
            "text": "今すぐ",
            "explanation": "Class has not started yet; it starts in 10 minutes."
          },
          {
            "text": "5分後",
            "explanation": "The teacher says 10 minutes, not 5."
          },
          {
            "text": "30分後",
            "explanation": "The teacher says 10 minutes, not 30."
          },
          {
            "text": "10分後",
            "explanation": "Correct. The teacher says 「授業は10分後に始まりますよ」 — class starts in 10 minutes."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:d-lunch-time-today",
    "level": "N5",
    "title": "昼[ひる]ごはんの時間[じかん]",
    "script": [
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、昼[ひる]ごはんは何時[なんじ]からですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いつもは12時[じ]からです。でも、今日[きょう]は12時半[じはん]からですよ。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "どうしてですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "午前[ごぜん]の授業[じゅぎょう]が少[すこ]し長[なが]いですから。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "そうですか。昼[ひる]ごはんのあとは何[なん]の授業[じゅぎょう]ですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "音楽[おんがく]です。音楽室[おんがくしつ]に行[い]ってください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Student: Sensei, what time is lunch? / Teacher: Usually it's from 12 o'clock. But today it's from 12:30. / Student: Why? / Teacher: Because the morning classes are a little long today. / Student: I see. What class is after lunch? / Teacher: Music. Please go to the music room. / Student: Yes, understood.",
    "questions": [
      {
        "question": "今日[きょう]、昼[ひる]ごはんは何時[なんじ]からですか。",
        "questionTranslation": "What time is lunch today?",
        "options": [
          {
            "text": "12時",
            "explanation": "12 o'clock is the usual time, but today lunch starts at 12:30."
          },
          {
            "text": "12時半",
            "explanation": "Correct. The teacher says 「今日は12時半からですよ」 because morning classes run long."
          },
          {
            "text": "1時",
            "explanation": "1 o'clock is never mentioned; lunch is at 12:30 today."
          },
          {
            "text": "11時半",
            "explanation": "11:30 is never mentioned; lunch is at 12:30 today."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "昼[ひる]ごはんのあと、学生[がくせい]はどこへ行[い]きますか。",
        "questionTranslation": "Where does the student go after lunch?",
        "options": [
          {
            "text": "図書室",
            "explanation": "The library room is never mentioned; the next class is music."
          },
          {
            "text": "体育館",
            "explanation": "The gym is never mentioned; the next class is music."
          },
          {
            "text": "音楽室",
            "explanation": "Correct. The class after lunch is music, and the teacher says 「音楽室に行ってください」."
          },
          {
            "text": "いつもの教室",
            "explanation": "The teacher tells the student to go to the music room, not the regular classroom."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:d-cleaning-duty",
    "level": "N5",
    "title": "そうじの時間[じかん]",
    "script": [
      {
        "speaker": "先生[せんせい]",
        "text": "今日[きょう]のそうじの時間[じかん]です。田中[たなか]さんは教室[きょうしつ]のゆかをおねがいします。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、私[わたし]は昨日[きのう]、ゆかをしました。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "あ、そうでしたね。じゃあ、今日[きょう]は黒板[こくばん]をおねがいします。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい。まどもしますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "まどは山田[やまだ]さんがしますから、黒板[こくばん]だけでいいですよ。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "わかりました。黒板[こくばん]ですね。"
      }
    ],
    "translation": "Teacher: It's cleaning time today. Tanaka-san, please do the classroom floor. / Student: Sensei, I did the floor yesterday. / Teacher: Ah, that's right. Then today please do the blackboard. / Student: Yes. Should I do the windows too? / Teacher: Yamada-san will do the windows, so just the blackboard is fine. / Student: Understood. The blackboard, right?",
    "questions": [
      {
        "question": "学生[がくせい]は今日[きょう]、何[なに]をそうじしますか。",
        "questionTranslation": "What does the student clean today?",
        "options": [
          {
            "text": "ゆか",
            "explanation": "The floor was the teacher's first request, but the student did it yesterday, so it changed."
          },
          {
            "text": "まど",
            "explanation": "The windows are Yamada-san's job, not this student's."
          },
          {
            "text": "つくえ",
            "explanation": "Desks are never mentioned in the dialogue."
          },
          {
            "text": "黒板",
            "explanation": "Correct. The teacher says 「今日は黒板をおねがいします」 after learning the student did the floor yesterday."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "まどはだれがそうじしますか。",
        "questionTranslation": "Who cleans the windows?",
        "options": [
          {
            "text": "山田さん",
            "explanation": "Correct. The teacher says 「まどは山田さんがします」 — Yamada-san does the windows."
          },
          {
            "text": "田中さん",
            "explanation": "Tanaka-san does the blackboard today, not the windows."
          },
          {
            "text": "先生",
            "explanation": "The teacher assigns the cleaning but does not clean the windows."
          },
          {
            "text": "だれもしない",
            "explanation": "The windows will be cleaned — by Yamada-san."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:d-summer-homework",
    "level": "N5",
    "title": "夏休[なつやす]みの宿題[しゅくだい]",
    "script": [
      {
        "speaker": "先生[せんせい]",
        "text": "みなさん、夏休[なつやす]みの宿題[しゅくだい]を言[い]います。作文[さくぶん]と漢字[かんじ]の練習[れんしゅう]です。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、数学[すうがく]の宿題[しゅくだい]もありますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いいえ、数学[すうがく]はありません。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "作文[さくぶん]は何[なに]について書[か]きますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "夏休[なつやす]みの旅行[りょこう]について書[か]いてください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "漢字[かんじ]はどのくらいしますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "毎日[まいにち]、5つ練習[れんしゅう]してください。"
      }
    ],
    "translation": "Teacher: Everyone, I'll tell you the summer vacation homework. It's an essay and kanji practice. / Student: Sensei, is there math homework too? / Teacher: No, there is no math. / Student: What do we write the essay about? / Teacher: Please write about your summer vacation trip. / Student: How much kanji do we do? / Teacher: Please practice five every day.",
    "questions": [
      {
        "question": "夏休[なつやす]みの宿題[しゅくだい]は何[なん]ですか。",
        "questionTranslation": "What is the summer vacation homework?",
        "options": [
          {
            "text": "作文と数学",
            "explanation": "The teacher clearly says there is no math homework."
          },
          {
            "text": "作文と漢字の練習",
            "explanation": "Correct. The teacher announces 「作文と漢字の練習です」 as the summer homework."
          },
          {
            "text": "漢字の練習と数学",
            "explanation": "There is no math homework; the two tasks are the essay and kanji practice."
          },
          {
            "text": "作文だけ",
            "explanation": "There is also kanji practice, not only the essay."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "作文[さくぶん]は何[なに]について書[か]きますか。",
        "questionTranslation": "What is the essay about?",
        "options": [
          {
            "text": "家族",
            "explanation": "Family is never mentioned as the essay topic."
          },
          {
            "text": "学校",
            "explanation": "School is not the topic; the essay is about the summer trip."
          },
          {
            "text": "友だち",
            "explanation": "Friends are never mentioned as the essay topic."
          },
          {
            "text": "夏休みの旅行",
            "explanation": "Correct. The teacher says 「夏休みの旅行について書いてください」."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:d-gym-class-tomorrow",
    "level": "N5",
    "title": "明日[あした]の体育[たいいく]",
    "script": [
      {
        "speaker": "先生[せんせい]",
        "text": "明日[あした]は体育[たいいく]の授業[じゅぎょう]があります。運動[うんどう]ぐつを持[も]って来[き]てください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、体育[たいいく]の服[ふく]もいりますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "はい、服[ふく]もいります。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "タオルはどうですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "タオルは学校[がっこう]にありますから、いりません。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "明日[あした]の体育[たいいく]は何時[なんじ]からですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "2時間目[じかんめ]、9時[じ]からです。"
      }
    ],
    "translation": "Teacher: Tomorrow there is P.E. class. Please bring your sports shoes. / Student: Sensei, do we need our gym clothes too? / Teacher: Yes, you need the clothes too. / Student: What about a towel? / Teacher: The school has towels, so you don't need one. / Student: What time is P.E. tomorrow? / Teacher: Second period, from 9 o'clock.",
    "questions": [
      {
        "question": "学生[がくせい]は明日[あした]、何[なに]を持[も]って来[き]ますか。",
        "questionTranslation": "What will the student bring tomorrow?",
        "options": [
          {
            "text": "運動ぐつと体育の服",
            "explanation": "Correct. The teacher asks for sports shoes and confirms gym clothes are also needed; only the towel is not."
          },
          {
            "text": "運動ぐつだけ",
            "explanation": "Gym clothes are also needed, not only the shoes."
          },
          {
            "text": "運動ぐつとタオル",
            "explanation": "The towel is not needed because the school has towels."
          },
          {
            "text": "体育の服とタオル",
            "explanation": "Sports shoes are needed, and the towel is not."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "明日[あした]の体育[たいいく]は何時[なんじ]からですか。",
        "questionTranslation": "What time does tomorrow's P.E. class start?",
        "options": [
          {
            "text": "8時",
            "explanation": "8 o'clock is never mentioned; P.E. starts at 9."
          },
          {
            "text": "10時",
            "explanation": "10 o'clock is never mentioned; P.E. starts at 9."
          },
          {
            "text": "9時",
            "explanation": "Correct. The teacher says 「2時間目、9時からです」 — second period, from 9 o'clock."
          },
          {
            "text": "2時",
            "explanation": "The teacher said second period (2時間目), not 2 o'clock."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:d-test-bring-items",
    "level": "N5",
    "title": "テストの持[も]ち物[もの]",
    "script": [
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、明日[あした]のテストにえんぴつを持[も]って来[き]ますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "はい。えんぴつと消[け]しゴムを持[も]って来[き]てください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "辞書[じしょ]は使[つか]えますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いいえ、辞書[じしょ]は使[つか]えません。かばんに入[い]れてください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "ノートはどうですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "ノートも使[つか]えません。えんぴつと消[け]しゴムだけです。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Student: Sensei, should we bring pencils to tomorrow's test? / Teacher: Yes. Please bring a pencil and an eraser. / Student: Can we use a dictionary? / Teacher: No, you cannot use a dictionary. Please put it in your bag. / Student: What about notebooks? / Teacher: You can't use notebooks either. Only a pencil and an eraser. / Student: Yes, understood.",
    "questions": [
      {
        "question": "学生[がくせい]はテストで何[なに]を使[つか]いますか。",
        "questionTranslation": "What will the student use during the test?",
        "options": [
          {
            "text": "えんぴつと辞書",
            "explanation": "Dictionaries cannot be used during the test."
          },
          {
            "text": "ノートと消しゴム",
            "explanation": "Notebooks cannot be used during the test."
          },
          {
            "text": "辞書とノート",
            "explanation": "Neither dictionaries nor notebooks can be used."
          },
          {
            "text": "えんぴつと消しゴム",
            "explanation": "Correct. The teacher says 「えんぴつと消しゴムだけです」 — only a pencil and an eraser."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "テストの時[とき]、辞書[じしょ]はどうしますか。",
        "questionTranslation": "What should be done with the dictionary during the test?",
        "options": [
          {
            "text": "つくえの上に置く",
            "explanation": "It must go in the bag, not stay on the desk."
          },
          {
            "text": "かばんに入れる",
            "explanation": "Correct. The teacher says 「かばんに入れてください」 — put the dictionary in your bag."
          },
          {
            "text": "先生に渡す",
            "explanation": "Handing it to the teacher is never mentioned."
          },
          {
            "text": "家に置いて来る",
            "explanation": "Leaving it at home is never mentioned; it just cannot be used."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:d-library-book-return",
    "level": "N5",
    "title": "図書室[としょしつ]の本[ほん]",
    "script": [
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、図書室[としょしつ]の本[ほん]はいつまでに返[かえ]しますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いつもは金曜日[きんようび]までです。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "今週[こんしゅう]も金曜日[きんようび]ですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いいえ、今週[こんしゅう]の金曜日[きんようび]は学校[がっこう]が休[やす]みですから、来週[らいしゅう]の月曜日[げつようび]までに返[かえ]してください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "月曜日[げつようび]ですね。本[ほん]は何冊[なんさつ]借[か]りられますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "2冊[さつ]までですよ。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "わかりました。ありがとうございます。"
      }
    ],
    "translation": "Student: Sensei, by when do we return library books? / Teacher: Usually by Friday. / Student: Is it Friday this week too? / Teacher: No, this Friday the school is closed, so please return them by next Monday. / Student: Monday, right? How many books can we borrow? / Teacher: Up to two books. / Student: Understood. Thank you.",
    "questions": [
      {
        "question": "学生[がくせい]は本[ほん]をいつまでに返[かえ]しますか。",
        "questionTranslation": "By when must the student return the books?",
        "options": [
          {
            "text": "今週の金曜日",
            "explanation": "Friday is the usual deadline, but school is closed this Friday."
          },
          {
            "text": "今週の木曜日",
            "explanation": "Thursday is never mentioned in the dialogue."
          },
          {
            "text": "来週の月曜日",
            "explanation": "Correct. Because school is closed Friday, the teacher says 「来週の月曜日までに返してください」."
          },
          {
            "text": "今日中",
            "explanation": "Returning today is never mentioned."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "本[ほん]は何冊[なんさつ]借[か]りられますか。",
        "questionTranslation": "How many books can be borrowed?",
        "options": [
          {
            "text": "1冊",
            "explanation": "The teacher says up to two books, not one."
          },
          {
            "text": "2冊",
            "explanation": "Correct. The teacher says 「2冊までですよ」 — up to two books."
          },
          {
            "text": "3冊",
            "explanation": "The teacher says up to two books, not three."
          },
          {
            "text": "5冊",
            "explanation": "The teacher says up to two books, not five."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:d-soccer-practice-day",
    "level": "N5",
    "title": "サッカー部[ぶ]の練習[れんしゅう]",
    "script": [
      {
        "speaker": "先生[せんせい]",
        "text": "サッカー部[ぶ]のみなさん、今週[こんしゅう]の練習[れんしゅう]について話[はな]します。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、いつもの火曜日[かようび]ですよね。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いいえ、火曜日[かようび]は雨[あめ]ですから、木曜日[もくようび]にします。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "木曜日[もくようび]の何時[なんじ]からですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "学校[がっこう]のあと、3時半[じはん]からです。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "場所[ばしょ]はどこですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いつもと同[おな]じ、学校[がっこう]のグラウンドです。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "わかりました。"
      }
    ],
    "translation": "Teacher: Everyone in the soccer club, I'll talk about this week's practice. / Student: Sensei, it's the usual Tuesday, right? / Teacher: No, it will rain on Tuesday, so we'll make it Thursday. / Student: From what time on Thursday? / Teacher: After school, from 3:30. / Student: Where is it? / Teacher: Same as always, the school ground. / Student: Understood.",
    "questions": [
      {
        "question": "今週[こんしゅう]の練習[れんしゅう]は何曜日[なんようび]ですか。",
        "questionTranslation": "What day is this week's practice?",
        "options": [
          {
            "text": "火曜日",
            "explanation": "Tuesday is the usual day, but it was moved because of rain."
          },
          {
            "text": "水曜日",
            "explanation": "Wednesday is never mentioned in the dialogue."
          },
          {
            "text": "金曜日",
            "explanation": "Friday is never mentioned in the dialogue."
          },
          {
            "text": "木曜日",
            "explanation": "Correct. The teacher says 「火曜日は雨ですから、木曜日にします」."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "どうして練習[れんしゅう]の日[ひ]が変[か]わりましたか。",
        "questionTranslation": "Why did the practice day change?",
        "options": [
          {
            "text": "火曜日は雨だから",
            "explanation": "Correct. The teacher says Tuesday will be rainy, so practice moves to Thursday."
          },
          {
            "text": "先生が忙しいから",
            "explanation": "The teacher's schedule is never mentioned."
          },
          {
            "text": "グラウンドが使えないから",
            "explanation": "The ground is available — they practice at the usual school ground."
          },
          {
            "text": "テストがあるから",
            "explanation": "A test is never mentioned in the dialogue."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:d-question-after-school",
    "level": "N5",
    "title": "先生[せんせい]への質問[しつもん]",
    "script": [
      {
        "speaker": "学生[がくせい]",
        "text": "先生[せんせい]、数学[すうがく]の質問[しつもん]があります。今[いま]、いいですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "すみません、今[いま]から会議[かいぎ]があります。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "じゃあ、昼休[ひるやす]みはどうですか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "昼休[ひるやす]みもだめですね。学校[がっこう]のあと、3時[じ]に来[き]てください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "3時[じ]ですね。どこに行[い]きますか。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "職員室[しょくいんしつ]に来[き]てください。"
      },
      {
        "speaker": "学生[がくせい]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Student: Sensei, I have a math question. Is now OK? / Teacher: Sorry, I have a meeting starting now. / Student: Then how about lunch break? / Teacher: Lunch break is no good either. Please come at 3 o'clock, after school. / Student: 3 o'clock, right? Where should I go? / Teacher: Please come to the staff room. / Student: Yes, understood.",
    "questions": [
      {
        "question": "学生[がくせい]はいつ質問[しつもん]しますか。",
        "questionTranslation": "When will the student ask the question?",
        "options": [
          {
            "text": "今すぐ",
            "explanation": "Now is not possible because the teacher has a meeting."
          },
          {
            "text": "昼休み",
            "explanation": "The student suggested lunch break, but the teacher said it's no good either."
          },
          {
            "text": "学校のあと、3時",
            "explanation": "Correct. The teacher says 「学校のあと、3時に来てください」."
          },
          {
            "text": "明日の朝",
            "explanation": "Tomorrow morning is never mentioned in the dialogue."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "学生[がくせい]は3時[じ]にどこへ行[い]きますか。",
        "questionTranslation": "Where does the student go at 3 o'clock?",
        "options": [
          {
            "text": "教室",
            "explanation": "The classroom is not where the teacher asked the student to come."
          },
          {
            "text": "職員室",
            "explanation": "Correct. The teacher says 「職員室に来てください」 — come to the staff room."
          },
          {
            "text": "図書室",
            "explanation": "The library room is never mentioned in the dialogue."
          },
          {
            "text": "会議室",
            "explanation": "A meeting room is never mentioned; the teacher only says they have a meeting now, and tells the student to come to the staff room at 3."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:d-morning-assembly",
    "level": "N5",
    "title": "明日[あした]の朝[あさ]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさんにお知[し]らせします。"
      },
      {
        "speaker": "アナウンス",
        "text": "明日[あした]の朝[あさ]、体育館[たいいくかん]で集[あつ]まりがあります。"
      },
      {
        "speaker": "アナウンス",
        "text": "いつもは8時半[じはん]に学校[がっこう]に来[き]ますが、明日[あした]は8時[じ]に来[き]てください。"
      },
      {
        "speaker": "アナウンス",
        "text": "教室[きょうしつ]に行[い]かないで、体育館[たいいくかん]に行[い]ってください。"
      },
      {
        "speaker": "アナウンス",
        "text": "かばんも体育館[たいいくかん]に持[も]って行[い]ってください。"
      },
      {
        "speaker": "アナウンス",
        "text": "遅[おく]れないでください。"
      }
    ],
    "translation": "Announcement: An announcement for everyone. Tomorrow morning there is an assembly in the gym. Usually you come to school at 8:30, but tomorrow please come at 8 o'clock. Do not go to your classroom; go to the gym. Please take your bags to the gym too. Please don't be late.",
    "questions": [
      {
        "question": "明日[あした]、学生[がくせい]は何時[なんじ]に学校[がっこう]へ来[き]ますか。",
        "questionTranslation": "What time do the students come to school tomorrow?",
        "options": [
          {
            "text": "8時",
            "explanation": "Correct. The announcement says 「明日は8時に来てください」 — earlier than the usual 8:30."
          },
          {
            "text": "8時半",
            "explanation": "8:30 is the usual time; tomorrow they must come at 8."
          },
          {
            "text": "9時",
            "explanation": "9 o'clock is never mentioned in the announcement."
          },
          {
            "text": "7時半",
            "explanation": "7:30 is never mentioned in the announcement."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "明日[あした]の朝[あさ]、学生[がくせい]はまずどこへ行[い]きますか。",
        "questionTranslation": "Where do the students go first tomorrow morning?",
        "options": [
          {
            "text": "教室",
            "explanation": "The announcement explicitly says not to go to the classroom."
          },
          {
            "text": "職員室",
            "explanation": "The staff room is never mentioned in the announcement."
          },
          {
            "text": "体育館",
            "explanation": "Correct. The announcement says 「教室に行かないで、体育館に行ってください」."
          },
          {
            "text": "運動場",
            "explanation": "The sports ground is never mentioned; the assembly is in the gym."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:e-depato-closing-time",
    "level": "N5",
    "title": "デパートの時間[じかん]",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさま、こんにちは。さくらデパートです。"
      },
      {
        "speaker": "アナウンス",
        "text": "いつもデパートは夜[よる]八時[はちじ]までです。"
      },
      {
        "speaker": "アナウンス",
        "text": "でも、今日[きょう]は七時[しちじ]に閉[し]まります。"
      },
      {
        "speaker": "アナウンス",
        "text": "一階[いっかい]では、今[いま]かばんが安[やす]いです。"
      },
      {
        "speaker": "アナウンス",
        "text": "五階[ごかい]のレストランは六時[ろくじ]までです。"
      },
      {
        "speaker": "アナウンス",
        "text": "時間[じかん]に気[き]をつけてください。"
      },
      {
        "speaker": "アナウンス",
        "text": "ありがとうございます。"
      }
    ],
    "translation": "Announcement: Hello, everyone. This is Sakura Department Store. The store is usually open until 8 p.m. However, today it closes at 7 p.m. On the first floor, bags are on sale now. The restaurant on the fifth floor is open until 6 p.m. Please watch the time. Thank you.",
    "questions": [
      {
        "question": "今日[きょう]、デパートは何時[なんじ]までですか。",
        "questionTranslation": "Until what time is the department store open today?",
        "options": [
          {
            "text": "六時まで",
            "explanation": "6 p.m. is when the fifth-floor restaurant closes, not the whole store."
          },
          {
            "text": "七時まで",
            "explanation": "Correct. The announcement says that although the store is usually open until 8, today it closes at 7 (今日は七時に閉まります)."
          },
          {
            "text": "八時まで",
            "explanation": "8 p.m. is the usual closing time, but the announcement says today is different."
          },
          {
            "text": "九時まで",
            "explanation": "9 p.m. is never mentioned in the announcement."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "レストランは何階[なんかい]にありますか。",
        "questionTranslation": "On what floor is the restaurant?",
        "options": [
          {
            "text": "一階",
            "explanation": "The first floor is where bags are on sale, not the restaurant."
          },
          {
            "text": "三階",
            "explanation": "The third floor is never mentioned."
          },
          {
            "text": "五階",
            "explanation": "Correct. The announcement says the restaurant on the fifth floor (五階のレストラン) is open until 6."
          },
          {
            "text": "六階",
            "explanation": "Six appears only as the restaurant's closing time (六時), not as a floor."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:e-train-snow-delay",
    "level": "N5",
    "title": "雪[ゆき]の日[ひ]の電車[でんしゃ]",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさま、すみません。"
      },
      {
        "speaker": "アナウンス",
        "text": "東京[とうきょう]行[い]きの電車[でんしゃ]のお知[し]らせです。"
      },
      {
        "speaker": "アナウンス",
        "text": "雪[ゆき]で電車[でんしゃ]が遅[おく]れています。"
      },
      {
        "speaker": "アナウンス",
        "text": "いつもは九時半[くじはん]に来[き]ますが、"
      },
      {
        "speaker": "アナウンス",
        "text": "今日[きょう]は十時[じゅうじ]に来[き]ます。"
      },
      {
        "speaker": "アナウンス",
        "text": "急[いそ]ぐ人[ひと]は、駅[えき]の前[まえ]からバスに乗[の]ってください。"
      },
      {
        "speaker": "アナウンス",
        "text": "すみませんが、お願[ねが]いします。"
      }
    ],
    "translation": "Announcement: Everyone, we are sorry. This is an announcement about the train bound for Tokyo. The train is delayed because of snow. It usually arrives at 9:30, but today it will arrive at 10:00. If you are in a hurry, please take the bus from in front of the station. We apologize for the inconvenience.",
    "questions": [
      {
        "question": "電車[でんしゃ]は今日[きょう]、何時[なんじ]に来[き]ますか。",
        "questionTranslation": "What time will the train arrive today?",
        "options": [
          {
            "text": "九時",
            "explanation": "9:00 is never mentioned in the announcement."
          },
          {
            "text": "九時半",
            "explanation": "9:30 is the usual arrival time, but today the train is late because of snow."
          },
          {
            "text": "十時",
            "explanation": "Correct. The announcement says that today the train will arrive at 10:00 (今日は十時に来ます)."
          },
          {
            "text": "十時半",
            "explanation": "10:30 is never mentioned in the announcement."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "急[いそ]ぐ人[ひと]はどうしますか。",
        "questionTranslation": "What should people who are in a hurry do?",
        "options": [
          {
            "text": "駅で電車を待ちます",
            "explanation": "Waiting is for people who are not in a hurry; those in a hurry are told to do something else."
          },
          {
            "text": "駅の前からバスに乗ります",
            "explanation": "Correct. The announcement tells people in a hurry to take the bus from in front of the station (駅の前からバスに乗ってください)."
          },
          {
            "text": "タクシーに乗ります",
            "explanation": "Taxis are never mentioned in the announcement."
          },
          {
            "text": "歩いて東京へ行きます",
            "explanation": "Walking is never mentioned in the announcement."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:e-voicemail-meet-bookstore",
    "level": "N5",
    "title": "明日[あした]の待[ま]ち合[あ]わせ",
    "script": [
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "もしもし、田中[たなか]です。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "明日[あした]のことで電話[でんわ]しました。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "駅[えき]の前[まえ]で会[あ]うと言[い]いましたが、変[か]わりました。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "本屋[ほんや]の前[まえ]に来[き]てください。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "時間[じかん]は同[おな]じで、三時[さんじ]です。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "じゃ、また明日[あした]。"
      }
    ],
    "translation": "Voicemail: Hello, this is Tanaka. I'm calling about tomorrow. I said we would meet in front of the station, but that has changed. Please come to the front of the bookstore. The time is the same, 3 o'clock. Well then, see you tomorrow.",
    "questions": [
      {
        "question": "明日[あした]、どこで会[あ]いますか。",
        "questionTranslation": "Where will they meet tomorrow?",
        "options": [
          {
            "text": "駅の前",
            "explanation": "The station was the original plan, but Tanaka says it has changed (変わりました)."
          },
          {
            "text": "本屋の前",
            "explanation": "Correct. Tanaka asks the listener to come to the front of the bookstore (本屋の前に来てください)."
          },
          {
            "text": "田中さんの家",
            "explanation": "Tanaka's house is never mentioned as a meeting place."
          },
          {
            "text": "学校の前",
            "explanation": "The school is never mentioned in the message."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "何時[なんじ]に会[あ]いますか。",
        "questionTranslation": "What time will they meet?",
        "options": [
          {
            "text": "一時",
            "explanation": "1 o'clock is never mentioned in the message."
          },
          {
            "text": "二時",
            "explanation": "2 o'clock is never mentioned in the message."
          },
          {
            "text": "三時",
            "explanation": "Correct. Tanaka says the time is unchanged, 3 o'clock (時間は同じで、三時です)."
          },
          {
            "text": "四時",
            "explanation": "4 o'clock is never mentioned; only the place changed, not the time."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:e-library-test-week-hours",
    "level": "N5",
    "title": "図書館[としょかん]のお知[し]らせ",
    "script": [
      {
        "speaker": "先生[せんせい]",
        "text": "みなさん、聞[き]いてください。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "学校[がっこう]の図書館[としょかん]のお知[し]らせです。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "いつも図書館[としょかん]は五時[ごじ]までです。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "でも、来週[らいしゅう]テストがありますから、"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "今週[こんしゅう]は六時[ろくじ]まで開[あ]いています。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "土曜日[どようび]は休[やす]みですから、気[き]をつけてください。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "本[ほん]は一人[ひとり]三冊[さんさつ]まで借[か]りることができます。"
      }
    ],
    "translation": "Teacher: Everyone, please listen. This is an announcement about the school library. The library is usually open until 5 o'clock. But because there is a test next week, this week it is open until 6 o'clock. It is closed on Saturday, so please be careful. Each person can borrow up to three books.",
    "questions": [
      {
        "question": "今週[こんしゅう]、図書館[としょかん]は何時[なんじ]までですか。",
        "questionTranslation": "Until what time is the library open this week?",
        "options": [
          {
            "text": "四時まで",
            "explanation": "4 o'clock is never mentioned in the announcement."
          },
          {
            "text": "五時まで",
            "explanation": "5 o'clock is the usual closing time, but this week is different because of the test."
          },
          {
            "text": "六時まで",
            "explanation": "Correct. The teacher says that this week the library is open until 6 (今週は六時まで開いています)."
          },
          {
            "text": "七時まで",
            "explanation": "7 o'clock is never mentioned in the announcement."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "図書館[としょかん]はいつ休[やす]みですか。",
        "questionTranslation": "When is the library closed?",
        "options": [
          {
            "text": "金曜日",
            "explanation": "Friday is never mentioned in the announcement."
          },
          {
            "text": "土曜日",
            "explanation": "Correct. The teacher says the library is closed on Saturday (土曜日は休みです)."
          },
          {
            "text": "日曜日",
            "explanation": "Sunday is never mentioned in the announcement."
          },
          {
            "text": "月曜日",
            "explanation": "Monday is never mentioned in the announcement."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:e-supermarket-fish-sale",
    "level": "N5",
    "title": "スーパーの安売[やすう]り",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "いらっしゃいませ。もりスーパーです。"
      },
      {
        "speaker": "アナウンス",
        "text": "今日[きょう]は魚[さかな]がとても安[やす]いです。"
      },
      {
        "speaker": "アナウンス",
        "text": "魚[さかな]は二百円[にひゃくえん]です。"
      },
      {
        "speaker": "アナウンス",
        "text": "肉[にく]は明日[あした]安[やす]くなります。"
      },
      {
        "speaker": "アナウンス",
        "text": "それから、三時[さんじ]から新[あたら]しいパンを売[う]ります。"
      },
      {
        "speaker": "アナウンス",
        "text": "パンの店[みせ]は入口[いりぐち]の近[ちか]くです。"
      },
      {
        "speaker": "アナウンス",
        "text": "どうぞゆっくり買[か]い物[もの]をしてください。"
      }
    ],
    "translation": "Announcement: Welcome to Mori Supermarket. Today, fish is very cheap. Fish is 200 yen. Meat will become cheap tomorrow. Also, from 3 o'clock we will sell fresh bread. The bread shop is near the entrance. Please enjoy your shopping.",
    "questions": [
      {
        "question": "今日[きょう]、何[なに]が安[やす]いですか。",
        "questionTranslation": "What is cheap today?",
        "options": [
          {
            "text": "魚",
            "explanation": "Correct. The announcement says that today fish is very cheap (今日は魚がとても安いです)."
          },
          {
            "text": "肉",
            "explanation": "Meat becomes cheap tomorrow, not today."
          },
          {
            "text": "パン",
            "explanation": "Bread is sold fresh from 3 o'clock; the announcement does not say it is cheap."
          },
          {
            "text": "たまご",
            "explanation": "Eggs are never mentioned in the announcement."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "肉[にく]はいつ安[やす]くなりますか。",
        "questionTranslation": "When will meat become cheap?",
        "options": [
          {
            "text": "今日",
            "explanation": "Today it is fish that is cheap, not meat."
          },
          {
            "text": "明日",
            "explanation": "Correct. The announcement says meat will become cheap tomorrow (肉は明日安くなります)."
          },
          {
            "text": "あさって",
            "explanation": "The day after tomorrow is never mentioned in the announcement."
          },
          {
            "text": "来週",
            "explanation": "Next week is never mentioned in the announcement."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:e-voicemail-picnic-drinks",
    "level": "N5",
    "title": "ピクニックの電話[でんわ]",
    "script": [
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "もしもし、山田[やまだ]です。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "明日[あした]のピクニックのことです。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "わたしはおにぎりを作[つく]って持[も]って行[い]きます。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "すみませんが、飲[の]み物[もの]を持[も]って来[き]てください。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "お菓子[かし]は木村[きむら]さんが持[も]って来[き]ますから、買[か]わなくてもいいです。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "明日[あした]は九時[くじ]に公園[こうえん]の入口[いりぐち]で会[あ]いましょう。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "じゃ、よろしくお願[ねが]いします。"
      }
    ],
    "translation": "Voicemail: Hello, this is Yamada. It's about tomorrow's picnic. I will make rice balls and bring them. Sorry, but please bring drinks. Kimura will bring snacks, so you don't need to buy any. Tomorrow let's meet at 9 o'clock at the park entrance. Well then, thank you.",
    "questions": [
      {
        "question": "聞[き]いている人[ひと]は、明日[あした]何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What will the listener bring tomorrow?",
        "options": [
          {
            "text": "おにぎり",
            "explanation": "Yamada, the caller, will make and bring the rice balls."
          },
          {
            "text": "飲み物",
            "explanation": "Correct. Yamada asks the listener to bring drinks (飲み物を持って来てください)."
          },
          {
            "text": "お菓子",
            "explanation": "Kimura will bring the snacks, so the listener does not need to buy any."
          },
          {
            "text": "お弁当",
            "explanation": "A boxed lunch is never mentioned in the message."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "明日[あした]、何時[なんじ]にどこで会[あ]いますか。",
        "questionTranslation": "What time and where will they meet tomorrow?",
        "options": [
          {
            "text": "九時に公園の入口で",
            "explanation": "Correct. Yamada says to meet at 9 o'clock at the park entrance (九時に公園の入口で会いましょう)."
          },
          {
            "text": "九時に駅の前で",
            "explanation": "The station is never mentioned; the meeting place is the park entrance."
          },
          {
            "text": "十時に公園の入口で",
            "explanation": "The time is 9 o'clock, not 10 o'clock."
          },
          {
            "text": "十時に木村さんの家で",
            "explanation": "Kimura's house is never mentioned as a meeting place, and the time is 9."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:e-station-red-umbrella",
    "level": "N5",
    "title": "忘[わす]れ物[もの]のかさ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさまにお知[し]らせします。"
      },
      {
        "speaker": "アナウンス",
        "text": "電車[でんしゃ]の中[なか]に赤[あか]いかさがありました。"
      },
      {
        "speaker": "アナウンス",
        "text": "かさは今[いま]、駅[えき]の二階[にかい]の事務所[じむしょ]にあります。"
      },
      {
        "speaker": "アナウンス",
        "text": "かさを忘[わす]れた人[ひと]は、事務所[じむしょ]に来[き]てください。"
      },
      {
        "speaker": "アナウンス",
        "text": "事務所[じむしょ]は夜[よる]九時[くじ]までです。"
      },
      {
        "speaker": "アナウンス",
        "text": "お願[ねが]いします。"
      }
    ],
    "translation": "Announcement: Attention, everyone. A red umbrella was found inside a train. The umbrella is now in the office on the second floor of the station. If you forgot your umbrella, please come to the office. The office is open until 9 p.m. Thank you.",
    "questions": [
      {
        "question": "電車[でんしゃ]の中[なか]に何[なに]がありましたか。",
        "questionTranslation": "What was found inside the train?",
        "options": [
          {
            "text": "赤いかさ",
            "explanation": "Correct. The announcement says a red umbrella was found inside the train (電車の中に赤いかさがありました)."
          },
          {
            "text": "黒いかさ",
            "explanation": "The umbrella that was found is red, not black."
          },
          {
            "text": "赤いかばん",
            "explanation": "The item found is an umbrella, not a bag."
          },
          {
            "text": "白いぼうし",
            "explanation": "A hat is never mentioned in the announcement."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "かさは今[いま]、どこにありますか。",
        "questionTranslation": "Where is the umbrella now?",
        "options": [
          {
            "text": "電車の中",
            "explanation": "The umbrella was found in the train, but it has been moved to the office."
          },
          {
            "text": "駅の一階",
            "explanation": "The office is on the second floor, not the first floor."
          },
          {
            "text": "駅の二階の事務所",
            "explanation": "Correct. The announcement says the umbrella is now in the office on the second floor of the station (駅の二階の事務所にあります)."
          },
          {
            "text": "交番",
            "explanation": "A police box is never mentioned in the announcement."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:e-city-pool-summer",
    "level": "N5",
    "title": "市[し]のプール",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "市[し]のプールのお知[し]らせです。"
      },
      {
        "speaker": "アナウンス",
        "text": "プールは七月[しちがつ]十日[とおか]から始[はじ]まります。"
      },
      {
        "speaker": "アナウンス",
        "text": "時間[じかん]は朝[あさ]九時[くじ]から夕方[ゆうがた]五時[ごじ]までです。"
      },
      {
        "speaker": "アナウンス",
        "text": "月曜日[げつようび]は休[やす]みです。"
      },
      {
        "speaker": "アナウンス",
        "text": "お金[かね]は、子[こ]どもは百円[ひゃくえん]、大人[おとな]は三百円[さんびゃくえん]です。"
      },
      {
        "speaker": "アナウンス",
        "text": "タオルと帽子[ぼうし]を持[も]って来[き]てください。"
      },
      {
        "speaker": "アナウンス",
        "text": "みなさん、どうぞ来[き]てください。"
      }
    ],
    "translation": "Announcement: This is an announcement about the city pool. The pool opens from July 10th. The hours are from 9 in the morning until 5 in the evening. It is closed on Mondays. The fee is 100 yen for children and 300 yen for adults. Please bring a towel and a cap. Everyone, please come.",
    "questions": [
      {
        "question": "プールはいつ休[やす]みですか。",
        "questionTranslation": "When is the pool closed?",
        "options": [
          {
            "text": "日曜日",
            "explanation": "Sunday is never mentioned in the announcement."
          },
          {
            "text": "月曜日",
            "explanation": "Correct. The announcement says the pool is closed on Mondays (月曜日は休みです)."
          },
          {
            "text": "火曜日",
            "explanation": "Tuesday is never mentioned in the announcement."
          },
          {
            "text": "土曜日",
            "explanation": "Saturday is never mentioned in the announcement."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "子[こ]どもはいくらですか。",
        "questionTranslation": "How much is it for children?",
        "options": [
          {
            "text": "百円",
            "explanation": "Correct. The announcement says children pay 100 yen (子どもは百円)."
          },
          {
            "text": "二百円",
            "explanation": "200 yen is never mentioned in the announcement."
          },
          {
            "text": "三百円",
            "explanation": "300 yen is the fee for adults, not children."
          },
          {
            "text": "五百円",
            "explanation": "500 yen is never mentioned in the announcement."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:e-voicemail-english-dictionary",
    "level": "N5",
    "title": "明日[あした]の授業[じゅぎょう]",
    "script": [
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "もしもし、けんです。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "明日[あした]の英語[えいご]の授業[じゅぎょう]のことです。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "先生[せんせい]が、辞書[じしょ]を持[も]って来[き]てくださいと言[い]いました。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "教科書[きょうかしょ]は明日[あした]は使[つか]いません。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "それから、あなたのノートがわたしの家[いえ]にありますよ。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "明日[あした]、学校[がっこう]で渡[わた]しますね。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "じゃ、また明日[あした]。"
      }
    ],
    "translation": "Voicemail: Hello, this is Ken. It's about tomorrow's English class. The teacher said to bring a dictionary. We won't use the textbook tomorrow. Also, your notebook is at my house. I'll hand it to you at school tomorrow. Well then, see you tomorrow.",
    "questions": [
      {
        "question": "明日[あした]、何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What should the listener bring tomorrow?",
        "options": [
          {
            "text": "辞書",
            "explanation": "Correct. Ken says the teacher asked everyone to bring a dictionary (辞書を持って来てくださいと言いました)."
          },
          {
            "text": "教科書",
            "explanation": "Ken says the textbook will not be used tomorrow."
          },
          {
            "text": "ノート",
            "explanation": "The listener's notebook is at Ken's house; Ken will bring it and hand it over at school."
          },
          {
            "text": "えんぴつ",
            "explanation": "Pencils are never mentioned in the message."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "ノートは今[いま]、どこにありますか。",
        "questionTranslation": "Where is the notebook now?",
        "options": [
          {
            "text": "学校",
            "explanation": "The notebook will be handed over at school tomorrow, but it is not there now."
          },
          {
            "text": "けんさんの家",
            "explanation": "Correct. Ken says the listener's notebook is at his house (あなたのノートがわたしの家にありますよ)."
          },
          {
            "text": "聞いている人の家",
            "explanation": "The notebook is at Ken's house, not the listener's own house."
          },
          {
            "text": "図書館",
            "explanation": "The library is never mentioned in the message."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:e-depato-elevator-stop",
    "level": "N5",
    "title": "エレベーターのお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "お客[きゃく]さまにお知[し]らせします。"
      },
      {
        "speaker": "アナウンス",
        "text": "今[いま]、エレベーターが止[と]まっています。"
      },
      {
        "speaker": "アナウンス",
        "text": "エスカレーターか階段[かいだん]を使[つか]ってください。"
      },
      {
        "speaker": "アナウンス",
        "text": "エレベーターは三時[さんじ]から動[うご]きます。"
      },
      {
        "speaker": "アナウンス",
        "text": "みなさま、すみません。"
      },
      {
        "speaker": "アナウンス",
        "text": "よろしくお願[ねが]いします。"
      }
    ],
    "translation": "Announcement: Attention, customers. The elevator is stopped right now. Please use the escalator or the stairs. The elevator will start running from 3 o'clock. We apologize to everyone. Thank you for your understanding.",
    "questions": [
      {
        "question": "今[いま]、何[なに]を使[つか]いますか。",
        "questionTranslation": "What should people use now?",
        "options": [
          {
            "text": "エレベーターを使います",
            "explanation": "The elevator is stopped right now, so it cannot be used."
          },
          {
            "text": "エスカレーターか階段を使います",
            "explanation": "Correct. The announcement says to use the escalator or the stairs (エスカレーターか階段を使ってください)."
          },
          {
            "text": "店の外に出ます",
            "explanation": "Going outside is never mentioned in the announcement."
          },
          {
            "text": "三時まで待ちます",
            "explanation": "The announcement does not ask people to wait; it tells them to use the escalator or stairs."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "エレベーターは何時[なんじ]から動[うご]きますか。",
        "questionTranslation": "From what time will the elevator run?",
        "options": [
          {
            "text": "一時から",
            "explanation": "1 o'clock is never mentioned in the announcement."
          },
          {
            "text": "二時から",
            "explanation": "2 o'clock is never mentioned in the announcement."
          },
          {
            "text": "三時から",
            "explanation": "Correct. The announcement says the elevator will run from 3 o'clock (エレベーターは三時から動きます)."
          },
          {
            "text": "四時から",
            "explanation": "4 o'clock is never mentioned in the announcement."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:e-voicemail-mother-milk",
    "level": "N5",
    "title": "お母[かあ]さんの留守番電話[るすばんでんわ]",
    "script": [
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "もしもし、お母[かあ]さんです。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "今日[きょう]は仕事[しごと]が忙[いそが]しいですから、遅[おそ]くなります。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "九時[くじ]ごろ家[いえ]に帰[かえ]ります。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "晩[ばん]ご飯[はん]は冷蔵庫[れいぞうこ]の中[なか]にありますから、食[た]べてください。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "それから、牛乳[ぎゅうにゅう]を買[か]って来[き]てください。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "パンは家[いえ]にありますから、買[か]わなくてもいいです。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "じゃ、お願[ねが]いね。"
      }
    ],
    "translation": "Voicemail: Hello, it's Mom. I'm busy at work today, so I'll be late. I'll come home around 9 o'clock. Dinner is in the refrigerator, so please eat it. Also, please go buy some milk. There is bread at home, so you don't need to buy any. Well then, please take care of it.",
    "questions": [
      {
        "question": "聞[き]いている人[ひと]は何[なに]を買[か]いますか。",
        "questionTranslation": "What will the listener buy?",
        "options": [
          {
            "text": "牛乳",
            "explanation": "Correct. The mother asks the listener to go buy milk (牛乳を買って来てください)."
          },
          {
            "text": "パン",
            "explanation": "There is already bread at home, so the mother says not to buy any."
          },
          {
            "text": "晩ご飯",
            "explanation": "Dinner is already in the refrigerator; there is no need to buy it."
          },
          {
            "text": "たまご",
            "explanation": "Eggs are never mentioned in the message."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "お母[かあ]さんは何時[なんじ]ごろ帰[かえ]りますか。",
        "questionTranslation": "Around what time will the mother come home?",
        "options": [
          {
            "text": "六時ごろ",
            "explanation": "6 o'clock is never mentioned in the message."
          },
          {
            "text": "七時ごろ",
            "explanation": "7 o'clock is never mentioned in the message."
          },
          {
            "text": "八時ごろ",
            "explanation": "8 o'clock is never mentioned in the message."
          },
          {
            "text": "九時ごろ",
            "explanation": "Correct. The mother says she will come home around 9 (九時ごろ家に帰ります)."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:e-museum-rules-hours",
    "level": "N5",
    "title": "美術館[びじゅつかん]の案内[あんない]",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "こちらは市[し]の美術館[びじゅつかん]です。"
      },
      {
        "speaker": "アナウンス",
        "text": "美術館[びじゅつかん]は十時[じゅうじ]から四時[よじ]までです。"
      },
      {
        "speaker": "アナウンス",
        "text": "火曜日[かようび]は休[やす]みです。"
      },
      {
        "speaker": "アナウンス",
        "text": "今[いま]、二階[にかい]で古[ふる]い絵[え]を見[み]ることができます。"
      },
      {
        "speaker": "アナウンス",
        "text": "中[なか]で写真[しゃしん]を撮[と]らないでください。"
      },
      {
        "speaker": "アナウンス",
        "text": "大人[おとな]は五百円[ごひゃくえん]です。"
      },
      {
        "speaker": "アナウンス",
        "text": "どうぞゆっくり見[み]てください。"
      }
    ],
    "translation": "Announcement: This is the city art museum. The museum is open from 10 to 4. It is closed on Tuesdays. Right now, you can see old paintings on the second floor. Please do not take photos inside. Adults are 500 yen. Please take your time and enjoy.",
    "questions": [
      {
        "question": "美術館[びじゅつかん]はいつ休[やす]みですか。",
        "questionTranslation": "When is the museum closed?",
        "options": [
          {
            "text": "月曜日",
            "explanation": "Monday is never mentioned in the announcement."
          },
          {
            "text": "火曜日",
            "explanation": "Correct. The announcement says the museum is closed on Tuesdays (火曜日は休みです)."
          },
          {
            "text": "水曜日",
            "explanation": "Wednesday is never mentioned in the announcement."
          },
          {
            "text": "日曜日",
            "explanation": "Sunday is never mentioned in the announcement."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "美術館[びじゅつかん]の中[なか]で、してはいけないことは何[なん]ですか。",
        "questionTranslation": "What must you not do inside the museum?",
        "options": [
          {
            "text": "絵を見ること",
            "explanation": "Looking at the paintings is exactly what visitors are invited to do."
          },
          {
            "text": "写真を撮ること",
            "explanation": "Correct. The announcement says not to take photos inside (写真を撮らないでください)."
          },
          {
            "text": "ゆっくり歩くこと",
            "explanation": "The announcement actually invites visitors to take their time."
          },
          {
            "text": "二階に行くこと",
            "explanation": "The second floor is where the old paintings can be seen, so going there is fine."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:e-school-zoo-trip",
    "level": "N5",
    "title": "動物園[どうぶつえん]の遠足[えんそく]",
    "script": [
      {
        "speaker": "先生[せんせい]",
        "text": "みなさん、明日[あした]は動物園[どうぶつえん]に行[い]きます。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "朝[あさ]八時半[はちじはん]に学校[がっこう]に来[き]てください。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "バスは九時[くじ]に学校[がっこう]を出[で]ます。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "お弁当[べんとう]と飲[の]み物[もの]を持[も]って来[き]てください。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "お菓子[かし]は持[も]って来[こ]ないでください。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "雨[あめ]の時[とき]は、学校[がっこう]で動物[どうぶつ]の映画[えいが]を見[み]ます。"
      },
      {
        "speaker": "先生[せんせい]",
        "text": "じゃ、また明日[あした]。"
      }
    ],
    "translation": "Teacher: Everyone, tomorrow we are going to the zoo. Please come to school at 8:30 in the morning. The bus leaves school at 9:00. Please bring a boxed lunch and a drink. Please do not bring snacks. If it rains, we will watch an animal movie at school. Well then, see you tomorrow.",
    "questions": [
      {
        "question": "明日[あした]、何時[なんじ]に学校[がっこう]に来[き]ますか。",
        "questionTranslation": "What time should the students come to school tomorrow?",
        "options": [
          {
            "text": "八時",
            "explanation": "8:00 is never mentioned in the announcement."
          },
          {
            "text": "八時半",
            "explanation": "Correct. The teacher says to come to school at 8:30 (朝八時半に学校に来てください)."
          },
          {
            "text": "九時",
            "explanation": "9:00 is when the bus leaves, not when students must arrive."
          },
          {
            "text": "九時半",
            "explanation": "9:30 is never mentioned in the announcement."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "明日[あした]、何[なに]を持[も]って来[き]ますか。",
        "questionTranslation": "What should the students bring tomorrow?",
        "options": [
          {
            "text": "お弁当と飲み物",
            "explanation": "Correct. The teacher says to bring a boxed lunch and a drink (お弁当と飲み物を持って来てください)."
          },
          {
            "text": "お弁当とお菓子",
            "explanation": "The teacher explicitly says not to bring snacks."
          },
          {
            "text": "飲み物とお菓子",
            "explanation": "The teacher explicitly says not to bring snacks; a boxed lunch is needed too."
          },
          {
            "text": "お菓子だけ",
            "explanation": "Snacks are the one thing the teacher says not to bring."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:e-train-platform-change",
    "level": "N5",
    "title": "電車[でんしゃ]のホーム",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "みなさまにお知[し]らせします。"
      },
      {
        "speaker": "アナウンス",
        "text": "十時[じゅうじ]の大阪[おおさか]行[い]きの電車[でんしゃ]です。"
      },
      {
        "speaker": "アナウンス",
        "text": "いつもは二番[にばん]ホームから出[で]ますが、"
      },
      {
        "speaker": "アナウンス",
        "text": "今日[きょう]は三番[さんばん]ホームから出[で]ます。"
      },
      {
        "speaker": "アナウンス",
        "text": "時間[じかん]は変[か]わりません。十時[じゅうじ]です。"
      },
      {
        "speaker": "アナウンス",
        "text": "気[き]をつけてください。"
      }
    ],
    "translation": "Announcement: Attention, everyone. This is about the 10 o'clock train bound for Osaka. It usually departs from platform 2, but today it departs from platform 3. The time has not changed; it is 10 o'clock. Please be careful.",
    "questions": [
      {
        "question": "今日[きょう]、大阪[おおさか]行[い]きの電車[でんしゃ]はどこから出[で]ますか。",
        "questionTranslation": "From where does the Osaka-bound train depart today?",
        "options": [
          {
            "text": "一番ホーム",
            "explanation": "Platform 1 is never mentioned in the announcement."
          },
          {
            "text": "二番ホーム",
            "explanation": "Platform 2 is the usual platform, but today it has changed."
          },
          {
            "text": "三番ホーム",
            "explanation": "Correct. The announcement says that today the train departs from platform 3 (今日は三番ホームから出ます)."
          },
          {
            "text": "四番ホーム",
            "explanation": "Platform 4 is never mentioned in the announcement."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "電車[でんしゃ]は何時[なんじ]に出[で]ますか。",
        "questionTranslation": "What time does the train depart?",
        "options": [
          {
            "text": "九時",
            "explanation": "9 o'clock is never mentioned in the announcement."
          },
          {
            "text": "十時",
            "explanation": "Correct. The announcement says the time has not changed and the train departs at 10 (時間は変わりません。十時です)."
          },
          {
            "text": "十時半",
            "explanation": "10:30 is never mentioned in the announcement."
          },
          {
            "text": "十一時",
            "explanation": "11 o'clock is never mentioned; only the platform changed, not the time."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:e-bus-stop-festival",
    "level": "N5",
    "title": "バス停[てい]のお知[し]らせ",
    "script": [
      {
        "speaker": "アナウンス",
        "text": "バスに乗[の]るみなさまにお知[し]らせします。"
      },
      {
        "speaker": "アナウンス",
        "text": "明日[あした]、駅[えき]の前[まえ]でお祭[まつ]りがあります。"
      },
      {
        "speaker": "アナウンス",
        "text": "ですから、明日[あした]バスは駅[えき]の前[まえ]に止[と]まりません。"
      },
      {
        "speaker": "アナウンス",
        "text": "図書館[としょかん]の前[まえ]から乗[の]ってください。"
      },
      {
        "speaker": "アナウンス",
        "text": "あさってからは、いつもと同[おな]じです。"
      },
      {
        "speaker": "アナウンス",
        "text": "すみませんが、よろしくお願[ねが]いします。"
      }
    ],
    "translation": "Announcement: Attention, all bus passengers. Tomorrow there will be a festival in front of the station. Therefore, tomorrow the bus will not stop in front of the station. Please board in front of the library. From the day after tomorrow, everything will be back to normal. We are sorry, and thank you for your understanding.",
    "questions": [
      {
        "question": "明日[あした]、どこからバスに乗[の]りますか。",
        "questionTranslation": "From where should people board the bus tomorrow?",
        "options": [
          {
            "text": "駅の前",
            "explanation": "The bus will not stop in front of the station tomorrow because of the festival."
          },
          {
            "text": "図書館の前",
            "explanation": "Correct. The announcement says to board in front of the library (図書館の前から乗ってください)."
          },
          {
            "text": "学校の前",
            "explanation": "The school is never mentioned in the announcement."
          },
          {
            "text": "公園の前",
            "explanation": "The park is never mentioned in the announcement."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうして明日[あした]、バスは駅[えき]の前[まえ]に止[と]まりませんか。",
        "questionTranslation": "Why won't the bus stop in front of the station tomorrow?",
        "options": [
          {
            "text": "雨が降るから",
            "explanation": "Rain is never mentioned in the announcement."
          },
          {
            "text": "お祭りがあるから",
            "explanation": "Correct. The announcement says there will be a festival in front of the station tomorrow (駅の前でお祭りがあります)."
          },
          {
            "text": "道を直すから",
            "explanation": "Road work is never mentioned in the announcement."
          },
          {
            "text": "バスが古いから",
            "explanation": "The age of the bus is never mentioned in the announcement."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:f-picnic-rain-day",
    "level": "N5",
    "title": "ピクニックの日[ひ]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "土曜日[どようび]、みんなでピクニックに行[い]きましょう。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。でも、土曜日[どようび]は雨[あめ]ですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですか。じゃあ、日曜日[にちようび]はどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "日曜日[にちようび]は晴[は]れですね。日曜日[にちようび]にしましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "何時[なんじ]に会[あ]いますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "朝[あさ]10時[じ]に駅[えき]の前[まえ]でどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですよ。じゃあ、日曜日[にちようび]の10時[じ]に。"
      }
    ],
    "translation": "Woman: Let's all go on a picnic on Saturday. / Man: Sounds good. But it's going to rain on Saturday. / Woman: Really? Then how about Sunday? / Man: Sunday will be sunny. Let's make it Sunday. / Woman: What time shall we meet? / Man: How about 10 in the morning, in front of the station? / Woman: Fine. See you Sunday at 10, then.",
    "questions": [
      {
        "question": "二人[ふたり]はいつピクニックに行[い]きますか。",
        "questionTranslation": "When will the two of them go on the picnic?",
        "options": [
          {
            "text": "土曜日",
            "explanation": "Saturday was the first suggestion, but the man says it will rain on Saturday, so they change the day."
          },
          {
            "text": "日曜日",
            "explanation": "Correct. Because Saturday will be rainy, they agree on Sunday: 「日曜日にしましょう」."
          },
          {
            "text": "金曜日",
            "explanation": "Friday is never mentioned in the conversation."
          },
          {
            "text": "今日",
            "explanation": "They are planning for the weekend, not going today."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "二人[ふたり]はどこで会[あ]いますか。",
        "questionTranslation": "Where will the two of them meet?",
        "options": [
          {
            "text": "公園の中",
            "explanation": "A park is where a picnic might happen, but the meeting place they agree on is the station."
          },
          {
            "text": "デパートの前",
            "explanation": "A department store is never mentioned."
          },
          {
            "text": "駅の前",
            "explanation": "Correct. The man proposes 「駅の前でどうですか」 and the woman agrees."
          },
          {
            "text": "学校の前",
            "explanation": "A school is never mentioned."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:f-which-movie",
    "level": "N5",
    "title": "何[なん]の映画[えいが]を見[み]る?",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "今日[きょう]、映画[えいが]を見[み]に行[い]きませんか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですね。何[なに]を見[み]ますか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "猫[ねこ]の映画[えいが]はどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "うーん、それはもう見[み]ました。犬[いぬ]の映画[えいが]は?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですよ。何時[なんじ]からですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "3時[じ]からです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、2時半[じはん]に映画館[えいがかん]の前[まえ]で会[あ]いましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Man: Won't you go see a movie today? / Woman: Sounds good. What shall we watch? / Man: How about the cat movie? / Woman: Hmm, I've already seen that one. What about the dog movie? / Man: Fine by me. What time does it start? / Woman: It starts at 3. / Man: Then let's meet at 2:30 in front of the movie theater. / Woman: OK, got it.",
    "questions": [
      {
        "question": "二人[ふたり]は何[なん]の映画[えいが]を見[み]ますか。",
        "questionTranslation": "What movie will the two of them watch?",
        "options": [
          {
            "text": "猫の映画",
            "explanation": "The man suggests the cat movie, but the woman has already seen it, so they pick something else."
          },
          {
            "text": "犬の映画",
            "explanation": "Correct. The woman proposes 「犬の映画は?」 and the man says 「いいですよ」."
          },
          {
            "text": "車の映画",
            "explanation": "A car movie is never mentioned."
          },
          {
            "text": "海の映画",
            "explanation": "A sea movie is never mentioned."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "二人[ふたり]は何時[なんじ]に会[あ]いますか。",
        "questionTranslation": "What time will the two of them meet?",
        "options": [
          {
            "text": "2時",
            "explanation": "2:00 is not mentioned; they meet at 2:30."
          },
          {
            "text": "3時",
            "explanation": "3:00 is when the movie starts, not when they meet."
          },
          {
            "text": "3時半",
            "explanation": "3:30 is not mentioned."
          },
          {
            "text": "2時半",
            "explanation": "Correct. The man says 「2時半に映画館の前で会いましょう」."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:f-mothers-birthday-present",
    "level": "N5",
    "title": "母[はは]の誕生日[たんじょうび]のプレゼント",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "明日[あした]は母[はは]の誕生日[たんじょうび]です。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "プレゼントはもう買[か]いましたか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいえ、まだです。何[なに]がいいですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ケーキはどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "ケーキは父[ちち]が買[か]います。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、花[はな]はどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですね。花[はな]にします。"
      }
    ],
    "translation": "Woman: Tomorrow is my mother's birthday. / Man: Have you already bought a present? / Woman: No, not yet. What would be good? / Man: How about a cake? / Woman: My father is buying the cake. / Man: Then how about flowers? / Woman: Good idea. I'll go with flowers.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は何[なに]を買[か]いますか。",
        "questionTranslation": "What will the woman buy?",
        "options": [
          {
            "text": "ケーキ",
            "explanation": "Cake was suggested, but the woman says her father is buying the cake."
          },
          {
            "text": "プレゼントは買わない",
            "explanation": "She does decide to buy something: flowers."
          },
          {
            "text": "花",
            "explanation": "Correct. After hearing the cake is covered, she says 「花にします」."
          },
          {
            "text": "本",
            "explanation": "A book is never mentioned."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "明日[あした]は誰[だれ]の誕生日[たんじょうび]ですか。",
        "questionTranslation": "Whose birthday is it tomorrow?",
        "options": [
          {
            "text": "女の人のお母さん",
            "explanation": "Correct. The woman opens with 「明日は母の誕生日です」."
          },
          {
            "text": "女の人のお父さん",
            "explanation": "The father is buying the cake; it is not his birthday."
          },
          {
            "text": "女の人",
            "explanation": "It is the woman's mother's birthday, not her own."
          },
          {
            "text": "男の人",
            "explanation": "It is not the man's birthday."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:f-dinner-ramen",
    "level": "N5",
    "title": "今晩[こんばん]、何[なに]を食[た]べる?",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "今晩[こんばん]、何[なに]を食[た]べますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "カレーはどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "カレーは昨日[きのう]食[た]べましたよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、すしは?"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "すしは高[たか]いですよ。ラーメンはどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですね。駅[えき]の近[ちか]くに新[あたら]しいラーメンの店[みせ]がありますよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、そこに行[い]きましょう。"
      }
    ],
    "translation": "Man: What shall we eat tonight? / Woman: How about curry? / Man: We had curry yesterday. / Woman: Then sushi? / Man: Sushi is expensive. How about ramen? / Woman: Sounds good. There's a new ramen shop near the station. / Man: Then let's go there.",
    "questions": [
      {
        "question": "二人[ふたり]は今晩[こんばん]、何[なに]を食[た]べますか。",
        "questionTranslation": "What will the two of them eat tonight?",
        "options": [
          {
            "text": "カレー",
            "explanation": "Curry was suggested but rejected because they ate it yesterday."
          },
          {
            "text": "すし",
            "explanation": "Sushi was suggested but rejected because it is expensive."
          },
          {
            "text": "そば",
            "explanation": "Soba is never mentioned."
          },
          {
            "text": "ラーメン",
            "explanation": "Correct. The man suggests ramen and they agree to go to the new ramen shop near the station."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "どうしてすしを食[た]べませんか。",
        "questionTranslation": "Why won't they eat sushi?",
        "options": [
          {
            "text": "昨日食べたから",
            "explanation": "Yesterday's meal was curry, not sushi."
          },
          {
            "text": "高いから",
            "explanation": "Correct. The man says 「すしは高いですよ」."
          },
          {
            "text": "店が休みだから",
            "explanation": "Nothing is said about a shop being closed."
          },
          {
            "text": "店が遠いから",
            "explanation": "Distance is never given as a reason."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:f-sunday-pool",
    "level": "N5",
    "title": "日曜日[にちようび]のお出[で]かけ",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "日曜日[にちようび]、どこかへ行[い]きませんか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。動物園[どうぶつえん]はどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "動物園[どうぶつえん]は先週[せんしゅう]行[い]きました。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、海[うみ]は?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "海[うみ]はちょっと遠[とお]いですね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、プールはどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですね。プールに行[い]きましょう。"
      }
    ],
    "translation": "Woman: Shall we go somewhere on Sunday? / Man: Sounds good. How about the zoo? / Woman: We went to the zoo last week. / Man: Then the beach? / Woman: The beach is a bit far. / Man: Then how about the pool? / Woman: Good idea. Let's go to the pool.",
    "questions": [
      {
        "question": "二人[ふたり]は日曜日[にちようび]、どこへ行[い]きますか。",
        "questionTranslation": "Where will the two of them go on Sunday?",
        "options": [
          {
            "text": "プール",
            "explanation": "Correct. After rejecting the zoo and the beach, they agree: 「プールに行きましょう」."
          },
          {
            "text": "動物園",
            "explanation": "The zoo was suggested but rejected because they went there last week."
          },
          {
            "text": "海",
            "explanation": "The beach was suggested but rejected because it is too far."
          },
          {
            "text": "映画館",
            "explanation": "A movie theater is never mentioned."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "どうして海[うみ]に行[い]きませんか。",
        "questionTranslation": "Why won't they go to the beach?",
        "options": [
          {
            "text": "先週行ったから",
            "explanation": "Last week they went to the zoo, not the beach."
          },
          {
            "text": "雨が降るから",
            "explanation": "The weather is never mentioned."
          },
          {
            "text": "遠いから",
            "explanation": "Correct. The woman says 「海はちょっと遠いですね」."
          },
          {
            "text": "高いから",
            "explanation": "Cost is never mentioned."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:f-voicemail-meeting-time",
    "level": "N5",
    "title": "明日[あした]の時間[じかん]",
    "script": [
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "もしもし、山田[やまだ]です。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "明日[あした]のことです。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "12時[じ]に駅[えき]で会[あ]いますね。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "すみませんが、午前中[ごぜんちゅう]は用事[ようじ]があります。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "1時[じ]に来[き]てください。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "場所[ばしょ]は同[おな]じ、駅[えき]の北口[きたぐち]です。"
      },
      {
        "speaker": "留守番電話[るすばんでんわ]",
        "text": "じゃあ、明日[あした]、よろしくお願[ねが]いします。"
      }
    ],
    "translation": "Voicemail: Hello, this is Yamada. About tomorrow — we were going to meet at the station at 12, right? I'm sorry, but I have something to do in the morning. Please come at 1. The place is the same, the north exit of the station. Well then, see you tomorrow.",
    "questions": [
      {
        "question": "二人[ふたり]は明日[あした]、何時[なんじ]に会[あ]いますか。",
        "questionTranslation": "What time will the two of them meet tomorrow?",
        "options": [
          {
            "text": "11時",
            "explanation": "11:00 is never mentioned."
          },
          {
            "text": "12時",
            "explanation": "12:00 was the original plan, but Yamada changes it because of a morning errand."
          },
          {
            "text": "1時",
            "explanation": "Correct. Yamada says 「1時に来てください」."
          },
          {
            "text": "2時",
            "explanation": "2:00 is never mentioned."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "二人[ふたり]はどこで会[あ]いますか。",
        "questionTranslation": "Where will the two of them meet?",
        "options": [
          {
            "text": "駅の南口",
            "explanation": "The message says the north exit, not the south exit."
          },
          {
            "text": "山田さんの家",
            "explanation": "Yamada's house is never mentioned as the place."
          },
          {
            "text": "公園",
            "explanation": "A park is never mentioned."
          },
          {
            "text": "駅の北口",
            "explanation": "Correct. 「場所は同じ、駅の北口です」 — the place stays the station's north exit."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:f-birthday-cake-shop",
    "level": "N5",
    "title": "誕生日[たんじょうび]のケーキ",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "すみません、誕生日[たんじょうび]のケーキがほしいです。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい。チョコレートのケーキといちごのケーキがあります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "父[ちち]はいちごが好[す]きです。いちごのケーキをください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "すみません、いちごのケーキは今日[きょう]はもうありません。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですか。じゃあ、チョコレートのケーキをください。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "はい。大[おお]きいのと小[ちい]さいのがあります。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "家族[かぞく]は四人[よにん]です。大[おお]きいのをお願[ねが]いします。"
      },
      {
        "speaker": "店員[てんいん]",
        "text": "わかりました。ありがとうございます。"
      }
    ],
    "translation": "Woman: Excuse me, I'd like a birthday cake. / Clerk: Certainly. We have a chocolate cake and a strawberry cake. / Woman: My father likes strawberries. The strawberry cake, please. / Clerk: I'm sorry, we're out of the strawberry cake today. / Woman: I see. Then the chocolate cake, please. / Clerk: Yes. We have a big one and a small one. / Woman: There are four in my family. The big one, please. / Clerk: Understood. Thank you.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]はどのケーキを買[か]いますか。",
        "questionTranslation": "Which cake will the woman buy?",
        "options": [
          {
            "text": "大きいいちごのケーキ",
            "explanation": "She wanted strawberry, but the strawberry cake is sold out today."
          },
          {
            "text": "大きいチョコレートのケーキ",
            "explanation": "Correct. Strawberry is sold out, so she takes chocolate, and picks the big one for her family of four."
          },
          {
            "text": "小さいチョコレートのケーキ",
            "explanation": "She chooses the big one, saying her family has four people."
          },
          {
            "text": "小さいいちごのケーキ",
            "explanation": "The strawberry cake is sold out, and she asks for the big size."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "どうしていちごのケーキを買[か]いませんか。",
        "questionTranslation": "Why won't she buy the strawberry cake?",
        "options": [
          {
            "text": "高いから",
            "explanation": "Price is never mentioned."
          },
          {
            "text": "お父さんがいちごが嫌いだから",
            "explanation": "The opposite — her father likes strawberries; that's why she asked for it first."
          },
          {
            "text": "今日はもうないから",
            "explanation": "Correct. The clerk says 「いちごのケーキは今日はもうありません」."
          },
          {
            "text": "小さいから",
            "explanation": "Size is discussed only for the chocolate cake."
          }
        ],
        "correctIndex": 2
      }
    ]
  },
  {
    "id": "listening:N5:f-rainy-day-movie",
    "level": "N5",
    "title": "雨[あめ]の日[ひ]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "今日[きょう]は公園[こうえん]へ行[い]きましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "見[み]てください。雨[あめ]が降[ふ]っていますよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "ああ、本当[ほんとう]ですね。じゃあ、どうしますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "家[いえ]で映画[えいが]を見[み]ませんか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。でも、お菓子[かし]がありませんよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、私[わたし]が近[ちか]くの店[みせ]で買[か]ってきます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "お願[ねが]いします。"
      }
    ],
    "translation": "Man: Let's go to the park today. / Woman: Look, it's raining. / Man: Oh, you're right. Then what shall we do? / Woman: Shall we watch a movie at home? / Man: Sounds good. But we don't have any snacks. / Woman: Then I'll go buy some at the shop nearby. / Man: Please do.",
    "questions": [
      {
        "question": "二人[ふたり]は今日[きょう]、何[なに]をしますか。",
        "questionTranslation": "What will the two of them do today?",
        "options": [
          {
            "text": "公園へ行く",
            "explanation": "The park was the first plan, but it is raining, so they stay in."
          },
          {
            "text": "映画館へ行く",
            "explanation": "They will watch a movie at home, not at a movie theater."
          },
          {
            "text": "家で映画を見る",
            "explanation": "Correct. Because of the rain, the woman suggests 「家で映画を見ませんか」 and the man agrees."
          },
          {
            "text": "何もしない",
            "explanation": "They do make a plan: a movie at home."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "女[おんな]の人[ひと]はこのあと、まず何[なに]をしますか。",
        "questionTranslation": "What will the woman do first after this?",
        "options": [
          {
            "text": "お菓子を買いに行く",
            "explanation": "Correct. There are no snacks, so she says 「私が近くの店で買ってきます」."
          },
          {
            "text": "映画を見る",
            "explanation": "The movie comes after she buys the snacks."
          },
          {
            "text": "公園へ行く",
            "explanation": "The park plan was dropped because of the rain."
          },
          {
            "text": "料理を作る",
            "explanation": "Cooking is never mentioned."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:f-grandmother-visit",
    "level": "N5",
    "title": "おばあさんの家[いえ]へ",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "日曜日[にちようび]、おばあさんの家[いえ]へ行[い]きます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。何[なに]か持[も]って行[い]きますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "おばあさんは甘[あま]い物[もの]が好[す]きですから、お菓子[かし]を持[も]って行[い]きます。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "電車[でんしゃ]で行[い]きますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいえ、バスで行[い]きます。おばあさんの家[いえ]は駅[えき]から遠[とお]いですから。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "そうですか。気[き]をつけて。"
      }
    ],
    "translation": "Woman: On Sunday I'm going to my grandmother's house. / Man: That's nice. Will you take something? / Woman: My grandmother likes sweet things, so I'll take some sweets. / Man: Will you go by train? / Woman: No, I'll go by bus. My grandmother's house is far from the station. / Man: I see. Take care.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What will the woman take with her?",
        "options": [
          {
            "text": "花",
            "explanation": "Flowers are never mentioned."
          },
          {
            "text": "お菓子",
            "explanation": "Correct. Her grandmother likes sweet things, so she says she will bring sweets."
          },
          {
            "text": "果物",
            "explanation": "Fruit is never mentioned."
          },
          {
            "text": "何も持って行かない",
            "explanation": "She clearly says she will bring sweets."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "女[おんな]の人[ひと]は何[なに]でおばあさんの家[いえ]へ行[い]きますか。",
        "questionTranslation": "How will the woman get to her grandmother's house?",
        "options": [
          {
            "text": "電車",
            "explanation": "The man asks about the train, but she says no because the house is far from the station."
          },
          {
            "text": "車",
            "explanation": "A car is never mentioned."
          },
          {
            "text": "自転車",
            "explanation": "A bicycle is never mentioned."
          },
          {
            "text": "バス",
            "explanation": "Correct. She says 「バスで行きます」 because the house is far from the station."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:f-karaoke-when",
    "level": "N5",
    "title": "カラオケはいつ?",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "明日[あした]、カラオケに行[い]きませんか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "明日[あした]は日本語[にほんご]のテストがあります。あさってはどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "あさってですね。いいですよ。何時[なんじ]にしますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "午後[ごご]3時[じ]はどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "3時[じ]はまだ学校[がっこう]にいます。4時[じ]は?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですよ。駅[えき]の前[まえ]のカラオケで会[あ]いましょう。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、じゃあ、あさっての4時[じ]に。"
      }
    ],
    "translation": "Man: Won't you go to karaoke tomorrow? / Woman: Tomorrow I have a Japanese test. How about the day after tomorrow? / Man: The day after tomorrow? Fine. What time shall we make it? / Woman: How about 3 in the afternoon? / Man: At 3 I'm still at school. What about 4? / Woman: OK. Let's meet at the karaoke place in front of the station. / Man: Right, the day after tomorrow at 4, then.",
    "questions": [
      {
        "question": "二人[ふたり]はいつカラオケに行[い]きますか。",
        "questionTranslation": "When will the two of them go to karaoke?",
        "options": [
          {
            "text": "明日の3時",
            "explanation": "Tomorrow is out because of the woman's test, and 3:00 is out because the man is still at school."
          },
          {
            "text": "明日の4時",
            "explanation": "Tomorrow was rejected — the woman has a Japanese test."
          },
          {
            "text": "あさっての4時",
            "explanation": "Correct. They settle on the day after tomorrow, and on 4:00 because the man is at school until after 3."
          },
          {
            "text": "あさっての3時",
            "explanation": "3:00 was rejected because the man is still at school then."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうして明日[あした]、カラオケに行[い]きませんか。",
        "questionTranslation": "Why won't they go to karaoke tomorrow?",
        "options": [
          {
            "text": "女の人はテストがあるから",
            "explanation": "Correct. The woman says 「明日は日本語のテストがあります」."
          },
          {
            "text": "男の人は学校があるから",
            "explanation": "School is the reason 3:00 doesn't work, not the reason tomorrow doesn't work."
          },
          {
            "text": "雨が降るから",
            "explanation": "The weather is never mentioned."
          },
          {
            "text": "カラオケが休みだから",
            "explanation": "Nothing is said about the karaoke place being closed."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:f-fireworks-festival",
    "level": "N5",
    "title": "花火大会[はなびたいかい]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "土曜日[どようび]、花火大会[はなびたいかい]がありますよ。一緒[いっしょ]に行[い]きませんか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。花火[はなび]は何時[なんじ]からですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "7時[じ]からです。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、6時[じ]に会[あ]いましょうか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "人[ひと]が多[おお]いですから、5時半[じはん]はどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "わかりました。どこで会[あ]いますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "駅[えき]は人[ひと]が多[おお]いですから、公園[こうえん]の入口[いりぐち]で会[あ]いましょう。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Woman: There's a fireworks festival on Saturday. Won't you go together? / Man: Sounds good. What time do the fireworks start? / Woman: They start at 7. / Man: Then shall we meet at 6? / Woman: There will be a lot of people, so how about 5:30? / Man: Got it. Where shall we meet? / Woman: The station will be crowded, so let's meet at the park entrance. / Man: OK, understood.",
    "questions": [
      {
        "question": "二人[ふたり]は何時[なんじ]に会[あ]いますか。",
        "questionTranslation": "What time will the two of them meet?",
        "options": [
          {
            "text": "5時",
            "explanation": "5:00 is never mentioned."
          },
          {
            "text": "5時半",
            "explanation": "Correct. The woman proposes 5:30 because it will be crowded, and the man agrees."
          },
          {
            "text": "6時",
            "explanation": "6:00 was the man's suggestion, but it was changed to 5:30."
          },
          {
            "text": "7時",
            "explanation": "7:00 is when the fireworks start, not the meeting time."
          }
        ],
        "correctIndex": 1
      },
      {
        "question": "二人[ふたり]はどこで会[あ]いますか。",
        "questionTranslation": "Where will the two of them meet?",
        "options": [
          {
            "text": "駅の前",
            "explanation": "The station is rejected because it will be crowded."
          },
          {
            "text": "男の人の家",
            "explanation": "The man's house is never mentioned."
          },
          {
            "text": "デパートの前",
            "explanation": "A department store is never mentioned."
          },
          {
            "text": "公園の入口",
            "explanation": "Correct. The woman says 「公園の入口で会いましょう」 because the station is crowded."
          }
        ],
        "correctIndex": 3
      }
    ]
  },
  {
    "id": "listening:N5:f-lunch-restaurant-closed",
    "level": "N5",
    "title": "お昼[ひる]ご飯[はん]の店[みせ]",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "お昼[ひる]はあのレストランで食[た]べましょう。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "あ、見[み]てください。今日[きょう]は休[やす]みですよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "本当[ほんとう]だ。じゃあ、駅前[えきまえ]のそば屋[や]はどうですか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そばはあまり好[す]きじゃありません。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "じゃあ、あそこの喫茶店[きっさてん]でサンドイッチを食[た]べませんか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "いいですね。そうしましょう。"
      }
    ],
    "translation": "Man: Let's have lunch at that restaurant. / Woman: Oh, look. It's closed today. / Man: You're right. Then how about the soba shop in front of the station? / Woman: I don't really like soba. / Man: Then shall we have sandwiches at that coffee shop over there? / Woman: Sounds good. Let's do that.",
    "questions": [
      {
        "question": "二人[ふたり]はどこでお昼[ひる]ご飯[はん]を食[た]べますか。",
        "questionTranslation": "Where will the two of them have lunch?",
        "options": [
          {
            "text": "レストラン",
            "explanation": "The restaurant is closed today."
          },
          {
            "text": "そば屋",
            "explanation": "The soba shop was suggested, but the woman doesn't really like soba."
          },
          {
            "text": "喫茶店",
            "explanation": "Correct. They agree to have sandwiches at the coffee shop."
          },
          {
            "text": "家",
            "explanation": "Eating at home is never mentioned."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "どうしてレストランで食[た]べませんか。",
        "questionTranslation": "Why won't they eat at the restaurant?",
        "options": [
          {
            "text": "人が多いから",
            "explanation": "Crowding is never mentioned."
          },
          {
            "text": "今日は休みだから",
            "explanation": "Correct. The woman points out 「今日は休みですよ」."
          },
          {
            "text": "高いから",
            "explanation": "Price is never mentioned."
          },
          {
            "text": "遠いから",
            "explanation": "Distance is never mentioned."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:f-party-fruit-cake",
    "level": "N5",
    "title": "パーティーに持[も]って行[い]く物[もの]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "金曜日[きんようび]は田中[たなか]さんの誕生日[たんじょうび]パーティーですね。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "はい。私[わたし]は飲[の]み物[もの]を持[も]って行[い]きます。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、私[わたし]はケーキを作[つく]ります。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "田中[たなか]さんは果物[くだもの]が好[す]きですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "そうですか。じゃあ、果物[くだもの]のケーキを作[つく]ります。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。パーティーは6時[じ]からですよ。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "わかりました。じゃあ、金曜日[きんようび]に。"
      }
    ],
    "translation": "Woman: Friday is Tanaka's birthday party, right? / Man: Yes. I'm bringing drinks. / Woman: Then I'll make a cake. / Man: Tanaka likes fruit, you know. / Woman: Really? Then I'll make a fruit cake. / Man: Nice. The party starts at 6. / Woman: Got it. See you Friday, then.",
    "questions": [
      {
        "question": "女[おんな]の人[ひと]は何[なに]を持[も]って行[い]きますか。",
        "questionTranslation": "What will the woman bring?",
        "options": [
          {
            "text": "飲み物",
            "explanation": "The drinks are what the man is bringing."
          },
          {
            "text": "チョコレートのケーキ",
            "explanation": "A chocolate cake is never mentioned."
          },
          {
            "text": "果物のケーキ",
            "explanation": "Correct. Because Tanaka likes fruit, she decides 「果物のケーキを作ります」."
          },
          {
            "text": "花",
            "explanation": "Flowers are never mentioned."
          }
        ],
        "correctIndex": 2
      },
      {
        "question": "パーティーは何時[なんじ]からですか。",
        "questionTranslation": "What time does the party start?",
        "options": [
          {
            "text": "5時",
            "explanation": "5:00 is never mentioned."
          },
          {
            "text": "6時",
            "explanation": "Correct. The man says 「パーティーは6時からですよ」."
          },
          {
            "text": "6時半",
            "explanation": "6:30 is never mentioned."
          },
          {
            "text": "7時",
            "explanation": "7:00 is never mentioned."
          }
        ],
        "correctIndex": 1
      }
    ]
  },
  {
    "id": "listening:N5:f-department-store-day",
    "level": "N5",
    "title": "デパートへ行[い]く日[ひ]",
    "script": [
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "新[あたら]しい靴[くつ]がほしいです。一緒[いっしょ]にデパートへ行[い]きませんか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですよ。いつ行[い]きますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "土曜日[どようび]はどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "土曜日[どようび]は家族[かぞく]と出[で]かけます。日曜日[にちようび]は?"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "日曜日[にちようび]の朝[あさ]は病院[びょういん]へ行[い]きます。午後[ごご]はどうですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですよ。じゃあ、日曜日[にちようび]の午後[ごご]2時[じ]にデパートの前[まえ]で。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "はい、わかりました。"
      }
    ],
    "translation": "Woman: I want new shoes. Won't you come to the department store with me? / Man: Sure. When shall we go? / Woman: How about Saturday? / Man: On Saturday I'm going out with my family. What about Sunday? / Woman: On Sunday morning I'm going to the hospital. How about the afternoon? / Man: Fine. Then Sunday at 2 p.m., in front of the department store. / Woman: OK, got it.",
    "questions": [
      {
        "question": "二人[ふたり]はいつデパートへ行[い]きますか。",
        "questionTranslation": "When will the two of them go to the department store?",
        "options": [
          {
            "text": "土曜日の午後",
            "explanation": "Saturday is out — the man is going out with his family."
          },
          {
            "text": "日曜日の朝",
            "explanation": "Sunday morning is out — the woman is going to the hospital."
          },
          {
            "text": "土曜日の朝",
            "explanation": "Saturday is out — the man is going out with his family."
          },
          {
            "text": "日曜日の午後",
            "explanation": "Correct. They agree on Sunday at 2 p.m. in front of the department store."
          }
        ],
        "correctIndex": 3
      },
      {
        "question": "どうして土曜日[どようび]に行[い]きませんか。",
        "questionTranslation": "Why won't they go on Saturday?",
        "options": [
          {
            "text": "男の人は家族と出かけるから",
            "explanation": "Correct. The man says 「土曜日は家族と出かけます」."
          },
          {
            "text": "女の人は病院へ行くから",
            "explanation": "The hospital is why Sunday morning doesn't work, not Saturday."
          },
          {
            "text": "デパートが休みだから",
            "explanation": "Nothing is said about the store being closed."
          },
          {
            "text": "雨が降るから",
            "explanation": "The weather is never mentioned."
          }
        ],
        "correctIndex": 0
      }
    ]
  },
  {
    "id": "listening:N5:f-tonight-tv",
    "level": "N5",
    "title": "今晩[こんばん]のテレビ",
    "script": [
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "今晩[こんばん]、テレビで何[なに]を見[み]ますか。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "8時[じ]からサッカーがありますよ。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "サッカーですか。私[わたし]は歌[うた]の番組[ばんぐみ]が見[み]たいです。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "歌[うた]の番組[ばんぐみ]は何時[なんじ]からですか。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "9時[じ]からです。"
      },
      {
        "speaker": "女[おんな]の人[ひと]",
        "text": "じゃあ、8時[じ]からサッカーを見[み]て、9時[じ]から歌[うた]の番組[ばんぐみ]を見[み]ましょう。"
      },
      {
        "speaker": "男[おとこ]の人[ひと]",
        "text": "いいですね。そうしましょう。"
      }
    ],
    "translation": "Man: What shall we watch on TV tonight? / Woman: There's soccer from 8. / Man: Soccer? I want to watch the music show. / Woman: What time does the music show start? / Man: It starts at 9. / Woman: Then let's watch soccer from 8, and the music show from 9. / Man: Sounds good. Let's do that.",
    "questions": [
      {
        "question": "二人[ふたり]は8時[じ]から何[なに]を見[み]ますか。",
        "questionTranslation": "What will the two of them watch from 8 o'clock?",
        "options": [
          {
            "text": "サッカー",
            "explanation": "Correct. The woman proposes 「8時からサッカーを見て」 and the man agrees."
          },
          {
            "text": "歌の番組",
            "explanation": "The music show is what they will watch from 9, not from 8."
          },
          {
            "text": "映画",
            "explanation": "A movie is never mentioned."
          },
          {
            "text": "ニュース",
            "explanation": "The news is never mentioned."
          }
        ],
        "correctIndex": 0
      },
      {
        "question": "歌[うた]の番組[ばんぐみ]は何時[なんじ]からですか。",
        "questionTranslation": "What time does the music show start?",
        "options": [
          {
            "text": "8時",
            "explanation": "8:00 is when the soccer starts."
          },
          {
            "text": "8時半",
            "explanation": "8:30 is never mentioned."
          },
          {
            "text": "10時",
            "explanation": "10:00 is never mentioned."
          },
          {
            "text": "9時",
            "explanation": "Correct. The man says the music show starts at 9 (「9時からです」)."
          }
        ],
        "correctIndex": 3
      }
    ]
  }
]
