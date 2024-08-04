import { visit } from 'unist-util-visit';

function customHighlightPlugin() {
  return (tree: any) => {
    visit(tree, 'text', (node) => {
      if (node.value.includes('==')) {
        // Simple parser for `==highlighted text==`
        const parts = node.value.split(/(==[^=]+==)/g);
        node.type = 'paragraph';
        node.children = parts.map((part: string, _index: any) => {
          if (part.startsWith('==') && part.endsWith('==')) {
            return {
              type: 'html',
              value: `<mark>${part.slice(2, -2)}</mark>`
            };
          }
          return {
            type: 'text',
            value: part
          };
        });
      }
    });
  };
}

export default customHighlightPlugin;
