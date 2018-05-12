module.exports = {
  migrations_directory: "./migrations",
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      from: "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
    },
    clique: {
      host: "52.226.128.69",
      port: 8545,
      network_id: "617"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 500
    }
  } 
};
