---
slug: diary-2023-april
title: บันทึกไม่มีหมวดช่วงเมษา
description: เยอร์มันกับครอบครัวพรไพรินทร์ พบพี่เฟิร์น หนังเฉินหลง karaokeCP44
date: 1 May 2023
keywords: [travel, community, hugsnan, CP44, german]
layout: blog
---

<script>
import fern_1 from "./fern-1.mp4?url"
import fern_2 from "./fern-2.jpg"
import fern_3 from "./fern-3.jpg"
import fern_4 from "./fern-4.jpg"
import fern_5 from "./fern-5.jpg"
import decode_1 from "./decode-1.jpg"
import german_1 from "./german-1.mp4?url"
import german_2 from "./german-2.jpg"
import german_3 from "./german-3.jpg"
import german_4 from "./german-4.jpg"
import german_5 from "./german-5.jpg"
import german_6 from "./german-6.jpg"
import german_7 from "./german-7.jpg"
import german_8 from "./german-8.jpg"
import german_9 from "./german-9.jpg"
import german_10 from "./german-10.jpg"
import german_11 from "./german-11.jpg"
import german_12 from "./german-12.jpg"
import german_13 from "./german-13.jpg"
import german_14 from "./german-14.jpg"
import karaoke from "./karaoke.mp4?url"
import keur_1 from "./keur-1.jpg"
import movie_1 from "./movie-1.jpg"
import movie_2 from "./movie-2.mp4"
</script>

# บันทึกไม่มีหมวดช่วงเมษา

ในช่วงที่ผ่านมามีกำหนดการพอสมควรในชีวิต

## พาแม่พ่อพี่ ไปเที่ยวเยอร์มัน

เวลาท่องเที่ยว 15 วัน เน้นการขับรถเป็นหลัก แม้กฤษจะไม่ชอบการท่องเที่ยวนัก แต่มันก็มีข้อดีคือ ไม่ได้วุ่นวายกับคนมากนัก และได้ดูแลแม่พ่อบ้างแม่จะเพียงเล็กๆน้อยๆก็ตาม การท่องเที่ยวนานๆทำให้ตัวเองได้กลับมาสำรวจความคิดตัวเองบ่อยขึ้่น เห็นความคิดตัวเองบ่อยๆ คิดดีบ้าง คิดแย่่บ้าง ก็รู้ๆมันไป

take note ที่ได้คือ

- เยอร์มัน ค่าครองชีพไม่ได้แพงมาก
- คนค่อนข้างใจดี
- บ้านเมืองเงียบสงบสุดๆ จนอาจจะเหงาได้ง่ายๆ
- ที่นี้มีเมืองที่ดังด้านอัญมณี และก็ซื้อมาฝากคนที่ไทยไว้ 4 อัน
- ลมหายใจแก้ฟุ้งซ่านได้ดี

<div class="grid grid-cols-3 gap-2 !mx-0">
  <video class="m-0 col-span-2 row-span-3 h-full w-full object-cover" src="{german_1}" autoplay inline playInline muted></video>
  <img class="m-0" src="{german_2}" />
  <img class="m-0" src="{german_3}" />
  <img class="m-0" src="{german_4}" />
  <img class="m-0" src="{german_5}" />
  <img class="m-0" src="{german_6}" />
  <img class="m-0" src="{german_7}" />
  <img class="m-0" src="{german_8}" />
  <img class="m-0" src="{german_9}" />
  <img class="m-0" src="{german_10}" />
  <img class="m-0" src="{german_11}" />
  <img class="m-0" src="{german_12}" />
  <img class="m-0" src="{german_14}" />
</div>

## เจอเกื้อที่สวนสันติภาพ

กฤษมาปั่นงานแหละ แล้วเหมือนเกือจะมาออกกำลังกายพอดีเลยนัดเจอกัน กินข้าวกัน

take note ที่ได้คือ

- ทำงานสายสื่อคือทำงานทุกอย่าง และเงินเดือนน้อยมากๆ
- เลือกตั้งครั้งนี้เป็นประเด็นใหญ่ เพราะมันเป็นข่าวได้ แม้ว่าสำนักข่าวจะทำเรื่องคล้ายๆกันก็ตาม
- ทำงานสายข่าวมีแหล่งที่มาเช่น
  - PR ขององค์กร
  - เส้นสายลับๆพี่ที่รู้จัก
  - หาความเชื่อมโยงแล้วไปหาข่าวก่อน แบบนักสืบ

## งานเว็บ animation จ้าๆ

