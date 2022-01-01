module.exports = {
  meta: {
    type: 'suggestion',
    messages: {
      'a11y-icon-button-has-name': '{{ message }}',
    },
    schema: [],
  },
  create(context) {
    return {
      JSXOpeningElement: (node) => {
        if (!node.name.name || !node.name.name.match(/Button(Anchor)?$/)) {
          return
        }

        const children = node.parent.children.filter((c) => (
          !(c.type === 'JSXText' && c.value.match(/^\s*\n+\s*$/))
        ))

        if (children.length === 0) {
          return
        }

        let existIcon = false
        let existNoIcon = false
        let targetNode = node

        children.forEach((c) => {
          if (c.type !== 'JSXElement') {
            existNoIcon = true
          } else if (c.openingElement.name.name.match(/Icon$/)) {
            existIcon = true
            targetNode = c

            if (!existNoIcon) {
              existNoIcon = c.openingElement.attributes.some((a) => a.name.name === 'visuallyHiddenText')
            }
          } else {
            existNoIcon = true
          }
        })

        if (existIcon && !existNoIcon) {
          context.report({
            node: targetNode,
            messageId: 'a11y-icon-button-has-name',
            data: {
              message: `Button 内に Icon のみを設置する場合、Icon に visuallyHiddenText props を指定してください`,
            },
          });
        }
      },
    }
  },
}
module.exports.schema = []
