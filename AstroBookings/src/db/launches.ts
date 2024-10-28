import { LaunchDto } from '@models/launch.dto';

export const LAUNCHES_DB: LaunchDto[] = [
  {
    id: 'lnch_1',
    agencyId: 'usr_a1',
    rocketId: 'rkt_1',
    date: '2025-07-20T10:00:00Z',
    mission: 'Artemis I',
    destination: 'Moon Orbit',
    pricePerSeat: 28000000,
    status: 'delayed', // 1 booking for 1 seat out of 6 (not enough for confirmed)
  },
  {
    id: 'lnch_2',
    agencyId: 'usr_a2',
    rocketId: 'rkt_2',
    date: '2025-09-15T14:30:00Z',
    mission: 'Space walk',
    destination: 'Low Earth Orbit',
    pricePerSeat: 250000,
    status: 'confirmed', // 5 seats booked out of 6
  },
  {
    id: 'lnch_3',
    agencyId: 'usr_a1',
    rocketId: 'rkt_3',
    date: '2026-01-01T00:00:00Z',
    mission: 'Red Planet',
    destination: 'Mars',
    pricePerSeat: 55000000,
    status: 'scheduled', // No bookings
  },
  {
    id: 'lnch_4',
    agencyId: 'usr_a3',
    rocketId: 'rkt_4',
    date: '2025-12-24T23:59:59Z',
    mission: 'Lunar Christmas',
    destination: 'Moon Orbit',
    pricePerSeat: 75000000,
    status: 'delayed', // 1 booking for 1 seat out of 8 (not enough for confirmed)
  },
  {
    id: 'lnch_5',
    agencyId: 'usr_a3',
    rocketId: 'rkt_5',
    date: '2024-05-11T11:11:11Z',
    mission: 'Orbital Luxury',
    destination: 'Low Earth Orbit ',
    pricePerSeat: 5000000,
    status: 'launched', // Past date
  },
  {
    id: 'lnch_6',
    agencyId: 'usr_a4',
    rocketId: 'rkt_6',
    date: '2025-10-10T10:00:00Z',
    mission: 'Budget Orbit',
    destination: 'Low Earth Orbit',
    pricePerSeat: 100000,
    status: 'delayed', // 3 seats out of 12 (not enough for confirmed)
  },
  {
    id: 'lnch_7',
    agencyId: 'usr_a4',
    rocketId: 'rkt_7',
    date: '2026-02-14T14:00:00Z',
    mission: 'Lunar Valentine',
    destination: 'Moon Orbit',
    pricePerSeat: 500000,
    status: 'confirmed', // 4 seats booked out of 5
  },
  {
    id: 'lnch_8',
    agencyId: 'usr_a1',
    rocketId: 'rkt_1',
    date: '2026-03-21T08:00:00Z',
    mission: 'Spring Equinox Special',
    destination: 'Moon Landing',
    pricePerSeat: 30000000,
    status: 'scheduled', // No bookings
  },
  {
    id: 'lnch_9',
    agencyId: 'usr_a2',
    rocketId: 'rkt_2',
    date: '2026-04-01T12:00:00Z',
    mission: 'April Fools Orbit',
    destination: 'Low Earth Orbit',
    pricePerSeat: 275000,
    status: 'delayed', // 1 seat out of 6 (not enough for confirmed)
  },
  {
    id: 'lnch_10',
    agencyId: 'usr_a3',
    rocketId: 'rkt_4',
    date: '2026-05-15T18:30:00Z',
    mission: 'Lunar Gala',
    destination: 'Moon Orbit',
    pricePerSeat: 80000000,
    status: 'delayed', // 2 seats out of 8 (not enough for confirmed)
  },
  {
    id: 'lnch_11',
    agencyId: 'usr_a4',
    rocketId: 'rkt_6',
    date: '2026-06-21T06:00:00Z',
    mission: 'Summer Solstice Orbit',
    destination: 'Low Earth Orbit',
    pricePerSeat: 110000,
    status: 'scheduled', // No bookings
  },
  {
    id: 'lnch_12',
    agencyId: 'usr_a1',
    rocketId: 'rkt_3',
    date: '2024-07-04T16:00:00Z',
    mission: 'Independence Day Mars',
    destination: 'Mars',
    pricePerSeat: 60000000,
    status: 'launched', // Past date
  },
  {
    id: 'lnch_13',
    agencyId: 'usr_a3',
    rocketId: 'rkt_5',
    date: '2026-08-08T08:08:08Z',
    mission: 'Lucky Orbit',
    destination: 'Low Earth Orbit',
    pricePerSeat: 5500000,
    status: 'scheduled', // No bookings
  },
  {
    id: 'lnch_14',
    agencyId: 'usr_a2',
    rocketId: 'rkt_2',
    date: '2026-09-22T10:00:00Z',
    mission: 'Autumn Equinox Adventure',
    destination: 'Low Earth Orbit',
    pricePerSeat: 280000,
    status: 'scheduled', // No bookings
  },
  {
    id: 'lnch_15',
    agencyId: 'usr_a4',
    rocketId: 'rkt_7',
    date: '2026-10-31T23:59:59Z',
    mission: 'Halloween Moon',
    destination: 'Moon',
    pricePerSeat: 550000,
    status: 'confirmed', // 4 seats booked out of 5
  },
  {
    id: 'lnch_16',
    agencyId: 'usr_a1',
    rocketId: 'rkt_1',
    date: '2026-11-25T12:00:00Z',
    mission: 'Thanksgiving in Space',
    destination: 'Moon Orbit',
    pricePerSeat: 32000000,
    status: 'scheduled', // No bookings
  },
  {
    id: 'lnch_17',
    agencyId: 'usr_a3',
    rocketId: 'rkt_4',
    date: '2023-12-31T23:59:59Z',
    mission: "New Year's Eve on the Moon",
    destination: 'Moon Landing',
    pricePerSeat: 85000000,
    status: 'launched', // Past date
  },
];
