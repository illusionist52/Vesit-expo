import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export default function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="flex flex-col gap-y-5">
      <Accordion
        open={open === 1}
        // icon={<Icon id={1} open={open} />}
        className="rounded-xl border border-slate-500"
      >
        <AccordionHeader
          onClick={() => handleOpen(1)}
          className="bg-slate-800 md:py-2 md:px-3 rounded-xl"
        >
          <div>
            <h1>What is Material Tailwind?</h1>
            <p className="text-sm font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tempora autem ipsam, dolorum qui voluptates.</p>
          </div>
        </AccordionHeader>
        <AccordionBody className="bg-slate-700 md:py-2 md:px-3 rounded-b-xl">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>

      <Accordion
        open={open === 2}
        // icon={<Icon id={2} open={open} />}
        className="rounded-xl border border-slate-500"
      >
        <AccordionHeader
          onClick={() => handleOpen(2)}
          className="bg-slate-800 md:py-2 md:px-3 rounded-xl"
        >
          What is Material Tailwind?
        </AccordionHeader>
        <AccordionBody className="bg-slate-700 md:py-2 md:px-3 rounded-b-xl">
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          aliquam laboriosam, nulla deserunt voluptates, exercitationem
          molestiae minus fuga laudantium fugiat nemo incidunt aliquid, cumque
          doloremque et animi neque. Aspernatur assumenda eos facilis ipsum
          error nulla mollitia quis culpa temporibus vero dolores, delectus
          exercitationem animi, minus recusandae ex iusto autem repellat rerum
          inventore quasi nesciunt necessitatibus facere. Nisi, qui, fugit
          dignissimos explicabo voluptatem beatae fugiat accusamus dolorum
          debitis ipsam molestiae atque, quidem id! Sit, ipsa harum debitis
          quidem, consequatur omnis voluptates repellendus modi quod, nesciunt
          similique dolorum ea a? Hic neque ipsam unde omnis rem explicabo autem
          nostrum? Ipsum, et ratione quia vero, maiores odio vel assumenda
          voluptatibus nulla voluptates neque recusandae perspiciatis error
          totam, ad natus dolorum! Neque incidunt quos cumque aut voluptates hic
          praesentium, veniam dignissimos natus cum tempora cupiditate ipsa. A
          in tenetur magnam maiores eligendi vel soluta eveniet. Libero
          praesentium harum, voluptate optio repellat nisi, assumenda tempore
          architecto sit reiciendis est tenetur saepe alias laudantium aut
          necessitatibus voluptas! Animi iusto velit sint corporis culpa
          facilis, quos nihil accusantium inventore cupiditate unde sed delectus
          aspernatur, temporibus cum ullam similique quo sunt eveniet! Maxime
          soluta nesciunt repellat minus qui quis quisquam? Perferendis commodi
          explicabo, veritatis quidem est cum culpa id incidunt consectetur
          pariatur ut, ea eligendi esse, accusamus iusto similique dolorem
          officia aperiam reiciendis dignissimos. Quaerat fugiat non magni
          ratione aperiam quas quo veritatis iste, commodi eaque, eligendi unde
          ab repellat eos corrupti! Reiciendis corrupti numquam nihil dolor
          recusandae, accusantium, dicta id natus quae dolorem at quidem
          aspernatur, eum inventore? Labore fugit blanditiis cupiditate non
          tenetur nihil quisquam, quo porro omnis ipsa? Placeat dolorum
          provident molestias veritatis officiis! Vel odio repudiandae aut
          consequuntur? Laudantium dolores obcaecati eveniet eius eum voluptatem
          vero ullam adipisci reiciendis earum consequuntur, fuga nobis,
          recusandae nulla minus, repudiandae quam repellat saepe. Impedit
          temporibus ullam blanditiis amet quod architecto fugit totam minus
          deleniti tempore, quidem repudiandae laborum debitis aliquid quo, odit
          ratione perferendis! Nihil quisquam consequatur, quae blanditiis
          molestiae similique. Quibusdam itaque asperiores cum voluptatem
          deserunt, ratione maiores aliquid, a culpa quaerat eligendi sunt unde!
          Labore eaque officia delectus velit dolorum itaque id. Fugit error at
          veniam aperiam ipsam cupiditate neque aliquid, enim reiciendis
          possimus, suscipit similique repellendus nobis! Deleniti at molestias
          similique illum, nesciunt quo blanditiis, perspiciatis amet nemo vero
          optio repudiandae cumque corporis, sequi nostrum aspernatur inventore
          laudantium asperiores cum eum ullam omnis sed. Praesentium numquam
          ducimus non fugiat, officiis, pariatur dolor vero, cum nihil in quod
          unde? Accusantium similique voluptatibus sed. Iste et at quam.
          Expedita hic, illum ipsum ipsam reprehenderit iure doloribus et,
          voluptate commodi, distinctio sit aliquid doloremque inventore quasi
          dolorum nobis nesciunt delectus? Ad harum ipsa autem ducimus. Facilis
          placeat officiis quas molestias optio sapiente est repellat cumque ex
          quia, corporis eum recusandae ullam dolorum debitis. Dolorem tenetur
          asperiores doloremque sunt ea cupiditate aspernatur, reiciendis
          fugiat, officia veritatis perspiciatis, dolore ab quod at
          necessitatibus alias? Laboriosam animi est unde tempora quas hic atque
          quisquam incidunt doloremque facere voluptates doloribus quaerat dolor
          quae aperiam, deserunt odio magnam. Porro dolorum doloribus et
          blanditiis inventore! Minima ipsam ipsum ex cupiditate ad laborum
          officia sequi, nulla excepturi harum magni! Veritatis vitae doloremque
          culpa reprehenderit blanditiis possimus inventore dolorum explicabo.
          Voluptate perspiciatis quas ipsa tempore, molestiae ab modi nemo quia
          temporibus delectus placeat maiores repellendus commodi natus
          blanditiis beatae, tenetur libero recusandae? Sapiente reprehenderit,
          veniam eos, beatae consectetur corrupti necessitatibus aliquid
          blanditiis quo fugit sequi alias quae iste vel corporis culpa optio id
          quibusdam sunt molestiae rerum libero delectus! Facere doloribus,
          saepe assumenda mollitia cum debitis voluptates. Nam totam omnis ut
          expedita, eum quaerat a est labore recusandae illo repudiandae
          deserunt perferendis! Nihil quibusdam reiciendis sunt vel modi,
          temporibus velit, accusantium doloribus ratione fugit veritatis rerum
          nisi repellendus natus voluptas consequatur dolorum culpa suscipit
          illum officia dolor doloremque voluptatem. Eum eius alias et ad illo
          quam, dolores labore eligendi fugit! Tempore, incidunt accusamus
          soluta ipsam doloremque rem dolorem, magnam quam, labore odit eius
          reiciendis odio veritatis id consectetur perspiciatis temporibus
          laboriosam quos eligendi error beatae. Deserunt voluptatum sint eum
          voluptatem temporibus asperiores, facilis maxime eaque autem nihil?
          Tenetur ad aliquam veniam maiores facilis quae obcaecati expedita, hic
          corporis magnam perferendis mollitia. Magni officiis, consectetur
          maiores aliquid animi deserunt iure voluptas sit in iste, dolor
          veniam? Tempora facere laborum, similique necessitatibus maiores
          repudiandae veritatis tenetur, rem dolor mollitia quisquam. Et facere
          non, dolor ut voluptas, explicabo minus repellat, consequuntur cumque
          impedit esse eveniet molestias eius ipsam quas? At temporibus, aliquam
          placeat veniam ut doloribus nemo porro culpa adipisci consequuntur id
          eius suscipit, provident ipsa! Repudiandae optio illo debitis deserunt
          totam tempora quibusdam. Perferendis vero cupiditate dicta commodi
          nobis ipsam a? Illo eos deserunt neque ex magnam labore earum
          blanditiis quaerat unde, tempora aliquid fugiat. Obcaecati eveniet
          incidunt corporis labore quo placeat ad id eligendi porro quae quaerat
          voluptates suscipit ex repellendus totam, necessitatibus, natus
          corrupti voluptatum. Maiores, dolores. Iure odit, iste explicabo
          consequatur numquam mollitia accusamus reiciendis et, id nam,
          voluptatum sit voluptate soluta nobis cum adipisci necessitatibus
          voluptatem error ut! Necessitatibus aspernatur quos suscipit illo,
          sunt esse neque expedita unde maxime, eos ullam est voluptates tempora
          impedit dignissimos obcaecati temporibus nam nostrum. Omnis minus
          voluptates magnam sint, quidem libero molestias fugiat repellendus!
          Facere natus, recusandae sunt dignissimos velit, labore veniam officia
          harum architecto suscipit quasi dolorum? Quas ducimus minus obcaecati
          ab ex similique eius quasi provident sapiente non veritatis ipsum
          accusamus nulla perferendis nam doloribus magni aspernatur, quibusdam
          voluptas in recusandae molestias iste asperiores. Ipsa molestiae quas
          animi tempora quae, veniam, quaerat vel eaque dolore magnam harum
          soluta, accusamus pariatur libero. Omnis modi amet quaerat officia
          consequatur sed facilis praesentium voluptate. Provident dignissimos
          voluptatum iste molestias, ratione ipsa sint enim ipsum aliquam
          dolorem consectetur obcaecati! Alias reiciendis neque consectetur
          fugit nesciunt similique in magni illo natus temporibus, repellat
          veritatis commodi, ab hic eaque libero at placeat facere aliquid fuga
          ipsa. Id, quaerat. Sit deleniti quod aspernatur rem eius ex. In
          inventore aliquam nemo nisi quidem fuga laudantium similique molestiae
          dolores, corrupti aut qui, obcaecati hic ipsam facere iure earum
          excepturi modi ex illo officiis unde! dreams.
        </AccordionBody>
      </Accordion>
    </div>
  );
}
