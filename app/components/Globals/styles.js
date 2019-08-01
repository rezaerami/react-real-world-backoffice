// dynamic padding and margins
// 0 - 10rem range for padding and -10 - 10 range for margins
let margin = '';
let padding = '';
for (let i = 0; i <= 20; i += 1) {
  padding += `
        .p-${i} {
            padding: ${i}rem !important;
        }
        .pt-${i} {
            padding-top: ${i}rem !important;
        }
        .pr-${i} {
            padding-right: ${i}rem !important;
        }
        .pb-${i} {
            padding-bottom: ${i}rem !important;
        }
        .pl-${i} {
            padding-left: ${i}rem !important;
        }
    `;
  margin += `
        .m-${i} {
            margin: ${i}rem !important;
        }
        .mt-${i} {
            margin-top: ${i}rem !important;
        }
        .mr-${i} {
            margin-right: ${i}rem !important;
        }
        .mb-${i} {
            margin-bottom: ${i}rem !important;
        }
        .ml-${i} {
            margin-left: ${i}rem !important;
        }
        .-m-${i} {
            margin: -${i}rem !important;
        }
        .-mt-${i} {
            margin-top: -${i}rem !important;
        }
        .-mr-${i} {
            margin-right: -${i}rem !important;
        }
        .-mb-${i} {
            margin-bottom: -${i}rem !important;
        }
        .-ml-${i} {
            margin-left: -${i}rem !important;
        }
    `;
}

const uiKit = `
    ${margin}
    ${padding}
`;
export default uiKit;
