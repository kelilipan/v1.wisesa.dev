import React from "react";
import { Box, Stack, Text, Badge } from "@chakra-ui/core";
import Image from "graphcms-image";
import Link from "./Link";

const BlogCard = ({ title, tags, desc, picture, slug, project, ...props }) => {
  const color = (data) => {
    const tag = data.toLowerCase();
    switch (tag) {
      case "react":
        return "blue";
      case "javascript":
        return "yellow";
      case "line":
        return "green";
      default:
        return "gray";
    }
  };
  const link = project ? "project" : "blog";
  return (
    <Box {...props}>
      <Link route href={`${link}/${slug}`}>
        <Image
          alt={title}
          image={{ handle: picture.handle, height: 500, width: 1080 }}
          className="noDrag"
          style={{ height: "245px" }}
        />
      </Link>
      <Stack isInline mt={2}>
        {tags.map((tag, idx) => {
          return (
            <Badge key={idx} variantColor={color(tag)}>
              {tag}
            </Badge>
          );
        })}
      </Stack>
      <Link
        route
        href={`${link}/${slug}`}
        fontWeight="bold"
        fontSize={18}
        mt={2}
      >
        {title}
      </Link>
      <Text>{desc}</Text>
    </Box>
  );
};
BlogCard.defaultProps = {
  project: false,
};
export default BlogCard;
