import { PROJECTS } from "~/hardcoded";
import type { ProjectType } from "~/types/project.types";

type ProjectTranslation = {
  description: string;
  category: string;
  role: string;
  platform: string;
  details: NonNullable<ProjectType["details"]>;
  screenshots: { alt: string; caption: string }[];
};

const LATVIAN_PROJECTS: Record<string, ProjectTranslation> = {
  "math-mews": {
    category: "Mobilā spēle · Izstrādes stadijā",
    role: "Lietotnes izstrāde",
    platform: "iOS un Android",
    description:
      "Mobilā spēle, kas ar uzdevumiem, rūpēm par virtuālu kaķi un 3D mājas iekārtošanu motivē bērnus mācīties matemātiku un attīstīt loģisko domāšanu.",
    details: [
      {
        heading: "Problēma",
        text: "Math Mews ir paredzēta bērniem, kuriem vajadzīga motivācija regulāri vingrināties matemātikā. Mērķis ir rosināt mācīties spēlējoties un attīstīt loģisko domāšanu. Uzdevumi aicina izprast situāciju un izdomāt risinājumu, nevis tikai iegaumēt atbildi.",
      },
      {
        heading: "Mācīšanās spēlējoties",
        text: "Par atrisinātiem uzdevumiem bērni saņem monētas, ar kurām var iekārtot virtuālā kaķa māju. Starp mācību reizēm var rūpēties par kaķi un izpētīt savienotas 3D istabas. Attēlu palīgi sadala uzdevumu saprotamos soļos, savukārt statistika pa tēmām parāda, kur vēl nepieciešams patrenēties.",
      },
      {
        heading: "Izstrāde",
        text: "Spēli iOS un Android ierīcēm veidoju ar React Native, Expo un TypeScript. Filament attēlo istabas un animēto kaķi, Supabase nodrošina servera puses pakalpojumus, bet RevenueCat apstrādā monētu paku pirkumus. Spēle tiek aktīvi izstrādāta. Ekrānattēlos redzama pašreizējā lietotnes versija iPhone simulatorā.",
      },
    ],
    screenshots: [
      {
        alt: "Math Mews iPhone ekrāns ar iekārtotu 3D viesistabu, kaķa rādītājiem un uzdevumu pogu",
        caption:
          "Iekārtota viesistaba, kaķa rādītāji un piekļuve matemātikas uzdevumiem.",
      },
      {
        alt: "Math Mews dalīšanas uzdevums ar ābolu attēliem, attēlu palīgu un atbilžu variantiem",
        caption:
          "Dalīšanas uzdevums ar priekšmetu attēliem un vizuālu palīdzību.",
      },
      {
        alt: "Math Mews loģikas uzdevums par to, cik aitu paliek pāri",
        caption:
          "Loģikas uzdevums mudina rūpīgi izlasīt nosacījumus un izdomāt atbildi.",
      },
      {
        alt: "Math Mews attēlu palīgs ar divām atlikušām aitām un atņemšanas piemēru",
        caption: "Attēlu palīgs soli pa solim izskaidro ideju ar piemēru.",
      },
      {
        alt: "Math Mews statistika pa tēmām ar precizitāti, mēģinājumiem un ieteikumu vingrināt loģiku",
        caption:
          "Progress pa tēmām parāda, kur nepieciešams vairāk vingrināties.",
      },
      {
        alt: "Math Mews iekārtota 3D virtuve ar virtuālu kaķi un uzdevumu pogu",
        caption:
          "Iekārtota virtuve piedāvā vēl vienu istabu, ko izpētīt un pielāgot.",
      },
    ],
  },
  dentsu: {
    category: "Aģentūras mājaslapa",
    role: "Pilna cikla izstrāde",
    platform: "Tīmeklis",
    description:
      "Divvalodu aģentūras mājaslapa, kas veidota ar Next.js un Strapi. Tajā apkopoti pakalpojumi, kampaņu piemēri un ziņas, bet lapu sadaļas var pārvaldīt satura redaktorā.",
    details: [
      {
        heading: "Uzdevums",
        text: "Dentsu vēlējās mūsdienīgu mājaslapu ar dažādiem lapu izkārtojumiem un ērtu satura publicēšanu. Līdzās pakalpojumiem un kampaņu piemēriem aģentūrai bija nepieciešama vieta bloga rakstiem, ziņām, pētījumiem un vakancēm latviešu un angļu valodā.",
      },
      {
        heading: "Kāpēc Next.js un Strapi",
        text: "Izveidoju Next.js saskarni ar Strapi satura vadības sistēmu. Atkārtoti izmantojamas satura sadaļas ļauj redaktoriem veidot dažādu tipu lapas, atjaunot attēlus un pārvaldīt tulkojumus un metadatus. Aģentūra var patstāvīgi publicēt jaunu saturu un papildināt lapas atbilstoši savām vajadzībām.",
      },
      {
        heading: "Lietotāja pieredze",
        text: "Mājaslapā ir izvēršami pakalpojumu apraksti, kampaņu filtrēšana pēc aģentūras, rakstu saraksti, attēlu galerijas un saziņas formas. Pielāgojami izkārtojumi nodrošina piekļuvi tam pašam saturam datorā un telefonā, saglabājot vienotu vizuālo stilu dažādiem aģentūras pakalpojumiem un publikācijām.",
      },
    ],
    screenshots: [
      {
        alt: "Dentsu Latvia pakalpojumu lapa ar pilsētas aerofotogrāfiju un ievadu latviešu valodā",
        caption: "Pakalpojumu ievads ar attēlu visā lapas platumā.",
      },
      {
        alt: "Dentsu Latvia kampaņu piemēri ar aģentūru filtriem un projektu kartītēm",
        caption: "Kampaņu piemēri ar filtriem pēc aģentūras zīmola.",
      },
      {
        alt: "Dentsu Latvia sākumlapas ievads un aicinājums sazināties latviešu valodā",
        caption: "Aģentūras ievads un saziņas sadaļa sākumlapā.",
      },
      {
        alt: "Dentsu Latvia ziņu un pētījumu saraksts ar attēliem, kopsavilkumiem un lasīšanas pogām",
        caption: "Ziņu un pētījumu saraksts regulārai satura publicēšanai.",
      },
      {
        alt: "Dentsu Latvia bloga raksts ar kampaņas fotogrāfiju un tekstu",
        caption:
          "Raksta lapā apvienotas kampaņas fotogrāfijas un redakcionālais saturs.",
      },
    ],
  },
  janogago: {
    category: "Uzņēmuma mājaslapa",
    role: "Dizains un izstrāde",
    platform: "Tīmeklis",
    description:
      "Divvalodu ēdienu tirdzniecības mājaslapa ar interaktīvu 3D automātu, filtrējamu ēdienu katalogu un piedāvājuma pieprasījuma formu.",
    details: [
      {
        heading: "Problēma",
        text: "Uzņēmumiem, kas apsver ēdienu automātu izvietošanu darbavietā, ir jāsaprot ēdienu piedāvājums, pakalpojuma darbība, izmaksas un vietas piemērotība. JāņogaGO bija nepieciešama mājaslapa, kas atbild uz šiem jautājumiem un palīdz saņemt pietiekami detalizētus piedāvājuma pieprasījumus.",
      },
      {
        heading: "Kāpēc WordPress",
        text: "Uzņēmums deva priekšroku tradicionālam risinājumam, ar kuru jau bija pieradis strādāt. Izveidoju pielāgotu WordPress tēmu, lai komanda varētu pārvaldīt ēdienus, fotogrāfijas, lapu saturu un pieprasījumus pazīstamā administrēšanas vidē. Polylang nodrošina latviešu un angļu valodas versijas.",
      },
      {
        heading: "Lietotāja pieredze",
        text: "Interaktīvs 3D ēdienu automāts iepazīstina ar pakalpojumu, savukārt kategoriju un uztura filtri palīdz izpētīt ēdienu katalogu. Pakalpojuma apraksts izskaidro uzstādīšanu un ikdienas apkalpošanu. Pieprasījuma forma apkopo informāciju par atrašanās vietu un lietotāju skaitu, pārbauda ievadītos datus un saglabā pieprasījumus privāti WordPress vidē, nosūtot arī e-pasta paziņojumus.",
      },
    ],
    screenshots: [
      {
        alt: "JāņogaGO sākumlapa ar pakalpojuma informāciju latviešu valodā un sarkanu 3D ēdienu automātu",
        caption: "Pakalpojuma sākumlapa ar interaktīvu 3D ēdienu automātu.",
      },
      {
        alt: "JāņogaGO ēdienu katalogs ar kategoriju filtriem un gatavo maltīšu fotogrāfijām",
        caption: "Ēdienu katalogs ar kategoriju un uztura filtriem.",
      },
      {
        alt: "JāņogaGO pakalpojuma uzsākšana trīs soļos: pieprasījums, piedāvājums un uzstādīšana",
        caption: "Trīs soļi palīdz uzņēmumiem saprast, kā uzsākt sadarbību.",
      },
      {
        alt: "JāņogaGO pieprasījuma forma ar uzņēmuma, atrašanās vietas un ikdienas lietotāju skaita laukiem",
        caption:
          "Pieprasījuma forma apkopo datus piemērota piedāvājuma sagatavošanai.",
      },
    ],
  },
  oaksbuild: {
    category: "Uzņēmuma mājaslapa",
    role: "Dizains un izstrāde",
    platform: "Tīmeklis",
    description:
      "Būvniecības vadības mājaslapa trīs valodās ar pakalpojumu lapām un realizēto projektu galerijām, kas veidota WordPress vidē.",
    details: [
      {
        heading: "Problēma",
        text: "Būvniecības vadība aptver daudzus posmus un pienākumus. OAKS Build bija nepieciešams skaidri izstāstīt savus pakalpojumus gan nekustamo īpašumu attīstītājiem, gan privātmāju būvētājiem, parādīt paveiktos darbus un piedāvāt potenciālajiem klientiem tiešu iespēju pārrunāt projektu.",
      },
      {
        heading: "Kāpēc WordPress",
        text: "Uzņēmums vēlējās tradicionālu platformu, kas atbilst ierastajam darba veidam. Izveidoju pielāgotu WordPress bloku tēmu ar iebūvēto Gutenberg redaktoru, lai komanda varētu atjaunot pakalpojumu aprakstus, projektu galerijas, izvēlnes un kontaktinformāciju. Polylang savieno latviešu, angļu un krievu valodas versijas.",
      },
      {
        heading: "Lietotāja pieredze",
        text: "Atsevišķas pakalpojumu lapas palīdz abām galvenajām auditorijām iepazīt būvniecības procesu. Realizēto projektu galerijas sniedz konkrētus komandas darbu piemērus, bet saziņas saites ļauj ērti uzsākt sarunu. Izkārtojumi pielāgo to pašu informāciju un fotogrāfijas datoriem un mobilajām ierīcēm.",
      },
    ],
    screenshots: [
      {
        alt: "OAKS Build sākumlapa ar būvniecības vadības virsrakstu un būvlaukuma attēlu",
        caption: "Būvniecības vadības un uzraudzības sākumlapa.",
      },
      {
        alt: "OAKS Build realizēto projektu galerija ar atjaunotām ēkām un interjeriem",
        caption:
          "Realizētie projekti ar fotogrāfijām un informāciju par atrašanās vietu.",
      },
      {
        alt: "OAKS Build pakalpojumu lapa privātmāju būvētājiem ar būvniecības attēlu un saziņas saiti",
        caption: "Atsevišķa pakalpojumu lapa privātmāju būvētājiem.",
      },
      {
        alt: "OAKS Build darba process no plānošanas un iepirkumiem līdz būvniecībai un nodošanai",
        caption:
          "Būvniecības procesa apraksts palīdz saprast komandas pienākumus.",
      },
    ],
  },
  wupzy: {
    category: "Turnīru lietotne",
    role: "Pilna cikla izstrāde",
    platform: "Tīmeklis",
    description:
      "Organizē volejbola turnīrus, seko rezultātiem reāllaikā un dalies tajos ar savu komandu, izmantojot telefonu.",
    details: [
      {
        heading: "Problēma",
        text: "Mūsu volejbola grupai bija nepieciešams veids, kā organizēt turnīrus un pierakstīt rezultātus, nepaļaujoties uz papīra lapiņām, kas starp spēlēm var pazust. Telefons jau bija katram spēlētājam, tāpēc kopīga tīmekļa lietotne bija praktisks risinājums sacensību organizēšanai.",
      },
      {
        heading: "Risinājums",
        text: "Wupzy vienuviet apvieno turnīra izveidi, komandas, spēļu rezultātus, kopvērtējumu un izslēgšanas spēles. Spēlētāji var ievadīt rezultātus telefonā un dalīties ar turnīru, izmantojot saiti vai QR kodu. Grupai ir viena kopīga vieta, kur sekot sacensībām.",
      },
      {
        heading: "Izstrāde",
        text: "Saskarni izveidoju ar React un Next.js. Tipu drošām API saskarnēm izmantoju tRPC, piekļuvei datubāzei Prisma, bet datu glabāšanai MySQL platformā PlanetScale. Maksājumus apstrādā Stripe, un lietotne ir izvietota Vercel.",
      },
    ],
    screenshots: [
      {
        alt: "Wupzy turnīra pārskats ar komandām un kopvērtējumu",
        caption: "Turnīra pārskats un komandu kopvērtējums.",
      },
      {
        alt: "Wupzy jauna volejbola turnīra izveides forma",
        caption: "Jauna turnīra izveide.",
      },
      {
        alt: "Wupzy izslēgšanas spēļu shēma ar turnīra spēlēm",
        caption: "Sekošana sacensību gaitai izslēgšanas spēlēs.",
      },
      {
        alt: "Wupzy mobilais spēles ekrāns ar rezultāta ievades pogām un saglabāšanu",
        caption: "Spēlētāji var ievadīt spēles rezultātus tieši telefonā.",
      },
      {
        alt: "Wupzy mobilā turnīra izvēlne ar kopīgošanas saiti, QR kodu un izslēgšanas spēļu vadību",
        caption:
          "Turnīra kopīgošana ar saiti vai QR kodu un tālāko posmu pārvaldīšana.",
      },
    ],
  },
  canvas: {
    category: "Zīmēšanas rīks",
    role: "Saskarnes izstrāde",
    platform: "Tīmeklis",
    description:
      "Zīmēšanas rīks pārlūkā ar brīvu zīmēšanu, SVG foniem un pilnu krāsu paleti. Darbojas gan datorā, gan skārienekrānā.",
    details: [
      {
        heading: "Ideja",
        text: "Ātra skice var palīdzēt izskaidrot ideju. Canvas apvieno brīvu zīmēšanu, figūras, bultas un tekstu pārlūka darba vidē, kas atbalsta gan peli, gan skārienvadību. Izveidoju to kā personīgu projektu, lai apgūtu Vue.js un mijiedarbību ar zīmēšanas laukumu.",
      },
      {
        heading: "Risinājums",
        text: "Lietotāji var zīmēt, atlasīt un izkārtot objektus, mainīt krāsas un fonus, kā arī saglabāt vai eksportēt savus darbus. Rīki ir piemēroti gan ātrām diagrammām, gan brīvām skicēm, un rediģēšanas vadīklas atrodas līdzās darba laukumam.",
      },
      {
        heading: "Izstrāde",
        text: "Lietotne veidota ar Vue.js un TypeScript. Fabric.js nodrošina zīmēšanu un objektu pārvaldīšanu, bet Pinia pārvalda lietotnes stāvokli. Pievienoju pielāgotu brīvās zīmēšanas režīmu, lai uzlabotu līniju veidošanu. Lietotne ir izvietota GitHub Pages, un turpinu pilnveidot tās rīkus un mijiedarbību.",
      },
    ],
    screenshots: [
      {
        alt: "Canvas saglabāto darbu pārvaldnieks ar priekšskatījumiem un atlases, rediģēšanas un eksporta iespējām",
        caption: "Saglabāto zīmējumu pārvaldīšana.",
      },
      {
        alt: "Canvas zīmēšanas darba laukums ar figūrām un zīmēšanas vadīklām",
        caption: "Darbs ar figūrām un brīvu zīmēšanu.",
      },
      {
        alt: "Canvas zīmējuma eksporta iespējas",
        caption: "Gatavā darba eksportēšana.",
      },
      {
        alt: "Canvas darba laukums ar divām krāsainām figūrām, bultu un rediģējamu tekstu",
        caption:
          "Vienkārša diagramma parāda figūru, bultu, krāsu un teksta izmantošanu pārlūkā.",
      },
    ],
  },
};

export function getProjects(locale: string | undefined): ProjectType[] {
  if (locale !== "lv") return PROJECTS;
  return PROJECTS.map((project) => {
    const translation = LATVIAN_PROJECTS[project.aboutLink];
    if (!translation)
      throw new Error(`Missing Latvian project: ${project.aboutLink}`);
    return {
      ...project,
      ...translation,
      screenshots: project.screenshots?.map((image, index) => {
        const text = translation.screenshots[index];
        if (!text) throw new Error(`Missing Latvian screenshot: ${image.src}`);
        return { ...image, ...text };
      }),
    };
  });
}