ได้ทำงาน [ป้ายเลือกตั้งในแบบของคุณ democracyontheroad.decode.plus](https://democracyontheroad.decode.plus/) แม้จะพอรู้อยู่แล้วว่างานนี้จะไม่ดัง เพราะว่าทางทีมเราไม่ได้คิด creative ให้แต่ในฐานะคนทำระบบก็ทำเต็มที่ งานนี้ที่สนุกคือ animation ที่มีความต่อเนื่องยาวเป็นชุดเลย ใช้ [PIXI](https://github.com/pixijs/pixijs) และ [gsap](https://greensock.com) เป็นหลัก

![]({decode_1})

ความยากคือการจัดการส่วนของการจัด layout hierarchy ของภาพ และการตั้งตัวแปรให้ได้ไวๆ โดยไม่ซ้ำซ้อน เพราะถ้าไล่แบบปกติจะมี

1. static image folder
1. typescript import image
1. กำหนด hierarchy ที่ markup
1. อ้างอิง reference จาก markup
1. ใช้ใน animation

แต่ย่อเหลือแค่

1. static image folder
1. สร้าง hierarchy แบบ higher order function เป็นตัวแปรเลย
1. ใช้ใน animation

ถือว่าลดการทำงานได้เยอะอย่างน่าพอใจ

## ดูหนังเฉินหลง (Ride On) รอบสื่อ

โดนชวนไปแบบงงๆ แต่ดีที่ได้เจอพี่วีล พี่บี และพี่เต้ย น่ารักสุดๆ

ถือว่าประทับใจการถ่ายทำมากๆ เรื่องกลมกลอมครบองค์

<video class="m-0" src="{movie_2}" autoplay inline playInline muted controls></video>

## เจอพี่เฟิร์นจากอเมริกา

พี่เฟิร์น เป็นพี่ที่โรงเรียนสาธิตขอนแก่นมอดินแดงมาด้วยกัน แต่เราเจอกันในค่ายอาสาทีสมัครพัฒนาชุมชนน่านของจุฬา (จุฬาฮักน่าน) ในตอนที่ผมปี 1 พี่เฟิร์นก็ปีสี่แล้ว เลยถือโอกาสการกลับมาครั้งนี้รวมตัวคนแก่รุ่นดั่งเดินหน่อย ก็นับเป็นเรื่องดีเพราะก็จะได้เจอพี่ปันที่ทำงานอยู่ที่โรงพยาบาล และตอนนี้เหมือนจะสนใจกาแฟมากๆเสียด้วย และเจอพี่แบงค์เจ้าแม่การท่องเที่ยวแ้านอาหารและคาเฟ่อร่อย

take note ที่ได้คือ

- mMilk นมหอมดี
- คั่วกาแฟแตกได้สองครั้ง
- โรงพยาบาลที่อเมริกา วุ่นวายมาก เพราะทุกคนกลัวโดนฟ้อง
- tesla รถบางเป็นกระป๋องเลยเวลาโดนชน
- มีคนรอบตัว อดข้าว 30 วันยังรอดได้

<div class="grid grid-cols-3 gap-2 !mx-0">
  <video class="m-0 col-span-2 row-span-3 h-full w-full object-cover" src="{fern_1}" autoplay inline playInline muted controls></video>
  <img class="m-0" src="{fern_2}" />
  <img class="m-0" src="{fern_3}" />
  <img class="m-0" src="{fern_5}" />
</div>

## ร้อง karaoke กับแก๊ง CP44 ที่พระราม 9

เป็นการนัดที่ปุปปัปที่สุดนะ นัด 18:30 ให้ถึง 19:30 แต่เราก็ถือว่าบ้านใกล้เลยไปได้ แม้จะต้องไปรอนิดหน่อย แต่ก็อ่านหนังสือรอที่ร้านหนังสือก็ดีนะ

<div class="grid md:grid-cols-[1fr,auto] gap-4">
  <div>
    <p>
      ระยะเวลา 3 ชมที่ร้องเพลงก็เห็นว่าเพื่อนๆแปลกหูแปลกตาไปพอสมควร อาจจะเพราะว่าโตขึ้นหรือทำงานมามากขึ้นก็ได้ แต่ได้เห็นว่าทุกคนยังสบายดีก็ดีใจ ก็มีบางช่วงที่เป็นเพลงโทนเสียงผู้หญิงเราก็เก็บเสียงไว้ พอเพลงผู้ชายก็ร้องเติมได้ก็ดี
    </p>
    <p>
      ตอนแรกก็แอบกังวลเพราะว่าเราแทบไม่ได้ร้องเพลงหรือฟังเพลงเลยในช่วงที่ผ่านมา แต่ยังดีที่เพลงส่วนมากก็ยังเป็นเพลงเก่าๆอยู่ แถมในครั้งนี้รู้สึกสงบสติได้มากกว่าเมื่อก่อนมาก คิดอะไรไม่ถูกก็กลับมาหายใจก่อน 555
    </p>
    <p>
      ตอนขากลับก็นึกขึ้นมาได้เหมือนกันว่า ช่วงสงกรานต์เห็นเพื่อนๆบางคนลง ig ว่าอยู่กับครอบครัวกัน ก็อยากให้เพื่อนๆดูแลแม่พ่อให้ดี ยิ่งเราเป็นวัยทำงานแล้ว เราจะลืมคนเหล่านี้ได้ง่ายๆเลย
    </p>
  </div>
  <video class="max-h-[400px] mt-0 !mx-auto" src="{karaoke}" autoplay muted inline playInline controls></video>
</div>

รวมเพลงที่ร้องที่จำได้

- [ร้ายๆ - Mahafather](https://www.youtube.com/watch?v=KbqYMZ5DkEM)
- [ใจเหลือเหลือ - Dr.Fuu](https://www.youtube.com/watch?v=UJjWqoV3pes)
- [เธอเป็นแฟนฉันแล้ว - กะลา](https://www.youtube.com/watch?v=MR7qAX1Iomc)
- [You Belong With Me - Taylor Swift](https://www.youtube.com/watch?v=VuNIsY6JdUw)
- [Shut Down - BLACKPINK](https://www.youtube.com/watch?v=POe9SOEKotk)
- [Numb Little Bug - Em Beihold](https://www.youtube.com/watch?v=9mVXPLlnSu4)

## ส่งท้าย

ผ่านไปอีกเดือน ต่อไปก็ขอให้มีสติมากๆขึ้นไปนะ มีอะไรเกิดขึ้นก็รู้ๆๆ รู้จนเบื่อ แล้วก็พยายามสดชื่นระหว่างวันให้ได้นะ
