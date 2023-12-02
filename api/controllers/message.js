import { Client } from "@elastic/elasticsearch";
import "express-async-errors";
const elasticClient = new Client({
  node: "http://elastic:_zh4BSZfNCCUTXibBlHm@localhost:9200",
});

export const createMessage = async (req, res, next) => {
  try {
    const result = await elasticClient.index({
      index: "indexone",
      body: {
        message: req.body.message,
      },
    });
    res.send(result);
  } catch (err) {
    throw err;
  }
};

export const getMessages = async (req, res, next) => {
  try {
    const { message } = req.query;

    if (!message) {
      return res.status(400).json({ error: "Message parameter is required" });
    }

    const result = await elasticClient.search({
      index: "indexone",
      body: {
        query: { fuzzy: { message } },
      },
    });

    res.send(result.hits.hits).json(result);
  } catch (error) {
    console.error("Elasticsearch search error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllMessages = async (req, res, next) => {
  try {
    const result = await elasticClient.search({
      index: "indexone",
      body: {
        query: { match_all: {} },
      },
    });

    res.send(result);
  } catch (err) {
    throw err;
  }
};

export const MessageSearchType = async (req, res) => {
  try {
    const { searchTerm } = req.query;

    const result = await elasticClient.search({
      index: "indexone",
      body: {
        query: {
          match_phrase_prefix: {
            message: {
              query: searchTerm,
              max_expansions: 10,
            },
          },
        },
      },
    });

    res.send(result.hits.hits.map((hit) => hit._source.message));
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
