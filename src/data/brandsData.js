// Brands We Deal With Data Architecture
import waareeLogo from '../assets/brands/waaree.svg';
import adaniLogo from '../assets/brands/adani-solar.svg';
import tataLogo from '../assets/brands/tata-power-solar.svg';
import vikramLogo from '../assets/brands/vikram-solar.svg';
import renewsysLogo from '../assets/brands/renewsys.svg';
import goldiLogo from '../assets/brands/goldi-solar.svg';
import loomLogo from '../assets/brands/loom-solar.svg';
import premierLogo from '../assets/brands/premier-energies.svg';

import growattLogo from '../assets/brands/growatt.svg';
import solisLogo from '../assets/brands/solis.svg';
import havellsLogo from '../assets/brands/havells.svg';
import luminousLogo from '../assets/brands/luminous.svg';
import microtekLogo from '../assets/brands/microtek.svg';
import utlLogo from '../assets/brands/utl.svg';
import polycabLogo from '../assets/brands/polycab.svg';
import sungrowLogo from '../assets/brands/sungrow.svg';
import deyeLogo from '../assets/brands/deye.svg';

import shaktiLogo from '../assets/brands/shakti-pumps.svg';
import criLogo from '../assets/brands/cri-pumps.svg';
import lubiLogo from '../assets/brands/lubi-pumps.svg';
import oswalLogo from '../assets/brands/oswal-pumps.svg';
import rotomagLogo from '../assets/brands/rotomag.svg';
import kirloskarLogo from '../assets/brands/kirloskar.svg';
import cromptonLogo from '../assets/brands/crompton.svg';

import vguardLogo from '../assets/brands/v-guard.svg';
import bajajLogo from '../assets/brands/bajaj.svg';
import supremeLogo from '../assets/brands/supreme-solar.svg';
import emmveeLogo from '../assets/brands/emmvee-solar.svg';
import sudarshanLogo from '../assets/brands/sudarshan-saur.svg';

export const BRAND_CATEGORIES = [
  { id: 'all', label: 'All Brands' },
  { id: 'solarPanels', label: 'Solar Panels' },
  { id: 'solarInverters', label: 'Solar Inverters' },
  { id: 'solarPumpSets', label: 'Solar Pump Sets' },
  { id: 'solarWaterHeaters', label: 'Solar Water Heaters' }
];

export const BRANDS_DATA = {
  solarPanels: [
    { id: 'waaree', name: 'Waaree', category: 'Solar Panels', logo: waareeLogo },
    { id: 'adani-solar', name: 'Adani Solar', category: 'Solar Panels', logo: adaniLogo },
    { id: 'tata-power-solar', name: 'Tata Power Solar', category: 'Solar Panels', logo: tataLogo },
    { id: 'vikram-solar', name: 'Vikram Solar', category: 'Solar Panels', logo: vikramLogo },
    { id: 'renewsys', name: 'RenewSys', category: 'Solar Panels', logo: renewsysLogo },
    { id: 'goldi-solar', name: 'Goldi Solar', category: 'Solar Panels', logo: goldiLogo },
    { id: 'loom-solar', name: 'Loom Solar', category: 'Solar Panels', logo: loomLogo },
    { id: 'premier-energies', name: 'Premier Energies', category: 'Solar Panels', logo: premierLogo }
  ],
  solarInverters: [
    { id: 'growatt', name: 'Growatt', category: 'Solar Inverters', logo: growattLogo },
    { id: 'solis', name: 'Solis', category: 'Solar Inverters', logo: solisLogo },
    { id: 'havells', name: 'Havells', category: 'Solar Inverters', logo: havellsLogo },
    { id: 'luminous', name: 'Luminous', category: 'Solar Inverters', logo: luminousLogo },
    { id: 'microtek', name: 'Microtek', category: 'Solar Inverters', logo: microtekLogo },
    { id: 'utl', name: 'UTL Solar', category: 'Solar Inverters', logo: utlLogo },
    { id: 'polycab', name: 'Polycab', category: 'Solar Inverters', logo: polycabLogo },
    { id: 'sungrow', name: 'Sungrow', category: 'Solar Inverters', logo: sungrowLogo },
    { id: 'deye', name: 'DEYE', category: 'Solar Inverters', logo: deyeLogo }
  ],
  solarPumpSets: [
    { id: 'shakti-pumps', name: 'Shakti Pumps', category: 'Solar Pump Sets', logo: shaktiLogo },
    { id: 'cri-pumps', name: 'CRI Pumps', category: 'Solar Pump Sets', logo: criLogo },
    { id: 'tata-power-solar', name: 'Tata Power Solar', category: 'Solar Pump Sets', logo: tataLogo },
    { id: 'havells', name: 'Havells', category: 'Solar Pump Sets', logo: havellsLogo },
    { id: 'lubi-pumps', name: 'Lubi Pumps', category: 'Solar Pump Sets', logo: lubiLogo },
    { id: 'oswal-pumps', name: 'Oswal Pumps', category: 'Solar Pump Sets', logo: oswalLogo },
    { id: 'rotomag', name: 'Rotomag', category: 'Solar Pump Sets', logo: rotomagLogo },
    { id: 'kirloskar-solar-pumps', name: 'Kirloskar Pumps', category: 'Solar Pump Sets', logo: kirloskarLogo },
    { id: 'crompton-solar-pumps', name: 'Crompton Pumps', category: 'Solar Pump Sets', logo: cromptonLogo }
  ],
  solarWaterHeaters: [
    { id: 'v-guard', name: 'V-Guard', category: 'Solar Water Heaters', logo: vguardLogo },
    { id: 'havells', name: 'Havells', category: 'Solar Water Heaters', logo: havellsLogo },
    { id: 'bajaj', name: 'Bajaj', category: 'Solar Water Heaters', logo: bajajLogo },
    { id: 'supreme-solar', name: 'Supreme Solar', category: 'Solar Water Heaters', logo: supremeLogo },
    { id: 'tata-power-solar', name: 'Tata Power Solar', category: 'Solar Water Heaters', logo: tataLogo },
    { id: 'emmvee-solar', name: 'Emmvee Solar', category: 'Solar Water Heaters', logo: emmveeLogo },
    { id: 'sudarshan-saur', name: 'Sudarshan Saur', category: 'Solar Water Heaters', logo: sudarshanLogo }
  ]
};
