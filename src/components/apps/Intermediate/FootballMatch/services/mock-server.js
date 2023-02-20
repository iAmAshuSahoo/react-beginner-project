export const server = {
  port: 3001,
  host: "0.0.0.0",
  authorization: {
    type: "headers",
  },
  api: [
    {
      method: "GET",
      path: "/api/v1/getAllMatches",
      response: {
        success: true,
        matches: [
          {
            matchDate: 1651744228685,
            stadium: "Maracanã",
            homeTeam: "Brazil",
            awayTeam: "Serbia",
            matchPlayed: true,
            homeTeamScore: 1,
            awayTeamScore: 0,
          },
          {
            matchDate: 1651744228685,
            stadium: "Stade de Suisse",
            homeTeam: "Switzerland",
            awayTeam: "Serbia",
            matchPlayed: true,
            homeTeamScore: 2,
            awayTeamScore: 2,
          },
          {
            matchDate: 1651744228685,
            stadium: "Stadion Rajko Mitic",
            homeTeam: "Serbia",
            awayTeam: "Cameroon",
            matchPlayed: true,
            homeTeamScore: 0,
            awayTeamScore: 1,
          },
          {
            matchDate: 1651744228685,
            stadium: "Maracanã",
            homeTeam: "Brazil",
            awayTeam: "Switzerland",
            matchPlayed: true,
            homeTeamScore: 3,
            awayTeamScore: 0,
          },
          {
            matchDate: 1651744228685,
            stadium: "Maracanã",
            homeTeam: "Brazil",
            awayTeam: "Cameroon",
            matchPlayed: true,
            homeTeamScore: 4,
            awayTeamScore: 4,
          },
          {
            matchDate: 1651744228685,
            stadium: "Stade de Suisse",
            homeTeam: "Switzerland",
            awayTeam: "Cameroon",
            matchPlayed: true,
            homeTeamScore: 2,
            awayTeamScore: 2,
          },
        ],
      },
      authorization: {
        unauthorized: {
          success: false,
          error: "Unauthorized Access.",
        },
        status: 401,
        token: "YuHBdSlDXY000xa8IlCm7Qgq4_s",
      },
    },
    {
      method: "GET",
      path: "/api/v1/getAccessToken",
      response: {
        success: true,
        access_token: "YuHBdSlDXY000xa8IlCm7Qgq4_s",
      },
    },
    {
      method: "GET",
      path: "/api/version",
      response: {
        success: true,
        version: "1.0",
      },
    },
  ],
};
