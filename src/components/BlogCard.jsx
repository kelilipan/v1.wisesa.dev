import React from "react";
import { Box, Stack, Text, Badge } from "@chakra-ui/core";
import Image from "graphcms-image";
import Link from "./Link";

const BlogCard = ({ title, tags, desc, picture, slug, ...props }) => {
  const color = (data) => {
    const tag = data.toLowerCase();
    switch (tag) {
      case "react":
        return "blue";
      case "javascript":
        return "orange";
      default:
        return "gray";
    }
  };
  return (
    <Box {...props}>
      <Link route href={`blog/${slug}`}>
        <Image
          alt={title}
          image={{ handle: picture.handle, height: 270, width: 480 }}
          className="noDrag"
          style={{ height: "270px" }}
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
      <Link route href={`blog/${slug}`} fontWeight="bold" fontSize={18} mt={2}>
        {title}
      </Link>
      <Text>{desc}</Text>
    </Box>
  );
};

export default BlogCard;
