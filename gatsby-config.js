module.exports = {
  siteMetadata: {
    title: 'Marina e react, uma tentativa',
    description: 'kjhsdkjsahdkashdkasd ',
    keywords: 'kjshadkjashdkjashdkjashdkjh,asjd jhsd kjashd'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'sshpi32hyc89',
        accessToken: 'e43d3fd8a24750ad84745a1e98262cf3a8e1de0c80df02f2307350b024141561'
      }
    }
  ],
}
