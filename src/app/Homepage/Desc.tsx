'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const Desc = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (toggle) {
      const timeoutID = setTimeout(() => {
        document.querySelector('#desc')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 300);

      return () => {
        clearTimeout(timeoutID);
      };
    }
  }, [toggle]);

  return (
    <div
      id="desc"
      className={cn(
        'relative mb-8 flex max-h-60 flex-col overflow-hidden transition-all',
        toggle ? 'max-h-[50000px] overflow-visible' : '',
      )}
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quis temporibus minima
        architecto autem aliquam repudiandae, expedita debitis et odit? Obcaecati dolorum debitis
        quod odio temporibus nesciunt quam unde provident. Nisi itaque, vero perferendis officiis
        excepturi facilis non dolores fuga nam, dolorem ea omnis reprehenderit voluptates. Eos
        laudantium nemo nihil at cum natus adipisci quisquam saepe, ducimus unde distinctio commodi.
        Cum, eligendi dicta hic pariatur aperiam sint quisquam porro. Ipsa perspiciatis ducimus,
        debitis libero est distinctio. Commodi minima obcaecati earum iure non temporibus numquam
        cumque ad, fugiat nesciunt odio nostrum! Est dolorum nulla quis. Optio, explicabo? Ullam
        deleniti velit sapiente consectetur consequuntur dolorem voluptate ea temporibus quibusdam
        magni. Temporibus totam quos quae rerum modi autem! Ut totam cum in magni! Nisi vero veniam
        ad excepturi nesciunt esse dolore autem. Voluptatem, expedita debitis reiciendis sequi modi
        incidunt. Expedita quisquam unde repellendus eum rerum earum placeat consectetur nisi quidem
        quis, ea explicabo. Sed repellat molestiae in at atque, aspernatur sapiente laudantium
        dignissimos iure pariatur reiciendis minus laboriosam fugiat a, ea quasi necessitatibus
        nemo? Distinctio sint, quos porro natus vitae temporibus rerum molestiae! Dolorum officia
        quis aliquid eius asperiores fuga voluptate illum! Odio laudantium saepe nam! Optio,
        possimus doloremque! Facere, hic expedita blanditiis vero animi similique tenetur ratione
        accusantium necessitatibus eos tempora pariatur. Expedita qui nulla eveniet. Dolore sit,
        beatae vitae voluptatem asperiores incidunt nemo expedita, recusandae explicabo quisquam
        iusto repellat saepe accusantium numquam magni nesciunt impedit eum doloribus quidem
        perferendis molestias non! Quisquam neque dicta necessitatibus libero accusamus repellat
        harum vitae obcaecati impedit optio perferendis, tempora blanditiis culpa cumque corporis
        perspiciatis consequatur dolores deserunt soluta dignissimos! Doloribus error aut dolore
        veritatis neque? Modi amet esse ducimus blanditiis doloribus, commodi sunt ratione? Soluta
        vitae deserunt totam tenetur nihil laboriosam voluptatum consectetur tempore, quod, neque
        ipsa, iusto ducimus quo minima illum. Amet, laborum ipsum. Dolore eius dolorem hic eligendi
        odit sint placeat quo dicta ab accusantium praesentium unde nisi tenetur culpa doloremque
        illo optio tempore ipsam, doloribus corporis temporibus voluptate adipisci veritatis libero!
        Id? Vitae qui quis est aut fugiat saepe explicabo id natus. Temporibus error accusamus
        veniam fugiat dolores sint suscipit ipsum odio architecto iure, doloremque eaque ipsa
        obcaecati quaerat dolorum. Excepturi, dolorum. Officiis magni officia non omnis distinctio
        praesentium fuga nisi quo, minus iste saepe velit eius? Repudiandae a nam reprehenderit esse
        eius laudantium, ratione, amet voluptates error numquam ullam exercitationem! Repellat. Quia
        maxime perferendis illum hic dolor cupiditate numquam. Odio facilis, quidem eveniet tempore
        corporis obcaecati enim inventore voluptatem fugit, ipsum quisquam et. Hic adipisci totam
        natus officia eius nulla quas! Vel libero ipsum facilis, provident recusandae inventore
        voluptatibus molestias. Corrupti asperiores illum vero nulla distinctio saepe pariatur est
        suscipit, ducimus quo fugiat? Optio ducimus officiis molestias ex non ipsam eveniet?
        Provident praesentium animi illum veniam laudantium eius magnam culpa quasi earum placeat,
        cupiditate odit a maxime explicabo dicta ea exercitationem molestiae quo, nemo soluta.
        Deserunt sint commodi eos natus maxime? Quasi sunt a vitae officiis aspernatur laborum iure
        inventore iusto quam veniam perspiciatis reiciendis quas odit natus, voluptatibus corporis
        numquam quibusdam nostrum eius blanditiis magnam? Architecto placeat veniam odio alias. At
        repellendus sed dolore quod nulla, labore perferendis corrupti architecto ipsa, praesentium
        assumenda quo sunt, doloribus voluptates dolorem ratione dolor itaque mollitia expedita
        molestias. Earum perferendis eveniet libero debitis odit. Veritatis quaerat dolor voluptates
        sequi illum unde dolorem quam! Quis, officiis! Labore magni atque quod! Quas, corrupti?
        Expedita laboriosam ratione aspernatur, distinctio molestias, modi eaque, placeat recusandae
        cum explicabo veniam. Dolorum eaque quos qui similique. Nesciunt neque tempora voluptatibus
        hic tempore officia repudiandae mollitia a dolorem consectetur eum, molestiae quos, unde
        minus, amet quidem eveniet in. Error nisi cumque rerum.
      </p>
      <div
        className={cn(
          'absolute bottom-0 flex h-60 w-full items-end justify-center bg-gradient-to-b from-transparent to-[#1E2A38] transition-all',
          toggle ? 'fixed right-0 bottom-5 h-20 justify-end bg-transparent' : '',
        )}
      >
        <Button
          className={cn(
            'font-poppins mb-10 px-12 py-4 text-sm font-semibold',
            toggle ? 'mb-5' : '',
          )}
          onClick={() => setToggle(prev => !prev)}
        >
          {toggle ? 'READ LESS' : 'READ MORE'}
        </Button>
      </div>
    </div>
  );
};

export default Desc;
