import type { PolicyContent } from "@/features/privacy/types/policy";

export const privacyPolicies: Record<string, PolicyContent> = {
  "chinh-sach-thanh-toan": {
    title: "Chính sách thanh toán",
    updatedAt: "22/09/2026",
    intro:
      "GamePiece Labs mong muốn quá trình đặt hàng và thanh toán được thực hiện rõ ràng, minh bạch và thuận tiện cho khách hàng. Chính sách này quy định phương thức và quy trình thanh toán đối với các đơn hàng tại GamePiece Labs.",
    sections: [
      {
        title: "Quy trình thanh toán",
        number: "1",
        description:
          "Đối với các đơn hàng cần sản xuất trước khi giao, quy trình thanh toán được thực hiện như sau:",
        steps: [
          {
            title: "Bước 1 - Chọn sản phẩm/mẫu",
            paragraphs: [
              "Khách hàng lựa chọn sản phẩm hoặc mẫu cần đặt và cung cấp các thông tin cần thiết để GamePiece Labs xác nhận đơn hàng.",
            ],
          },
          {
            title: "Bước 2 - Xác nhận đơn hàng và báo giá",
            paragraphs: [
              "GamePiece Labs xác nhận mẫu, số lượng, giá sản phẩm, thời gian dự kiến hoàn thành và các thông tin liên quan với khách hàng.",
            ],
          },
          {
            title: "Bước 3 - Thanh toán đặt cọc 50%",
            paragraphs: [
              "Quy trình đặt cọc 50% tại Chính sách này áp dụng đối với sản phẩm Organizer do GamePiece Labs sản xuất.",
              "Đối với sản phẩm bán lại, phương thức và thời điểm thanh toán sẽ được GamePiece Labs thông báo và xác nhận với khách hàng trước khi thực hiện giao dịch.",
              "Sau khi khách hàng đồng ý với thông tin đơn hàng và báo giá, khách hàng thanh toán trước 50% tổng giá trị đơn hàng để xác nhận đơn và bắt đầu quá trình sản xuất.",
              "Đơn hàng được xem là đã xác nhận khi GamePiece Labs nhận được khoản thanh toán đặt cọc.",
            ],
          },
          {
            title: "Bước 4 - Thanh toán 50% còn lại",
            paragraphs: [
              "Sau khi sản phẩm được hoàn thiện, GamePiece Labs sẽ thông báo cho khách hàng.",
              "Khách hàng thanh toán 50% giá trị đơn hàng còn lại trước khi sản phẩm được bàn giao cho đơn vị vận chuyển.",
            ],
          },
          {
            title: "Bước 5 - Giao hàng",
            paragraphs: [
              "Sau khi xác nhận đã nhận đủ giá trị đơn hàng, GamePiece Labs tiến hành đóng gói và bàn giao sản phẩm cho đơn vị vận chuyển.",
            ],
          },
        ],
      },
      {
        title: "Hoàn tiền",
        number: "5",
        steps: [
          {
            title: "5.1. Sản phẩm Organizer do GamePiece Labs sản xuất",
            paragraphs: [
              [
                {
                  text: "Đối với các sản phẩm Organizer được GamePiece Labs trực tiếp sản xuất theo đơn hàng đã xác nhận, ",
                },
                {
                  text: "không áp dụng hoàn tiền trong trường hợp khách hàng thay đổi nhu cầu, thay đổi quyết định mua hàng hoặc chủ động hủy đơn sau khi đã thanh toán đặt cọc",
                  strong: true,
                },
                { text: "." },
              ],
              "Khoản đặt cọc 50% đã thanh toán sẽ không được hoàn lại trong trường hợp khách hàng chủ động hủy đơn hàng.",
              [
                {
                  text: "Các trường hợp sản phẩm bị lỗi, sai mẫu, sai số lượng hoặc không đúng với nội dung đơn hàng đã được xác nhận sẽ được GamePiece Labs tiếp nhận và xử lý theo ",
                },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: "." },
              ],
            ],
          },
          {
            title: "5.2. Sản phẩm bán lại",
            paragraphs: [
              [
                {
                  text: "Đối với các sản phẩm được GamePiece Labs phân phối hoặc bán lại và không thuộc nhóm Organizer do GamePiece Labs trực tiếp sản xuất, khách hàng có thể được hoàn tiền nếu sản phẩm đáp ứng các điều kiện quy định tại ",
                },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: "." },
              ],
              "Tùy từng trường hợp, GamePiece Labs có thể áp dụng một trong các phương án:",
            ],
            bullets: [
              "Đổi sản phẩm",
              "Hoàn lại một phần giá trị đơn hàng",
              "Hoàn lại toàn bộ giá trị sản phẩm đủ điều kiện.",
            ],
          },
          {
            title: "5.3. Phương thức hoàn tiền",
            paragraphs: [
              "Đối với các trường hợp đủ điều kiện hoàn tiền, GamePiece Labs sẽ xác nhận với khách hàng về số tiền được hoàn và thông tin nhận tiền trước khi thực hiện hoàn trả.",
              "Khoản tiền hoàn sẽ được chuyển về tài khoản hoặc phương thức thanh toán đã được hai bên xác nhận.",
            ],
          },
        ],
      },
      {
        title: "Chi phí phát sinh",
        number: "6",
        steps: [
          {
            title: "",
            paragraphs: [
              "Các khoản chi phí ngoài giá trị sản phẩm, chẳng hạn như phí vận chuyển hoặc các khoản phí khác nếu có, sẽ được thông báo cho khách hàng trước khi xác nhận thanh toán.",
              "GamePiece Labs không tự ý bổ sung các khoản chi phí chưa được thông báo và xác nhận với khách hàng.",
            ],
          },
        ],
      },
      {
        title: "Bảo mật thông tin thanh toán",
        number: "7",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs không yêu cầu khách hàng cung cấp mật khẩu ngân hàng, mã OTP hoặc các thông tin bảo mật tương tự.",
              "Khách hàng không nên cung cấp các thông tin này cho bất kỳ cá nhân nào tự nhận là đại diện của GamePiece Labs.",
            ],
          },
        ],
      },
      {
        title: "Hỗ trợ thanh toán",
        number: "8",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu gặp vấn đề trong quá trình thanh toán, khách hàng vui lòng liên hệ GamePiece Labs thông qua các kênh liên hệ chính thức được công bố trên website để được hỗ trợ.",
            ],
          },
        ],
      },
    ],
  },
  "chinh-sach-doi-tra-hoan-tien": {
    title: "Chính sách đổi trả & hoàn tiền",
    updatedAt: "22/09/2026",
    intro:
      "GamePiece Labs áp dụng chính sách đổi trả và hoàn tiền khác nhau tùy theo loại sản phẩm. Khách hàng vui lòng kiểm tra sản phẩm sau khi nhận hàng và liên hệ với GamePiece Labs trong thời hạn quy định nếu phát hiện vấn đề.",
    sections: [
      {
        title: "Phạm vi áp dụng",
        number: "1",
        steps: [
          {
            title: "",
            paragraphs: [
              "Chính sách này áp dụng cho hai nhóm sản phẩm:",
            ],
            bullets: [
              "Sản phẩm Organizer do GamePiece Labs sản xuất",
              "Sản phẩm bán lại do GamePiece Labs phân phối hoặc kinh doanh.",
            ],
          },
        ],
      },
      {
        title: "Sản phẩm Organizer do GamePiece Labs sản xuất",
        number: "2",
        steps: [
          {
            title: "2.1. Trường hợp không áp dụng đổi trả hoặc hoàn tiền",
            paragraphs: [
              "GamePiece Labs không áp dụng đổi trả hoặc hoàn tiền đối với sản phẩm Organizer trong các trường hợp:",
            ],
            bullets: [
              "Khách hàng thay đổi nhu cầu hoặc không còn nhu cầu sử dụng sản phẩm",
              "Khách hàng thay đổi quyết định mua hàng sau khi đơn hàng đã được xác nhận",
              "Khách hàng chủ động hủy đơn sau khi đã thanh toán tiền đặt cọc",
              "Khách hàng muốn đổi sang mẫu khác sau khi sản phẩm đã được sản xuất đúng theo đơn hàng đã xác nhận",
              "Sản phẩm có những khác biệt nhỏ về bề mặt, đường in hoặc màu sắc phát sinh từ đặc tính thông thường của quá trình in 3D nhưng không ảnh hưởng đến công năng sử dụng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              [
                { text: "Khoản đặt cọc 50% đối với đơn hàng Organizer không được hoàn lại khi khách hàng chủ động hủy đơn theo quy định tại " },
                {
                  text: "Chính sách Thanh toán",
                  href: "/privacy/chinh-sach-thanh-toan",
                  strong: true,
                },
                { text: " của GamePiece Labs." },
              ],
            ],
          },
          {
            title: "2.2. Trường hợp GamePiece Labs hỗ trợ xử lý",
            paragraphs: [
              "Khách hàng có thể yêu cầu GamePiece Labs kiểm tra và xử lý nếu sản phẩm:",
            ],
            bullets: [
              "Không đúng mẫu đã được xác nhận",
              "Sai số lượng",
              "Thiếu chi tiết hoặc bộ phận của sản phẩm",
              "Có lỗi sản xuất ảnh hưởng đáng kể đến khả năng sử dụng",
              "Bị hư hỏng do lỗi đóng gói từ phía GamePiece Labs",
              "Không đúng với thông tin sản phẩm hoặc nội dung đơn hàng đã được hai bên xác nhận.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Sau khi kiểm tra và xác nhận lỗi thuộc trách nhiệm của GamePiece Labs, tùy theo tình trạng thực tế, GamePiece Labs sẽ ưu tiên một trong các phương án:",
            ],
            bullets: [
              "Sửa chữa hoặc bổ sung phần bị thiếu",
              "Sản xuất lại chi tiết bị lỗi",
              "Đổi sản phẩm tương ứng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Trường hợp GamePiece Labs không thể khắc phục hoặc không thể cung cấp sản phẩm đúng theo đơn hàng đã xác nhận, GamePiece Labs sẽ trao đổi với khách hàng để thống nhất phương án xử lý phù hợp, bao gồm hoàn lại khoản thanh toán tương ứng khi cần thiết.",
            ],
          },
        ],
      },
      {
        title: "Sản phẩm bán lại",
        number: "3",
        steps: [
          {
            title: "3.1. Trường hợp được áp dụng đổi trả",
            paragraphs: [
              "Đối với sản phẩm bán lại, GamePiece Labs tiếp nhận yêu cầu đổi trả nếu sản phẩm thuộc một trong các trường hợp:",
            ],
            bullets: [
              "Giao sai sản phẩm",
              "Giao sai số lượng",
              "Thiếu sản phẩm hoặc phụ kiện đi kèm",
              "Sản phẩm bị lỗi hoặc hư hỏng tại thời điểm giao nhận",
              "Sản phẩm không đúng với thông tin hoặc nội dung đơn hàng đã được xác nhận.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Đối với những vấn đề có thể nhận biết hợp lý ngay khi nhận hoặc mở kiện hàng như giao sai, thiếu sản phẩm, sai số lượng, vỡ hoặc hư hỏng bên ngoài, khách hàng vui lòng thông báo cho GamePiece Labs trong vòng 48 giờ kể từ thời điểm nhận hàng.",
              "Đối với lỗi của sản phẩm bán lại không thể nhận biết hợp lý ngay tại thời điểm nhận hàng nhưng được phát hiện sau đó, khách hàng vui lòng liên hệ GamePiece Labs trong vòng 07 ngày kể từ ngày nhận sản phẩm để GamePiece Labs kiểm tra và xác định phương án xử lý.",
              "Việc tiếp nhận yêu cầu không đồng nghĩa với việc sản phẩm mặc nhiên đủ điều kiện đổi trả. GamePiece Labs sẽ kiểm tra tình trạng sản phẩm và nguyên nhân của vấn đề trước khi xác nhận phương án xử lý.",
              "Sản phẩm được gửi lại cần được giữ trong tình trạng phù hợp để GamePiece Labs có thể kiểm tra và xác minh nguyên nhân.",
            ],
          },
          {
            title: "3.2. Trường hợp không áp dụng đổi trả",
            paragraphs: [
              "GamePiece Labs không áp dụng đổi trả đối với sản phẩm bán lại trong các trường hợp:",
            ],
            bullets: [
              "Khách hàng thay đổi nhu cầu hoặc thay đổi quyết định mua hàng khi sản phẩm không có lỗi và đã được giao đúng theo đơn hàng",
              "Sản phẩm đã qua sử dụng và không có lỗi từ nhà sản xuất hoặc GamePiece Labs",
              "Sản phẩm bị hư hỏng do quá trình sử dụng, bảo quản hoặc tác động từ phía khách hàng",
              "Sản phẩm không còn đầy đủ bao bì, phụ kiện hoặc các thành phần đi kèm ban đầu",
              "Yêu cầu đổi trả được gửi sau thời hạn quy định và không thuộc trường hợp bảo hành hoặc lỗi sản phẩm.",
            ],
          },
        ],
      },
      {
        title: "Thời hạn thông báo vấn đề",
        number: "4",
        description:
          "Thời hạn thông báo được áp dụng tùy theo tính chất của vấn đề.",
        steps: [
          {
            title: "4.1. Vấn đề có thể nhận biết ngay khi nhận hàng",
            paragraphs: ["Đối với:"],
            bullets: [
              "Giao sai sản phẩm",
              "Sai số lượng",
              "Thiếu sản phẩm hoặc phụ kiện",
              "Vỡ hoặc hư hỏng bên ngoài",
              "Các vấn đề giao nhận có thể nhận biết hợp lý khi mở kiện",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Khách hàng vui lòng liên hệ GamePiece Labs trong vòng 48 giờ kể từ thời điểm nhận hàng.",
              "Việc thông báo sớm giúp GamePiece Labs có cơ sở xác minh tình trạng giao nhận và làm việc với đơn vị vận chuyển khi cần thiết.",
            ],
          },
          {
            title: "4.2. Lỗi không thể nhận biết ngay khi nhận hàng",
            paragraphs: [
              "Đối với sản phẩm bán lại có lỗi không thể nhận biết hợp lý ngay khi mở kiện, khách hàng vui lòng thông báo trong vòng 07 ngày kể từ ngày nhận sản phẩm.",
              [
                { text: "Đối với sản phẩm Organizer có lỗi sản xuất chỉ phát hiện trong quá trình sử dụng, yêu cầu được xử lý theo " },
                {
                  text: "Chính sách Bảo hành",
                  href: "/privacy/chinh-sach-bao-hanh",
                  strong: true,
                },
                { text: " trong thời hạn bảo hành tương ứng." },
              ],
              "Các mốc thời gian trên được áp dụng cho từng loại vấn đề khác nhau và không thay thế cho nhau.",
            ],
          },
        ],
      },
      {
        title: "Quy trình yêu cầu đổi trả",
        number: "5",
        steps: [
          {
            title: "Bước 1 - Liên hệ GamePiece Labs",
            paragraphs: [
              "Khách hàng liên hệ GamePiece Labs thông qua các kênh hỗ trợ chính thức và cung cấp thông tin đơn hàng cùng mô tả vấn đề gặp phải.",
            ],
          },
          {
            title: "Bước 2 - Cung cấp thông tin kiểm tra",
            paragraphs: [
              "Khách hàng cung cấp hình ảnh, video hoặc các thông tin liên quan đến tình trạng sản phẩm khi được yêu cầu.",
            ],
          },
          {
            title: "Bước 3 - Xác nhận phương án xử lý",
            paragraphs: [
              "GamePiece Labs sẽ kiểm tra thông tin và thông báo cho khách hàng về việc yêu cầu có đủ điều kiện đổi trả hay không, đồng thời đề xuất phương án xử lý phù hợp.",
            ],
          },
          {
            title: "Bước 4 - Gửi lại sản phẩm nếu cần",
            paragraphs: [
              "Nếu sản phẩm cần được gửi lại để kiểm tra hoặc đổi trả, GamePiece Labs sẽ cung cấp hướng dẫn cụ thể về địa chỉ và phương thức gửi hàng.",
              "Khách hàng vui lòng không tự ý gửi sản phẩm về GamePiece Labs trước khi nhận được xác nhận.",
            ],
          },
        ],
      },
      {
        title: "Chi phí đổi trả",
        number: "6",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu việc đổi trả phát sinh do lỗi từ phía GamePiece Labs, bao gồm:",
            ],
            bullets: [
              "Giao sai sản phẩm",
              "Giao sai số lượng",
              "Thiếu sản phẩm",
              "Sản phẩm không đúng với đơn hàng đã xác nhận",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sẽ chịu chi phí vận chuyển phát sinh trong quá trình đổi trả.",
              "Đối với các trường hợp sản phẩm bị lỗi từ nhà sản xuất, GamePiece Labs sẽ tiếp nhận thông tin, kiểm tra tình trạng sản phẩm và thông báo phương án xử lý cụ thể cho khách hàng.",
            ],
          },
        ],
      },
      {
        title: "Hoàn tiền",
        number: "7",
        steps: [
          {
            title: "7.1. Đối với sản phẩm Organizer",
            paragraphs: [
              "GamePiece Labs không áp dụng hoàn tiền đối với sản phẩm Organizer trong trường hợp khách hàng thay đổi nhu cầu, thay đổi quyết định mua hàng hoặc chủ động hủy đơn sau khi đã thanh toán đặt cọc.",
              "Nếu sản phẩm có lỗi thuộc trách nhiệm của GamePiece Labs, GamePiece Labs sẽ ưu tiên sửa chữa, bổ sung, sản xuất lại hoặc đổi sản phẩm.",
              "Chỉ trong trường hợp GamePiece Labs không thể khắc phục hoặc không thể cung cấp sản phẩm đúng theo đơn hàng đã xác nhận, hai bên sẽ thống nhất phương án xử lý phù hợp, bao gồm hoàn lại khoản thanh toán tương ứng khi cần thiết.",
            ],
          },
          {
            title: "7.2. Đối với sản phẩm bán lại",
            paragraphs: [
              "Đối với sản phẩm bán lại đủ điều kiện hoàn tiền, GamePiece Labs sẽ xác nhận với khách hàng về:",
            ],
            bullets: [
              "Sản phẩm được hoàn tiền",
              "Giá trị được hoàn",
              "Thông tin nhận tiền",
              "Phương thức hoàn tiền.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Khoản tiền được hoàn được xác định dựa trên giá trị thực tế của sản phẩm đủ điều kiện hoàn trả.",
              "Nếu việc hoàn trả phát sinh do lỗi từ phía GamePiece Labs, các chi phí liên quan sẽ được GamePiece Labs tiếp nhận và xử lý phù hợp.",
            ],
          },
        ],
      },
      {
        title: "Phương thức hoàn tiền",
        number: "8",
        steps: [
          {
            title: "",
            paragraphs: [
              "Sau khi sản phẩm được xác nhận đáp ứng điều kiện hoàn tiền, GamePiece Labs sẽ tiến hành hoàn trả khoản tiền theo thông tin đã được xác nhận với khách hàng.",
              "Khoản tiền hoàn có thể được chuyển về tài khoản ngân hàng hoặc phương thức thanh toán đã được hai bên thống nhất.",
              "GamePiece Labs sẽ thông báo cho khách hàng sau khi thực hiện hoàn tiền.",
              "Thời gian khoản tiền được ghi nhận có thể phụ thuộc vào ngân hàng hoặc đơn vị cung cấp dịch vụ thanh toán.",
            ],
          },
        ],
      },
      {
        title: "Liên hệ hỗ trợ",
        number: "9",
        steps: [
          {
            title: "",
            paragraphs: [
              "Để yêu cầu đổi trả hoặc báo cáo vấn đề liên quan đến sản phẩm, khách hàng vui lòng liên hệ GamePiece Labs thông qua các kênh liên hệ chính thức được công bố trên website.",
              "Khi liên hệ, khách hàng nên cung cấp:",
            ],
            bullets: [
              "Thông tin đơn hàng",
              "Tên sản phẩm",
              "Mô tả vấn đề",
              "Hình ảnh hoặc video liên quan nếu có.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sẽ kiểm tra thông tin và phản hồi phương án xử lý phù hợp với từng trường hợp.",
            ],
          },
        ],
      },
    ],
  },
  "chinh-sach-giao-hang": {
    title: "Chính sách giao hàng",
    updatedAt: "22/09/2026",
    intro:
      "GamePiece Labs áp dụng chính sách giao hàng đối với các sản phẩm Organizer do GamePiece Labs sản xuất và các sản phẩm bán lại được GamePiece Labs phân phối hoặc kinh doanh.",
    sections: [
      {
        title: "Phạm vi giao hàng",
        number: "1",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs hỗ trợ giao hàng đến các khu vực nằm trong phạm vi phục vụ của đơn vị vận chuyển tại thời điểm đặt hàng.",
              "Trong trường hợp địa chỉ nhận hàng nằm ngoài phạm vi hỗ trợ hoặc có điều kiện giao nhận đặc biệt, GamePiece Labs sẽ thông báo cho khách hàng trước khi tiến hành giao hàng.",
            ],
          },
        ],
      },
      {
        title: "Thời điểm bắt đầu giao hàng",
        number: "2",
        steps: [
          {
            title: "2.1. Đối với sản phẩm Organizer",
            paragraphs: [
              "Thời gian sản xuất Organizer và thời gian vận chuyển là hai khoảng thời gian riêng biệt.",
              "Sau khi khách hàng:",
            ],
            bullets: [
              "Xác nhận đơn hàng",
              "Thanh toán khoản đặt cọc 50%",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sẽ tiến hành sản xuất sản phẩm theo nội dung đơn hàng đã xác nhận.",
              "Khi sản phẩm hoàn thiện, GamePiece Labs sẽ thông báo cho khách hàng.",
              "Sản phẩm được đóng gói và bàn giao cho đơn vị vận chuyển sau khi GamePiece Labs xác nhận đã nhận đủ 50% giá trị đơn hàng còn lại.",
              "Thời gian sản xuất dự kiến sẽ được thông báo cho khách hàng trong quá trình xác nhận đơn hàng và không được tính vào thời gian vận chuyển.",
            ],
          },
          {
            title: "2.2. Đối với sản phẩm bán lại",
            paragraphs: [
              "Đối với sản phẩm bán lại có sẵn, GamePiece Labs sẽ tiến hành chuẩn bị và bàn giao đơn hàng cho đơn vị vận chuyển sau khi đơn hàng và phương thức thanh toán được xác nhận.",
              "Trong trường hợp sản phẩm tạm hết hàng hoặc cần thêm thời gian xử lý, GamePiece Labs sẽ thông báo cho khách hàng.",
            ],
          },
        ],
      },
      {
        title: "Phương thức và đơn vị vận chuyển",
        number: "3",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sử dụng các đơn vị vận chuyển phù hợp với:",
            ],
            bullets: [
              "Địa chỉ nhận hàng",
              "Kích thước và khối lượng đơn hàng",
              "Điều kiện giao nhận",
              "Tình trạng dịch vụ vận chuyển tại thời điểm gửi hàng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Phí vận chuyển dự kiến hoặc cách xác định phí vận chuyển sẽ được GamePiece Labs thông báo cho khách hàng trước khi khách hàng xác nhận đơn hàng hoặc thanh toán khoản đặt cọc.",
              "Trong một số trường hợp, GamePiece Labs có thể thay đổi đơn vị vận chuyển để phù hợp với khu vực nhận hàng hoặc tình trạng vận chuyển thực tế.",
            ],
          },
        ],
      },
      {
        title: "Thời gian giao hàng dự kiến",
        number: "4",
        steps: [
          {
            title: "",
            paragraphs: [
              "Thời gian vận chuyển dự kiến sẽ được GamePiece Labs thông báo cho khách hàng khi xác nhận đơn hàng dựa trên thông tin của đơn vị vận chuyển tại thời điểm đó.",
              "Thời gian giao hàng được tính từ thời điểm đơn hàng được bàn giao cho đơn vị vận chuyển, không bao gồm thời gian sản xuất hoặc chuẩn bị đơn hàng.",
              "Thời gian giao hàng dự kiến có thể phụ thuộc vào:",
            ],
            bullets: [
              "Địa chỉ nhận hàng",
              "Đơn vị vận chuyển",
              "Phương thức vận chuyển",
              "Điều kiện giao nhận tại khu vực của khách hàng",
              "Các yếu tố khách quan ảnh hưởng đến quá trình vận chuyển.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sẽ cung cấp hoặc thông báo thời gian giao hàng dự kiến cho khách hàng khi có thông tin từ đơn vị vận chuyển.",
              "Thời gian giao hàng thực tế có thể thay đổi so với dự kiến trong một số trường hợp nằm ngoài khả năng kiểm soát của GamePiece Labs.",
            ],
          },
        ],
      },
      {
        title: "Phí vận chuyển",
        number: "5",
        steps: [
          {
            title: "",
            paragraphs: [
              "Chi phí vận chuyển ban đầu của đơn hàng do khách hàng thanh toán.",
              "Phí vận chuyển được xác định dựa trên:",
            ],
            bullets: [
              "Địa chỉ nhận hàng",
              "Kích thước hoặc khối lượng kiện hàng",
              "Phương thức vận chuyển",
              "Mức phí của đơn vị vận chuyển tại thời điểm gửi hàng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sẽ thông báo phí vận chuyển cho khách hàng trước khi tiến hành giao hàng.",
              "Nếu sản phẩm được xác định có lỗi thuộc trách nhiệm của GamePiece Labs hoặc thuộc trường hợp bảo hành Organizer được GamePiece Labs xác nhận, GamePiece Labs sẽ chịu các chi phí vận chuyển cần thiết liên quan đến việc kiểm tra, khắc phục lỗi, bảo hành hoặc gửi sản phẩm/chi tiết thay thế cho khách hàng.",
              "Khách hàng vui lòng liên hệ GamePiece Labs trước khi tự gửi sản phẩm về để được hướng dẫn phương thức vận chuyển phù hợp.",
              "Nếu sau khi kiểm tra xác định sản phẩm không thuộc phạm vi bảo hành hoặc hư hỏng phát sinh do quá trình sử dụng, bảo quản hoặc tác động từ phía khách hàng, các chi phí vận chuyển phát sinh có thể do khách hàng chịu. GamePiece Labs sẽ thông báo cho khách hàng trước khi phát sinh thêm chi phí.",
              "Nếu có chương trình hỗ trợ hoặc miễn phí vận chuyển, điều kiện áp dụng sẽ được GamePiece Labs thông báo cụ thể tại thời điểm đặt hàng.",
            ],
          },
        ],
      },
      {
        title: "Thông tin giao hàng",
        number: "6",
        steps: [
          {
            title: "",
            paragraphs: [
              "Khách hàng có trách nhiệm cung cấp đầy đủ và chính xác các thông tin cần thiết để giao hàng, bao gồm:",
            ],
            bullets: [
              "Họ và tên người nhận",
              "Số điện thoại",
              "Địa chỉ nhận hàng",
              "Các thông tin hoặc hướng dẫn giao hàng cần thiết nếu có.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Khách hàng vui lòng kiểm tra kỹ thông tin trước khi đơn hàng được bàn giao cho đơn vị vận chuyển.",
              "Nếu phát hiện thông tin giao hàng không chính xác, khách hàng vui lòng liên hệ GamePiece Labs sớm nhất có thể.",
              "GamePiece Labs sẽ hỗ trợ thay đổi thông tin nếu đơn hàng chưa được bàn giao cho đơn vị vận chuyển.",
              "Sau khi đơn hàng đã được bàn giao, khả năng thay đổi địa chỉ hoặc thông tin người nhận sẽ phụ thuộc vào chính sách và khả năng hỗ trợ của đơn vị vận chuyển.",
            ],
          },
        ],
      },
      {
        title: "Theo dõi đơn hàng",
        number: "7",
        steps: [
          {
            title: "",
            paragraphs: [
              "Sau khi đơn hàng được bàn giao cho đơn vị vận chuyển, GamePiece Labs sẽ cung cấp thông tin vận chuyển hoặc mã vận đơn cho khách hàng khi có.",
              "Khách hàng có thể sử dụng thông tin này để theo dõi trạng thái giao hàng thông qua hệ thống của đơn vị vận chuyển.",
              "Thông tin về trạng thái và thời gian giao hàng trong quá trình vận chuyển được cập nhật dựa trên dữ liệu do đơn vị vận chuyển cung cấp.",
            ],
          },
        ],
      },
      {
        title: "Giao hàng không thành công",
        number: "8",
        steps: [
          {
            title: "",
            paragraphs: [
              "Đơn hàng có thể giao không thành công trong các trường hợp như:",
            ],
            bullets: [
              "Không liên hệ được với người nhận",
              "Người nhận không có mặt tại địa chỉ giao hàng",
              "Địa chỉ hoặc số điện thoại do khách hàng cung cấp không chính xác",
              "Khách hàng từ chối nhận đơn hàng",
              "Các trường hợp khác theo quy trình của đơn vị vận chuyển.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Nếu đơn hàng bị hoàn về GamePiece Labs do thông tin khách hàng cung cấp không chính xác, không liên hệ được với khách hàng hoặc khách hàng từ chối nhận hàng mà không xuất phát từ lỗi của GamePiece Labs, khách hàng sẽ chịu các chi phí vận chuyển phát sinh nếu yêu cầu giao lại đơn hàng.",
              "GamePiece Labs sẽ thông báo chi phí phát sinh cho khách hàng trước khi thực hiện giao lại.",
              [
                { text: "Đối với sản phẩm Organizer đã được sản xuất đúng theo đơn hàng đã xác nhận, việc khách hàng từ chối nhận hàng không làm phát sinh quyền hủy đơn hoặc hoàn tiền theo " },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: " của GamePiece Labs." },
              ],
            ],
          },
        ],
      },
      {
        title: "Sản phẩm bị hư hỏng, thiếu hoặc giao sai",
        number: "9",
        steps: [
          {
            title: "",
            paragraphs: [
              "Khi nhận hàng, khách hàng nên kiểm tra tình trạng bên ngoài của kiện hàng và sản phẩm.",
              "Nếu phát hiện một trong các vấn đề sau:",
            ],
            bullets: [
              "Kiện hàng có dấu hiệu hư hỏng bất thường",
              "Sản phẩm bị hư hỏng",
              "Giao sai sản phẩm",
              "Giao sai số lượng",
              "Thiếu sản phẩm, chi tiết hoặc phụ kiện",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Khách hàng vui lòng liên hệ GamePiece Labs trong vòng 48 giờ kể từ thời điểm nhận hàng.",
              "Khách hàng nên giữ lại:",
            ],
            bullets: [
              "Sản phẩm",
              "Bao bì",
              "Các phụ kiện đi kèm",
              "Hình ảnh hoặc video thể hiện tình trạng sản phẩm nếu có.",
            ],
          },
          {
            title: "",
            paragraphs: [
              [
                { text: "GamePiece Labs sẽ tiếp nhận thông tin, kiểm tra nguyên nhân và xử lý theo " },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: "." },
              ],
              "Nếu lỗi được xác định thuộc trách nhiệm của GamePiece Labs và cần gửi sản phẩm hoặc chi tiết thay thế, khách hàng không phải thanh toán thêm phí vận chuyển cho lần gửi thay thế.",
            ],
          },
        ],
      },
      {
        title: "Kiểm hàng khi nhận",
        number: "10",
        steps: [
          {
            title: "",
            paragraphs: [
              [
                { text: "Việc kiểm tra sản phẩm khi nhận hàng được thực hiện theo " },
                {
                  text: "Chính sách Kiểm hàng",
                  href: "/privacy/chinh-sach-kiem-hang",
                  strong: true,
                },
                { text: " của GamePiece Labs và điều kiện hỗ trợ của đơn vị vận chuyển." },
              ],
              "Khách hàng nên kiểm tra tình trạng bên ngoài của kiện hàng trước khi nhận.",
              "Nếu kiện hàng có dấu hiệu:",
            ],
            bullets: [
              "Bị rách",
              "Bị móp nghiêm trọng",
              "Bị ướt",
              "Bị mở trước",
              "Hoặc có dấu hiệu bất thường khác",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Khách hàng nên ghi nhận tình trạng kiện hàng và liên hệ GamePiece Labs để được hỗ trợ.",
            ],
          },
        ],
      },
      {
        title: "Chậm trễ trong quá trình vận chuyển",
        number: "11",
        steps: [
          {
            title: "",
            paragraphs: [
              "Thời gian giao hàng có thể bị ảnh hưởng bởi các yếu tố ngoài khả năng kiểm soát của GamePiece Labs, bao gồm:",
            ],
            bullets: [
              "Điều kiện thời tiết",
              "Thiên tai hoặc sự kiện bất khả kháng",
              "Sự cố từ đơn vị vận chuyển",
              "Hạn chế giao thông hoặc khu vực",
              "Giai đoạn cao điểm",
              "Các tình huống khách quan khác ảnh hưởng đến quá trình giao nhận.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Nếu đơn hàng có dấu hiệu giao chậm bất thường, khách hàng có thể liên hệ GamePiece Labs để được hỗ trợ kiểm tra.",
              "GamePiece Labs sẽ phối hợp với đơn vị vận chuyển để xác minh tình trạng và cập nhật thông tin cho khách hàng.",
              "Đơn hàng giao chậm chưa được xem là thất lạc nếu đơn vị vận chuyển vẫn đang trong quá trình xác minh hoặc tiếp tục thực hiện giao hàng.",
            ],
          },
        ],
      },
      {
        title: "Đơn hàng thất lạc trong quá trình vận chuyển",
        number: "12",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu đơn hàng có dấu hiệu thất lạc hoặc không được giao trong thời gian bất thường, khách hàng vui lòng liên hệ GamePiece Labs để được hỗ trợ.",
              "GamePiece Labs sẽ làm việc trực tiếp với đơn vị vận chuyển để kiểm tra và xác minh tình trạng đơn hàng.",
            ],
          },
          {
            title: "Trường hợp đơn hàng được tìm thấy",
            paragraphs: [
              "Nếu đơn hàng được tìm thấy và vẫn có thể tiếp tục giao, GamePiece Labs sẽ phối hợp với đơn vị vận chuyển để tiếp tục giao sản phẩm đến khách hàng.",
            ],
          },
          {
            title: "Trường hợp đơn hàng được xác nhận thất lạc",
            paragraphs: [
              "Nếu đơn vị vận chuyển xác nhận đơn hàng bị thất lạc và nguyên nhân không xuất phát từ thông tin hoặc lỗi của khách hàng, khách hàng sẽ không phải thanh toán thêm chi phí vận chuyển để nhận sản phẩm thay thế.",
              "Tùy theo loại sản phẩm và tình trạng hàng hóa, GamePiece Labs sẽ trao đổi với khách hàng để áp dụng phương án phù hợp, bao gồm:",
            ],
            bullets: [
              "Sản xuất lại và gửi lại sản phẩm đối với sản phẩm Organizer",
              "Gửi lại sản phẩm mới đối với sản phẩm bán lại còn hàng",
              "Đổi sang sản phẩm khác nếu khách hàng đồng ý",
              "Hoàn lại khoản thanh toán tương ứng nếu GamePiece Labs không thể cung cấp sản phẩm thay thế.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sẽ là bên trực tiếp làm việc với đơn vị vận chuyển về việc xác minh, khiếu nại và bồi thường liên quan đến kiện hàng thất lạc.",
              "Việc xử lý giữa GamePiece Labs và đơn vị vận chuyển không làm ảnh hưởng đến quá trình hỗ trợ và giải quyết đơn hàng với khách hàng.",
            ],
          },
        ],
      },
      {
        title: "Trường hợp hệ thống báo đã giao nhưng khách hàng chưa nhận được hàng",
        number: "13",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu trạng thái vận chuyển hiển thị đã giao thành công nhưng khách hàng chưa nhận được sản phẩm, khách hàng vui lòng liên hệ GamePiece Labs sớm nhất có thể.",
              "GamePiece Labs sẽ phối hợp với đơn vị vận chuyển để kiểm tra các thông tin liên quan như:",
            ],
            bullets: [
              "Thời gian giao hàng",
              "Người nhận hàng",
              "Thông tin xác nhận giao hàng",
              "Hình ảnh giao hàng nếu có",
              "Các thông tin liên quan khác do đơn vị vận chuyển cung cấp.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Phương án xử lý sẽ được xác định sau khi GamePiece Labs và đơn vị vận chuyển hoàn tất việc xác minh tình trạng đơn hàng.",
            ],
          },
        ],
      },
      {
        title: "Liên hệ hỗ trợ giao hàng",
        number: "14",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu cần hỗ trợ về tình trạng giao hàng, thay đổi thông tin nhận hàng hoặc các vấn đề phát sinh trong quá trình vận chuyển, khách hàng vui lòng liên hệ GamePiece Labs thông qua các kênh liên hệ chính thức được công bố trên website.",
              "Khi liên hệ, khách hàng nên cung cấp:",
            ],
            bullets: [
              "Thông tin đơn hàng",
              "Họ tên người nhận",
              "Số điện thoại người nhận",
              "Mã vận đơn nếu có",
              "Nội dung vấn đề cần hỗ trợ",
              "Hình ảnh hoặc video liên quan nếu có.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sẽ kiểm tra thông tin và hỗ trợ khách hàng theo tình trạng thực tế của từng đơn hàng.",
            ],
          },
        ],
      },
    ],
  },
  "chinh-sach-kiem-hang": {
    title: "Chính sách kiểm hàng",
    updatedAt: "22/09/2026",
    intro:
      "GamePiece Labs khuyến khích khách hàng kiểm tra tình trạng đơn hàng ngay khi nhận để kịp thời phát hiện các vấn đề liên quan đến kiện hàng, sản phẩm, số lượng và các phụ kiện đi kèm. Chính sách này quy định phạm vi kiểm hàng và cách xử lý khi khách hàng phát hiện vấn đề trong quá trình nhận hàng.",
    sections: [
      {
        title: "Phạm vi áp dụng",
        number: "1",
        steps: [
          {
            title: "",
            paragraphs: [
              "Chính sách kiểm hàng áp dụng đối với:",
            ],
            bullets: [
              "Sản phẩm Organizer do GamePiece Labs sản xuất",
              "Sản phẩm bán lại do GamePiece Labs phân phối hoặc kinh doanh.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Khả năng mở kiện và kiểm tra sản phẩm tại thời điểm giao nhận phụ thuộc vào chính sách và điều kiện hỗ trợ của đơn vị vận chuyển.",
            ],
          },
        ],
      },
      {
        title: "Nội dung kiểm hàng",
        number: "2",
        steps: [
          {
            title: "",
            paragraphs: [
              "Khi nhận hàng, khách hàng nên kiểm tra các nội dung sau:",
            ],
            bullets: [
              "Tình trạng bên ngoài của kiện hàng",
              "Sản phẩm có đúng với đơn hàng đã xác nhận hay không",
              "Số lượng sản phẩm",
              "Các chi tiết hoặc phụ kiện đi kèm",
              "Tình trạng bên ngoài của sản phẩm nếu điều kiện giao nhận cho phép mở kiện kiểm tra.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Việc kiểm hàng nhằm xác nhận tình trạng giao nhận ban đầu và không được xem là quá trình sử dụng thử hoặc kiểm tra toàn bộ tính năng của sản phẩm.",
            ],
          },
        ],
      },
      {
        title: "Kiểm tra tình trạng kiện hàng trước khi nhận",
        number: "3",
        steps: [
          {
            title: "",
            paragraphs: [
              "Trước khi nhận hàng, khách hàng nên quan sát tình trạng bên ngoài của kiện hàng.",
              "Khách hàng cần lưu ý nếu kiện hàng có các dấu hiệu bất thường như:",
            ],
            bullets: [
              "Bị rách hoặc thủng",
              "Bị móp nghiêm trọng",
              "Bị ướt",
              "Có dấu hiệu bị mở trước",
              "Bao bì hoặc niêm phong có dấu hiệu bất thường",
              "Có dấu hiệu sản phẩm bên trong bị va đập hoặc hư hỏng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Trong trường hợp phát hiện dấu hiệu bất thường, khách hàng nên chụp ảnh hoặc quay video để ghi nhận tình trạng kiện hàng.",
              "Nếu điều kiện giao nhận cho phép, khách hàng có thể yêu cầu nhân viên giao hàng ghi nhận tình trạng kiện hàng tại thời điểm giao.",
            ],
          },
        ],
      },
      {
        title: "Kiểm hàng khi đơn vị vận chuyển cho phép mở kiện",
        number: "4",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu đơn vị vận chuyển hỗ trợ kiểm hàng, khách hàng có thể kiểm tra:",
            ],
            bullets: [
              "Đúng loại sản phẩm",
              "Đúng mẫu sản phẩm",
              "Đúng số lượng",
              "Tình trạng bên ngoài của sản phẩm",
              "Các chi tiết hoặc phụ kiện đi kèm.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Việc kiểm hàng không bao gồm:",
            ],
            bullets: [
              "Sử dụng sản phẩm trong thời gian dài",
              "Tự ý tháo rời sản phẩm",
              "Tự sửa chữa hoặc thay đổi cấu trúc sản phẩm",
              "Thực hiện các thao tác có khả năng làm hư hỏng hoặc thay đổi tình trạng ban đầu của sản phẩm.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Nếu khách hàng tự ý thực hiện các thao tác trên và làm phát sinh hư hỏng, GamePiece Labs có quyền từ chối xử lý đối với phần hư hỏng được xác định xuất phát từ hành vi của khách hàng.",
            ],
          },
        ],
      },
      {
        title: "Trường hợp đơn vị vận chuyển không hỗ trợ kiểm hàng",
        number: "5",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu đơn vị vận chuyển không cho phép mở kiện trước khi hoàn tất việc nhận hàng, khách hàng có thể nhận hàng và kiểm tra sản phẩm ngay sau đó.",
              "GamePiece Labs khuyến khích khách hàng:",
            ],
            bullets: [
              "Kiểm tra sản phẩm sớm sau khi nhận",
              "Giữ lại bao bì và vật liệu đóng gói trong trường hợp phát hiện vấn đề",
              "Ghi nhận bằng hình ảnh hoặc video nếu sản phẩm có dấu hiệu giao sai, thiếu hoặc hư hỏng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Việc đơn vị vận chuyển không hỗ trợ kiểm hàng không làm mất quyền yêu cầu GamePiece Labs kiểm tra và hỗ trợ đối với các vấn đề thuộc trách nhiệm của GamePiece Labs.",
            ],
          },
        ],
      },
      {
        title: "Video mở kiện hàng",
        number: "6",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs khuyến khích khách hàng quay video quá trình mở kiện, đặc biệt đối với các đơn hàng:",
            ],
            bullets: [
              "Có nhiều sản phẩm",
              "Có nhiều chi tiết hoặc phụ kiện",
              "Có giá trị cao",
              "Có dấu hiệu bất thường ở bao bì khi nhận.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Video mở kiện giúp GamePiece Labs xác minh nhanh hơn trong các trường hợp:",
            ],
            bullets: [
              "Giao sai sản phẩm",
              "Sai số lượng",
              "Thiếu sản phẩm",
              "Thiếu chi tiết hoặc phụ kiện",
              "Sản phẩm bị hư hỏng trong quá trình giao nhận.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Video mở kiện là bằng chứng hỗ trợ và không phải điều kiện bắt buộc để GamePiece Labs tiếp nhận yêu cầu của khách hàng.",
              "Trong trường hợp không có video, GamePiece Labs có thể yêu cầu khách hàng cung cấp hình ảnh, tình trạng bao bì, thông tin vận chuyển hoặc các thông tin hợp lý khác để phục vụ quá trình xác minh.",
            ],
          },
        ],
      },
      {
        title: "Thời hạn thông báo đối với vấn đề có thể nhận biết khi nhận hàng",
        number: "7",
        steps: [
          {
            title: "",
            paragraphs: [
              "Đối với các vấn đề có thể nhận biết ngay khi nhận hoặc mở kiện hàng, bao gồm:",
            ],
            bullets: [
              "Giao sai sản phẩm",
              "Sai số lượng",
              "Thiếu sản phẩm",
              "Thiếu chi tiết hoặc phụ kiện",
              "Sản phẩm bị vỡ hoặc hư hỏng bên ngoài",
              "Sản phẩm không đúng với đơn hàng đã xác nhận",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Khách hàng vui lòng liên hệ GamePiece Labs trong vòng 48 giờ kể từ thời điểm nhận hàng.",
              "Việc thông báo sớm giúp GamePiece Labs có đủ cơ sở làm việc với đơn vị vận chuyển và xác minh tình trạng đơn hàng tại thời điểm giao nhận.",
              "Đối với yêu cầu được gửi sau thời hạn trên, GamePiece Labs vẫn có thể tiếp nhận để kiểm tra, tuy nhiên khả năng xác minh nguyên nhân giao nhận có thể bị hạn chế và phương án xử lý sẽ căn cứ vào thông tin, bằng chứng và tình trạng thực tế của sản phẩm.",
            ],
          },
        ],
      },
      {
        title: "Lỗi không thể nhận biết ngay khi nhận hàng",
        number: "8",
        steps: [
          {
            title: "",
            paragraphs: [
              "Mốc 48 giờ quy định tại Chính sách Kiểm hàng chỉ áp dụng đối với những vấn đề có thể nhận biết hợp lý ngay khi nhận hoặc mở kiện hàng.",
              "Đối với lỗi không thể phát hiện ngay tại thời điểm nhận hàng hoặc chỉ biểu hiện trong quá trình sử dụng, khách hàng vui lòng liên hệ GamePiece Labs để được kiểm tra.",
              "Tùy theo loại sản phẩm, nguyên nhân và tình trạng thực tế:",
            ],
            bullets: [
              [
                { text: "Sản phẩm Organizer thuộc diện bảo hành sẽ được xử lý theo " },
                {
                  text: "Chính sách Bảo hành",
                  href: "/privacy/chinh-sach-bao-hanh",
                  strong: true,
                },
                { text: " trong thời hạn bảo hành tương ứng" },
              ],
              [
                { text: "Sản phẩm bán lại sẽ được xem xét theo " },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: " và không mặc nhiên thuộc diện bảo hành, trừ trường hợp sản phẩm đó có chính sách bảo hành được công bố riêng." },
              ],
            ],
          },
          {
            title: "",
            paragraphs: [
              "Việc hết thời hạn 48 giờ không tự động làm mất quyền yêu cầu hỗ trợ đối với những lỗi không thể nhận biết hợp lý ngay tại thời điểm giao nhận.",
            ],
          },
        ],
      },
      {
        title: "Đặc điểm thông thường của sản phẩm Organizer in 3D",
        number: "9",
        steps: [
          {
            title: "",
            paragraphs: [
              "Do đặc tính của quá trình sản xuất bằng công nghệ in 3D, sản phẩm Organizer có thể xuất hiện một số khác biệt nhỏ giữa các lần sản xuất như:",
            ],
            bullets: [
              "Đường lớp in có thể nhìn thấy",
              "Một số dấu vết nhỏ tại vị trí tiếp xúc với support hoặc bề mặt in",
              "Sai khác nhỏ về sắc độ màu giữa các lô vật liệu",
              "Một số khác biệt nhỏ về bề mặt do đặc tính của vật liệu và quá trình in.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Các đặc điểm trên không được xem là lỗi sản phẩm nếu nằm trong giới hạn thông thường của quá trình sản xuất và không ảnh hưởng đáng kể đến khả năng lắp ráp, sử dụng hoặc công năng của sản phẩm.",
              [
                { text: "Nếu sản phẩm có lỗi ảnh hưởng đến việc sử dụng, lắp ráp hoặc không đúng với đơn hàng đã xác nhận, GamePiece Labs sẽ tiếp nhận và kiểm tra theo " },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: "." },
              ],
            ],
          },
        ],
      },
      {
        title: "Trường hợp có thể từ chối yêu cầu liên quan đến kiểm hàng",
        number: "10",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs có thể từ chối hoặc không chịu trách nhiệm đối với phần hư hỏng được xác định phát sinh do:",
            ],
            bullets: [
              "Khách hàng sử dụng sản phẩm không đúng mục đích hoặc hướng dẫn",
              "Khách hàng tự ý sửa chữa, cắt, khoan, gia công hoặc thay đổi sản phẩm",
              "Sản phẩm bị rơi, va đập, chịu nhiệt hoặc chịu tác động bên ngoài sau khi khách hàng đã nhận hàng",
              "Sản phẩm được bảo quản trong điều kiện không phù hợp gây biến dạng hoặc hư hỏng",
              "Các hư hỏng khác có đủ cơ sở xác định không tồn tại tại thời điểm giao hàng và không xuất phát từ GamePiece Labs hoặc quá trình vận chuyển.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Việc từ chối xử lý sẽ dựa trên tình trạng thực tế và các thông tin có thể xác minh, không chỉ dựa vào việc khách hàng có hoặc không có video mở kiện.",
            ],
          },
        ],
      },
      {
        title: "Quy trình thông báo khi phát hiện vấn đề",
        number: "11",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu phát hiện vấn đề, khách hàng vui lòng liên hệ GamePiece Labs và cung cấp các thông tin phù hợp, bao gồm:",
            ],
            bullets: [
              "Thông tin đơn hàng",
              "Tên sản phẩm",
              "Mô tả vấn đề",
              "Hình ảnh sản phẩm",
              "Hình ảnh kiện hàng hoặc bao bì nếu có",
              "Video mở kiện nếu có",
              "Các thông tin khác có liên quan nếu được yêu cầu.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sẽ kiểm tra thông tin và xác định nguyên nhân trước khi đưa ra phương án xử lý.",
              "Trong thời gian chờ xác minh, khách hàng nên giữ nguyên tình trạng sản phẩm và không tự ý sửa chữa hoặc thay đổi sản phẩm nếu việc đó có thể ảnh hưởng đến quá trình xác định nguyên nhân.",
            ],
          },
        ],
      },
      {
        title: "Phương án xử lý",
        number: "12",
        steps: [
          {
            title: "",
            paragraphs: [
              [
                { text: "Nếu vấn đề được xác định thuộc trách nhiệm của GamePiece Labs, sản phẩm sẽ được xử lý theo " },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: " hoặc " },
                {
                  text: "Chính sách Bảo hành",
                  href: "/privacy/chinh-sach-bao-hanh",
                  strong: true,
                },
                { text: " tương ứng." },
              ],
              "Tùy từng trường hợp, phương án có thể bao gồm:",
            ],
            bullets: [
              "Bổ sung sản phẩm hoặc chi tiết còn thiếu",
              "Sửa chữa",
              "Sản xuất lại chi tiết Organizer",
              "Đổi sản phẩm",
              "Các phương án khác được hai bên thống nhất theo chính sách áp dụng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              [
                { text: "Nếu cần gửi lại sản phẩm hoặc gửi sản phẩm thay thế do lỗi thuộc trách nhiệm của GamePiece Labs, chi phí vận chuyển được xử lý theo " },
                {
                  text: "Chính sách Giao hàng",
                  href: "/privacy/chinh-sach-giao-hang",
                  strong: true,
                },
                { text: " và " },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: "." },
              ],
            ],
          },
        ],
      },
      {
        title: "Liên hệ hỗ trợ",
        number: "13",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu phát hiện vấn đề trong quá trình kiểm hàng, khách hàng vui lòng liên hệ GamePiece Labs thông qua các kênh liên hệ chính thức được công bố trên website.",
              "GamePiece Labs sẽ tiếp nhận thông tin, kiểm tra tình trạng thực tế và hướng dẫn khách hàng phương án xử lý phù hợp.",
            ],
          },
        ],
      },
    ],
  },
  "chinh-sach-bao-hanh": {
    title: "Chính sách bảo hành",
    updatedAt: "22/09/2026",
    intro:
      "GamePiece Labs áp dụng chính sách bảo hành đối với sản phẩm Organizer do GamePiece Labs trực tiếp sản xuất. Đối với các sản phẩm bán lại, GamePiece Labs mặc định không áp dụng chính sách bảo hành, trừ trường hợp trang sản phẩm hoặc thông tin được cung cấp tại thời điểm mua hàng có quy định bảo hành cụ thể.",
    sections: [
      {
        title: "Sản phẩm Organizer do GamePiece Labs sản xuất",
        number: "1",
        steps: [
          {
            title: "1.1. Thời hạn bảo hành",
            paragraphs: [
              "Sản phẩm Organizer do GamePiece Labs sản xuất được bảo hành trong vòng 30 ngày kể từ ngày khách hàng nhận sản phẩm.",
              "Thời điểm nhận hàng được xác định dựa trên thông tin giao nhận, trạng thái đơn hàng hoặc các thông tin khác có thể xác minh.",
            ],
          },
          {
            title: "1.2. Phạm vi bảo hành",
            paragraphs: [
              "GamePiece Labs tiếp nhận bảo hành đối với các lỗi được xác định phát sinh từ quá trình sản xuất, bao gồm:",
            ],
            bullets: [
              "Chi tiết bị nứt, gãy hoặc tách lớp do lỗi in",
              "Chi tiết bị biến dạng từ quá trình sản xuất làm ảnh hưởng đến khả năng sử dụng",
              "Sai kích thước do lỗi sản xuất khiến Organizer không thể sử dụng đúng với mục đích đã xác nhận",
              "Các chi tiết không thể lắp ráp đúng do lỗi sản xuất",
              "Các lỗi sản xuất khác ảnh hưởng đáng kể đến khả năng lắp ráp hoặc công năng của sản phẩm.",
            ],
          },
          {
            title: "",
            paragraphs: [
              [
                { text: "Đối với trường hợp giao thiếu chi tiết, sai số lượng hoặc giao sai sản phẩm ngay từ đầu, khách hàng vui lòng thực hiện yêu cầu theo " },
                {
                  text: "Chính sách Kiểm hàng",
                  href: "/privacy/chinh-sach-kiem-hang",
                  strong: true,
                },
                { text: " và " },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: "." },
              ],
              "GamePiece Labs sẽ kiểm tra tình trạng thực tế trước khi xác nhận sản phẩm có thuộc phạm vi bảo hành hay không.",
            ],
          },
        ],
      },
      {
        title: "Đặc điểm thông thường của sản phẩm in 3D",
        number: "2",
        steps: [
          {
            title: "",
            paragraphs: [
              "Do đặc tính của công nghệ in 3D, sản phẩm Organizer có thể xuất hiện:",
            ],
            bullets: [
              "Đường lớp in có thể nhìn thấy",
              "Dấu vết nhỏ tại vị trí support hoặc bề mặt tiếp xúc khi in",
              "Sai khác nhỏ về sắc độ giữa các lô vật liệu",
              "Một số khác biệt nhỏ về bề mặt giữa các lần sản xuất.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Các đặc điểm này không được xem là lỗi bảo hành nếu nằm trong giới hạn thông thường của quá trình sản xuất và không ảnh hưởng đáng kể đến việc lắp ráp, sử dụng hoặc công năng của sản phẩm.",
            ],
          },
        ],
      },
      {
        title: "Các trường hợp không thuộc phạm vi bảo hành Organizer",
        number: "3",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs có thể từ chối bảo hành nếu hư hỏng được xác định phát sinh do:",
            ],
            bullets: [
              "Làm rơi hoặc va đập sản phẩm",
              "Sử dụng lực quá mức gây gãy hoặc biến dạng",
              "Đặt sản phẩm gần nguồn nhiệt hoặc trong môi trường nhiệt độ cao",
              "Để sản phẩm tiếp xúc lâu với điều kiện môi trường không phù hợp gây biến dạng",
              "Sử dụng nước nóng, máy rửa chén hoặc phương pháp vệ sinh có nhiệt độ cao",
              "Sử dụng hóa chất hoặc dung môi làm ảnh hưởng đến vật liệu",
              "Sử dụng sản phẩm không đúng mục đích",
              "Khách hàng tự ý cắt, khoan, mài, gia công hoặc thay đổi cấu trúc sản phẩm",
              "Khách hàng hoặc bên thứ ba tự sửa chữa sản phẩm",
              "Hao mòn hoặc thay đổi ngoại quan thông thường trong quá trình sử dụng",
              "Các tác động bên ngoài khác không xuất phát từ quá trình sản xuất của GamePiece Labs.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Việc từ chối bảo hành sẽ dựa trên tình trạng thực tế và các thông tin có thể xác minh.",
            ],
          },
        ],
      },
      {
        title: "Phương án bảo hành Organizer",
        number: "4",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu sản phẩm được xác nhận thuộc phạm vi bảo hành, GamePiece Labs sẽ căn cứ vào tình trạng thực tế để lựa chọn phương án phù hợp.",
              "GamePiece Labs ưu tiên:",
            ],
            bullets: [
              "Sửa chữa hoặc khắc phục chi tiết bị lỗi",
              "Sản xuất lại chi tiết bị lỗi",
              "Đổi sản phẩm hoặc bộ phận tương ứng nếu cần thiết.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Nếu chỉ một chi tiết của Organizer bị lỗi và việc thay thế chi tiết đó có thể khắc phục đầy đủ vấn đề, GamePiece Labs có thể sản xuất và thay thế riêng chi tiết bị lỗi thay vì thay thế toàn bộ Organizer.",
              "GamePiece Labs sẽ thông báo cho khách hàng về phương án và thời gian xử lý dự kiến sau khi tiếp nhận và kiểm tra yêu cầu bảo hành.",
              "Trong thời gian thực hiện bảo hành, GamePiece Labs và khách hàng có thể thống nhất phương án hỗ trợ phù hợp tùy theo tính chất sản phẩm.",
            ],
          },
        ],
      },
      {
        title: "Trường hợp không thể khắc phục lỗi",
        number: "5",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu hết thời gian xử lý bảo hành đã thông báo mà GamePiece Labs không thể sửa chữa hoặc khắc phục lỗi, hoặc sản phẩm đã được thực hiện bảo hành từ 03 lần trở lên trong thời hạn bảo hành mà vẫn không khắc phục được lỗi, GamePiece Labs sẽ thực hiện phương án xử lý phù hợp theo quy định, bao gồm:",
            ],
            bullets: [
              "Đổi sản phẩm hoặc bộ phận mới tương ứng",
              "Thu hồi sản phẩm và hoàn lại khoản thanh toán tương ứng nếu không thể cung cấp sản phẩm thay thế phù hợp.",
            ],
          },
        ],
      },
      {
        title: "Chi phí bảo hành Organizer",
        number: "6",
        steps: [
          {
            title: "",
            paragraphs: [
              "Đối với sản phẩm được xác nhận thuộc phạm vi bảo hành, GamePiece Labs chịu các chi phí sửa chữa và chi phí vận chuyển cần thiết liên quan đến quá trình bảo hành.",
              "Khách hàng vui lòng liên hệ GamePiece Labs trước khi gửi sản phẩm để được hướng dẫn phương thức vận chuyển.",
              "Khách hàng không nên tự ý gửi sản phẩm về GamePiece Labs trước khi có xác nhận.",
              "Nếu sau khi kiểm tra xác định sản phẩm không thuộc phạm vi bảo hành và hư hỏng phát sinh từ việc sử dụng, bảo quản hoặc tác động từ phía khách hàng, GamePiece Labs sẽ thông báo tình trạng và các chi phí có thể phát sinh trước khi thực hiện bất kỳ dịch vụ sửa chữa nào.",
            ],
          },
        ],
      },
      {
        title: "Thời hạn bảo hành sau khi sửa chữa hoặc thay thế",
        number: "7",
        steps: [
          {
            title: "",
            paragraphs: [
              "Thời gian GamePiece Labs thực hiện bảo hành không được tính vào thời hạn bảo hành còn lại của sản phẩm.",
              "Nếu GamePiece Labs thay thế một chi tiết hoặc bộ phận mới trong quá trình bảo hành, thời hạn bảo hành của chi tiết hoặc bộ phận được thay thế được tính lại từ thời điểm thay thế theo quy định áp dụng.",
              "Nếu toàn bộ sản phẩm được đổi mới, thời hạn bảo hành của sản phẩm mới được tính lại từ thời điểm khách hàng nhận sản phẩm thay thế.",
            ],
          },
        ],
      },
      {
        title: "Sản phẩm bán lại",
        number: "8",
        steps: [
          {
            title: "",
            paragraphs: [
              "Các sản phẩm bán lại do GamePiece Labs phân phối hoặc kinh doanh không áp dụng chính sách bảo hành của GamePiece Labs, trừ trường hợp sản phẩm có chính sách bảo hành được công bố riêng hoặc thuộc trường hợp pháp luật quy định bắt buộc bảo hành.",
              "Việc sản phẩm bán lại không áp dụng bảo hành không làm mất quyền yêu cầu hỗ trợ của khách hàng đối với các trường hợp:",
            ],
            bullets: [
              "GamePiece Labs giao sai sản phẩm",
              "Giao sai số lượng",
              "Thiếu sản phẩm hoặc phụ kiện",
              "Sản phẩm bị hư hỏng hoặc có lỗi tại thời điểm giao nhận",
              "Sản phẩm không đúng với thông tin hoặc đơn hàng đã được xác nhận.",
            ],
          },
          {
            title: "",
            paragraphs: [
              [
                { text: "Các trường hợp này được xử lý theo " },
                {
                  text: "Chính sách Kiểm hàng",
                  href: "/privacy/chinh-sach-kiem-hang",
                  strong: true,
                },
                { text: " và " },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: "." },
              ],
              "Đối với lỗi hoặc hư hỏng phát sinh sau khi sản phẩm đã được giao đúng, không có lỗi tại thời điểm giao nhận và không thuộc trách nhiệm của GamePiece Labs, sản phẩm bán lại không thuộc phạm vi bảo hành của GamePiece Labs.",
              "Nếu một sản phẩm bán lại cụ thể có chính sách bảo hành của nhà sản xuất, nhà phân phối hoặc GamePiece Labs, thông tin bảo hành sẽ được công bố riêng cho sản phẩm đó và được áp dụng theo nội dung đã công bố.",
            ],
          },
        ],
      },
      {
        title: "Mối quan hệ với thời hạn kiểm hàng",
        number: "9",
        steps: [
          {
            title: "",
            paragraphs: [
              [
                { text: "Thời hạn 48 giờ trong " },
                {
                  text: "Chính sách Kiểm hàng",
                  href: "/privacy/chinh-sach-kiem-hang",
                  strong: true,
                },
                { text: " được áp dụng đối với những vấn đề có thể nhận biết hợp lý ngay khi nhận hoặc mở kiện hàng, chẳng hạn như:" },
              ],
            ],
            bullets: [
              "Giao sai sản phẩm",
              "Sai số lượng",
              "Thiếu sản phẩm",
              "Vỡ hoặc hư hỏng bên ngoài khi nhận hàng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Đối với Organizer có lỗi sản xuất không thể nhận biết ngay tại thời điểm nhận hàng, khách hàng có thể yêu cầu bảo hành trong thời hạn bảo hành 30 ngày.",
              "Hai thời hạn trên được áp dụng cho hai mục đích khác nhau.",
            ],
          },
        ],
      },
      {
        title: "Quy trình yêu cầu bảo hành",
        number: "10",
        steps: [
          {
            title: "Bước 1 - Liên hệ GamePiece Labs",
            paragraphs: [
              "Khách hàng liên hệ GamePiece Labs thông qua các kênh hỗ trợ chính thức.",
            ],
          },
          {
            title: "Bước 2 - Cung cấp thông tin",
            paragraphs: ["Khách hàng cung cấp:"],
            bullets: [
              "Thông tin đơn hàng",
              "Tên sản phẩm",
              "Mô tả lỗi",
              "Hình ảnh hoặc video thể hiện tình trạng sản phẩm nếu có",
              "Các thông tin hợp lý khác cần thiết để xác minh.",
            ],
          },
          {
            title: "Bước 3 - Tiếp nhận và kiểm tra",
            paragraphs: [
              "Sau khi tiếp nhận yêu cầu bảo hành, GamePiece Labs sẽ cung cấp cho khách hàng xác nhận tiếp nhận bảo hành bằng email, tin nhắn hoặc hình thức tương đương, trong đó thể hiện sản phẩm được tiếp nhận và thời gian xử lý dự kiến.",
              "Nếu cần kiểm tra trực tiếp, GamePiece Labs sẽ hướng dẫn khách hàng gửi sản phẩm hoặc chi tiết cần kiểm tra.",
            ],
          },
          {
            title: "Bước 4 - Thông báo kết quả",
            paragraphs: [
              "Sau khi kiểm tra, GamePiece Labs sẽ thông báo:",
            ],
            bullets: [
              "Sản phẩm có thuộc phạm vi bảo hành hay không",
              "Nguyên nhân được xác định",
              "Phương án xử lý",
              "Thời gian xử lý dự kiến.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs không thực hiện dịch vụ có phát sinh chi phí cho khách hàng khi chưa thông báo và được khách hàng xác nhận.",
            ],
          },
        ],
      },
      {
        title: "Sản phẩm Organizer hết thời hạn bảo hành",
        number: "11",
        steps: [
          {
            title: "",
            paragraphs: [
              "Sau khi hết thời hạn bảo hành, khách hàng vẫn có thể liên hệ GamePiece Labs để được kiểm tra khả năng:",
            ],
            bullets: [
              "Sửa chữa",
              "Sản xuất lại chi tiết",
              "Mua chi tiết thay thế",
              "Hoặc sử dụng các phương án hỗ trợ khác nếu có.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Nếu phát sinh chi phí, GamePiece Labs sẽ thông báo trước để khách hàng quyết định.",
            ],
          },
        ],
      },
      {
        title: "Liên hệ bảo hành",
        number: "12",
        steps: [
          {
            title: "",
            paragraphs: [
              "Khách hàng có nhu cầu bảo hành vui lòng liên hệ GamePiece Labs thông qua các kênh liên hệ chính thức được công bố trên website.",
              "GamePiece Labs sẽ tiếp nhận, kiểm tra và hướng dẫn phương án xử lý phù hợp với tình trạng thực tế của sản phẩm.",
            ],
          },
        ],
      },
    ],
  },
  "chinh-sach-bao-mat": {
    title: "Chính sách bảo mật & cookie",
    updatedAt: "22/09/2026",
    intro:
      "GamePiece Labs tôn trọng quyền riêng tư của người truy cập website và minh bạch về việc thu thập, sử dụng và xử lý thông tin khi người dùng sử dụng website. Website GamePiece Labs hiện không cung cấp chức năng đăng ký tài khoản, đăng nhập hoặc thanh toán trực tuyến.",
    sections: [
      {
        title: "Tổng quan về website",
        number: "",
        steps: [
          {
            title: "",
            paragraphs: ["Website có:"],
            bullets: [
              "Biểu mẫu liên hệ cho phép người dùng gửi tin nhắn đến GamePiece Labs",
              "Google Analytics để phân tích hoạt động website",
              "Meta Pixel để đo lường hoạt động marketing và quảng cáo",
              "Các liên kết dẫn đến Facebook Fanpage của GamePiece Labs.",
            ],
          },
        ],
      },
      {
        title: "Thông tin người dùng cung cấp qua biểu mẫu liên hệ",
        number: "1",
        steps: [
          {
            title: "",
            paragraphs: [
              "Khi người dùng chủ động sử dụng biểu mẫu liên hệ trên website, GamePiece Labs có thể nhận các thông tin mà người dùng nhập vào biểu mẫu, bao gồm:",
            ],
            bullets: [
              "Địa chỉ email",
              "Nội dung tin nhắn",
              "Các thông tin khác mà người dùng chủ động cung cấp trong nội dung tin nhắn.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Nếu biểu mẫu trong tương lai bổ sung thêm các trường thông tin khác, Chính sách này sẽ được cập nhật tương ứng.",
              "GamePiece Labs không yêu cầu người dùng cung cấp thông qua biểu mẫu liên hệ:",
            ],
            bullets: [
              "Mật khẩu",
              "Mã OTP",
              "Thông tin đăng nhập ngân hàng",
              "Thông tin thẻ thanh toán",
              "Các thông tin bảo mật tài chính tương tự.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Người dùng không nên gửi các thông tin nhạy cảm hoặc thông tin không cần thiết thông qua biểu mẫu liên hệ.",
            ],
          },
        ],
      },
      {
        title: "Mục đích sử dụng thông tin từ biểu mẫu",
        number: "2",
        steps: [
          {
            title: "",
            paragraphs: [
              "Thông tin được người dùng gửi qua biểu mẫu chỉ được sử dụng cho các mục đích phù hợp với nội dung liên hệ, bao gồm:",
            ],
            bullets: [
              "Tiếp nhận và phản hồi câu hỏi của người dùng",
              "Tư vấn về sản phẩm",
              "Hỗ trợ các yêu cầu liên quan đến sản phẩm hoặc dịch vụ",
              "Liên hệ lại với người dùng khi cần thiết để xử lý yêu cầu",
              "Hỗ trợ xử lý các vấn đề liên quan đến đơn hàng nếu người dùng chủ động cung cấp thông tin tương ứng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Thông tin được gửi thông qua biểu mẫu liên hệ không mặc nhiên được sử dụng để gửi quảng cáo, newsletter hoặc nội dung marketing trực tiếp nếu người dùng chưa có lựa chọn hoặc sự đồng ý phù hợp cho mục đích đó.",
            ],
          },
        ],
      },
      {
        title: "Cách biểu mẫu liên hệ hoạt động",
        number: "3",
        steps: [
          {
            title: "",
            paragraphs: [
              "Khi người dùng gửi biểu mẫu, thông tin được nhập sẽ được chuyển đến hộp thư điện tử mà GamePiece Labs sử dụng để tiếp nhận yêu cầu khách hàng.",
              "Quá trình gửi email có thể được thực hiện thông qua:",
            ],
            bullets: [
              "Hạ tầng website",
              "Nhà cung cấp hosting",
              "Dịch vụ gửi email",
              "Hoặc nhà cung cấp dịch vụ kỹ thuật khác được GamePiece Labs sử dụng để chuyển nội dung biểu mẫu đến hộp thư.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Các nhà cung cấp liên quan chỉ nên được sử dụng trong phạm vi cần thiết để truyền tải và vận hành chức năng liên hệ.",
            ],
          },
        ],
      },
      {
        title: "Dữ liệu kỹ thuật và hoạt động trên website",
        number: "4",
        steps: [
          {
            title: "",
            paragraphs: [
              "Ngoài thông tin người dùng chủ động gửi thông qua biểu mẫu, các công cụ phân tích hoặc đo lường trên website có thể xử lý một số dữ liệu kỹ thuật và dữ liệu sử dụng như:",
            ],
            bullets: [
              "Trang được truy cập",
              "Thời gian và thời lượng truy cập",
              "Nguồn truy cập",
              "Các thao tác hoặc tương tác trên website",
              "Loại thiết bị",
              "Trình duyệt",
              "Hệ điều hành",
              "Kích thước hoặc độ phân giải màn hình",
              "Vị trí địa lý ở mức gần đúng",
              "Cookie hoặc mã định danh kỹ thuật",
              "Các dữ liệu kỹ thuật cần thiết cho hoạt động phân tích và đo lường.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs không chủ động cấu hình Google Analytics hoặc Meta Pixel để thu thập nội dung tin nhắn, địa chỉ email hoặc các thông tin người dùng nhập trực tiếp vào biểu mẫu liên hệ.",
            ],
          },
        ],
      },
      {
        title: "Google Analytics",
        number: "5",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sử dụng Google Analytics nhằm hiểu cách người dùng truy cập và tương tác với website.",
              "Google Analytics có thể được sử dụng để thống kê các thông tin như:",
            ],
            bullets: [
              "Số lượng người truy cập",
              "Số phiên truy cập",
              "Các trang được xem",
              "Nguồn truy cập",
              "Thiết bị và trình duyệt",
              "Vị trí địa lý gần đúng",
              "Các sự kiện tương tác trên website.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Google Analytics có thể sử dụng cookie như _ga để phân biệt người dùng và phiên truy cập.",
              "GamePiece Labs sử dụng các thông tin phân tích này nhằm:",
            ],
            bullets: [
              "Đánh giá hiệu quả của website",
              "Hiểu nội dung và sản phẩm được quan tâm",
              "Phát hiện vấn đề trong trải nghiệm sử dụng",
              "Cải thiện giao diện và nội dung",
              "Đánh giá hiệu quả của các nguồn truy cập.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs không cố gắng sử dụng dữ liệu Analytics để xác định danh tính cụ thể của từng người truy cập.",
            ],
          },
        ],
      },
      {
        title: "Meta Pixel",
        number: "6",
        steps: [
          {
            title: "",
            paragraphs: [
              "Website có thể sử dụng Meta Pixel để đo lường hiệu quả của hoạt động quảng cáo và marketing.",
              "Meta Pixel có thể ghi nhận các sự kiện như:",
            ],
            bullets: [
              "Truy cập website",
              "Xem một trang hoặc sản phẩm",
              "Nhấp vào một số nút hoặc liên kết",
              "Chuyển từ website sang các kênh của GamePiece Labs",
              "Các sự kiện đo lường khác được GamePiece Labs cấu hình.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Thông tin này có thể được gửi đến Meta và được Meta xử lý theo các điều khoản và chính sách của Meta.",
              "GamePiece Labs có thể sử dụng dữ liệu này để:",
            ],
            bullets: [
              "Đánh giá hiệu quả quảng cáo",
              "Hiểu nguồn truy cập",
              "Đo lường mức độ tương tác",
              "Cải thiện hoạt động marketing.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs không chủ động gửi nội dung tin nhắn hoặc dữ liệu người dùng nhập trong biểu mẫu liên hệ sang Meta Pixel.",
            ],
          },
        ],
      },
      {
        title: "Cookie",
        number: "7",
        steps: [
          {
            title: "",
            paragraphs: [
              "Cookie là các tệp hoặc dữ liệu nhỏ được sử dụng trên thiết bị hoặc trình duyệt nhằm hỗ trợ hoạt động của website và các dịch vụ liên quan.",
              "Website GamePiece Labs có thể sử dụng các nhóm cookie sau:",
            ],
          },
          {
            title: "Cookie cần thiết",
            paragraphs: [
              "Được sử dụng để hỗ trợ các chức năng kỹ thuật cần thiết của website.",
              "Các cookie này không được sử dụng cho mục đích quảng cáo.",
            ],
          },
          {
            title: "Cookie phân tích",
            paragraphs: [
              "Được sử dụng cho các công cụ như Google Analytics nhằm giúp GamePiece Labs hiểu cách người dùng sử dụng website.",
            ],
          },
          {
            title: "Cookie quảng cáo và marketing",
            paragraphs: [
              "Được sử dụng cùng Meta Pixel hoặc các công nghệ tương tự nhằm đo lường hiệu quả quảng cáo và hoạt động marketing.",
              "Các cookie hoặc công nghệ không cần thiết chỉ được kích hoạt phù hợp với lựa chọn của người dùng khi sự đồng ý được yêu cầu.",
            ],
          },
        ],
      },
      {
        title: "Lựa chọn cookie",
        number: "8",
        steps: [
          {
            title: "",
            paragraphs: [
              "Khi truy cập website, người dùng có thể được cung cấp công cụ quản lý cookie.",
              "Người dùng có thể:",
            ],
            bullets: [
              "Chấp nhận cookie phân tích và marketing",
              "Từ chối cookie không cần thiết",
              "Thay đổi lựa chọn theo từng nhóm cookie khi website hỗ trợ chức năng này.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Việc từ chối cookie phân tích hoặc marketing không ngăn người dùng sử dụng các nội dung và chức năng cơ bản của website.",
              "GamePiece Labs không xem việc người dùng im lặng hoặc tiếp tục truy cập website là sự đồng ý mặc nhiên đối với các cookie không cần thiết trong trường hợp cần có sự đồng ý.",
              "Người dùng cũng có thể quản lý hoặc xóa cookie thông qua cài đặt của trình duyệt.",
            ],
          },
        ],
      },
      {
        title: "Chia sẻ và xử lý dữ liệu bởi bên thứ ba",
        number: "9",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs không bán thông tin cá nhân của người dùng.",
              "Dữ liệu có thể được xử lý bởi các bên cung cấp dịch vụ cần thiết cho việc vận hành website, bao gồm:",
            ],
            bullets: [
              "Google thông qua Google Analytics",
              "Meta thông qua Meta Pixel",
              "Nhà cung cấp hosting hoặc CDN",
              "Nhà cung cấp dịch vụ email hoặc dịch vụ được sử dụng để chuyển biểu mẫu liên hệ đến hộp thư GamePiece Labs",
              "Các nhà cung cấp hạ tầng kỹ thuật khác khi cần thiết.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Việc chia sẻ hoặc xử lý chỉ nên giới hạn trong phạm vi cần thiết cho mục đích vận hành website, tiếp nhận liên hệ, phân tích hoặc marketing tương ứng.",
              "Các bên cung cấp dịch vụ có thể áp dụng các điều khoản và chính sách bảo mật riêng.",
            ],
          },
        ],
      },
      {
        title: "Liên kết đến Facebook Fanpage",
        number: "10",
        steps: [
          {
            title: "",
            paragraphs: [
              "Website GamePiece Labs có thể chứa liên kết hoặc nút dẫn đến Facebook Fanpage.",
              "Khi người dùng chuyển sang Facebook, hoạt động trên nền tảng đó chịu sự điều chỉnh bởi các điều khoản và chính sách quyền riêng tư của Meta.",
              "Nếu người dùng chủ động gửi thông tin cho GamePiece Labs thông qua Facebook Fanpage, GamePiece Labs có thể sử dụng thông tin đó để:",
            ],
            bullets: [
              "Tư vấn sản phẩm",
              "Tiếp nhận yêu cầu mua hàng",
              "Xử lý đơn hàng",
              "Hỗ trợ khách hàng",
              "Giải quyết các vấn đề mà người dùng chủ động yêu cầu.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Các thông tin được gửi trực tiếp qua Facebook không được thu thập thông qua biểu mẫu của website GamePiece Labs.",
            ],
          },
        ],
      },
      {
        title: "Thời gian lưu trữ",
        number: "11",
        steps: [
          {
            title: "",
            paragraphs: [
              "Thông tin từ biểu mẫu liên hệ có thể được lưu trong hộp thư của GamePiece Labs trong khoảng thời gian cần thiết để:",
            ],
            bullets: [
              "Phản hồi yêu cầu",
              "Tiếp tục trao đổi với người dùng",
              "Xử lý vấn đề liên quan",
              "Phục vụ nhu cầu lưu trữ hợp lý hoặc nghĩa vụ áp dụng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs không chủ động lưu giữ dữ liệu cá nhân lâu hơn mức cần thiết cho mục đích mà dữ liệu được thu thập, trừ trường hợp cần lưu theo yêu cầu pháp luật hoặc để giải quyết vấn đề đang tồn tại.",
              "Dữ liệu từ Google Analytics, Meta Pixel và các nền tảng bên thứ ba được lưu theo cấu hình của GamePiece Labs và cơ chế lưu trữ của từng nhà cung cấp dịch vụ.",
            ],
          },
        ],
      },
      {
        title: "Bảo vệ thông tin",
        number: "12",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs áp dụng các biện pháp hợp lý nhằm hạn chế:",
            ],
            bullets: [
              "Truy cập trái phép",
              "Sử dụng trái phép",
              "Tiết lộ trái phép",
              "Mất mát hoặc thay đổi dữ liệu thuộc quyền kiểm soát của GamePiece Labs.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Quyền truy cập vào hộp thư tiếp nhận biểu mẫu và các hệ thống liên quan nên được giới hạn cho những cá nhân cần thiết để xử lý yêu cầu của người dùng.",
              "Không có phương thức truyền hoặc lưu trữ dữ liệu trên Internet nào có thể được đảm bảo an toàn tuyệt đối. Vì vậy, GamePiece Labs không cam kết rằng mọi rủi ro bảo mật có thể được loại bỏ hoàn toàn.",
            ],
          },
        ],
      },
      {
        title: "Quyền và lựa chọn của người dùng",
        number: "13",
        steps: [
          {
            title: "",
            paragraphs: [
              "Trong phạm vi áp dụng, người dùng có thể liên hệ GamePiece Labs để:",
            ],
            bullets: [
              "Hỏi về việc xử lý thông tin đã cung cấp",
              "Yêu cầu chỉnh sửa thông tin không chính xác",
              "Yêu cầu xóa thông tin khi phù hợp",
              "Rút lại lựa chọn hoặc sự đồng ý đã cung cấp khi áp dụng",
              "Điều chỉnh lựa chọn liên quan đến cookie",
              "Thực hiện các quyền khác theo quy định pháp luật áp dụng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Một số dữ liệu được Google, Meta hoặc nhà cung cấp dịch vụ khác trực tiếp kiểm soát có thể cần được quản lý thông qua công cụ hoặc cài đặt của chính nền tảng đó.",
              "GamePiece Labs có thể yêu cầu thông tin phù hợp để xác minh yêu cầu trước khi thực hiện thay đổi liên quan đến dữ liệu.",
            ],
          },
        ],
      },
      {
        title: "Thay đổi Chính sách Bảo mật & Cookie",
        number: "14",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs có thể cập nhật Chính sách này khi:",
            ],
            bullets: [
              "Website bổ sung chức năng",
              "Thay đổi nội dung biểu mẫu liên hệ",
              "Bổ sung tài khoản người dùng hoặc thanh toán trực tuyến",
              "Thay đổi công cụ phân tích hoặc marketing",
              "Thay đổi nhà cung cấp dịch vụ",
              "Thay đổi hoạt động xử lý dữ liệu",
              "Có yêu cầu mới từ quy định pháp luật áp dụng.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Ngày cập nhật mới nhất sẽ được hiển thị tại đầu Chính sách.",
            ],
          },
        ],
      },
      {
        title: "Liên hệ",
        number: "15",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu có câu hỏi hoặc yêu cầu liên quan đến quyền riêng tư, cookie hoặc thông tin đã gửi qua website, người dùng có thể liên hệ GamePiece Labs thông qua:",
            ],
            bullets: [
              "Biểu mẫu liên hệ trên website",
              "Email chính thức của GamePiece Labs",
              "Facebook Fanpage chính thức của GamePiece Labs.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs sẽ tiếp nhận và xử lý yêu cầu dựa trên nội dung và thông tin được cung cấp.",
            ],
          },
        ],
      },
    ],
  },
  "dieu-khoan-su-dung": {
    title: "Điều khoản sử dụng",
    updatedAt: "22/09/2026",
    intro:
      "Điều khoản này quy định việc truy cập, sử dụng website GamePiece Labs và các nguyên tắc chung áp dụng khi khách hàng tìm hiểu, liên hệ hoặc thực hiện giao dịch với GamePiece Labs. Khi sử dụng website hoặc thực hiện giao dịch với GamePiece Labs, khách hàng vui lòng đọc các Điều khoản này cùng với những chính sách liên quan được công bố trên website.",
    sections: [
      {
        title: "Phạm vi áp dụng",
        number: "1",
        steps: [
          {
            title: "",
            paragraphs: ["Điều khoản này áp dụng đối với:"],
            bullets: [
              "Người truy cập website GamePiece Labs",
              "Khách hàng liên hệ với GamePiece Labs thông qua website hoặc các kênh chính thức",
              "Khách hàng mua sản phẩm Organizer do GamePiece Labs sản xuất",
              "Khách hàng mua các sản phẩm do GamePiece Labs phân phối hoặc bán lại.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Tùy từng giao dịch, các chính sách sau có thể được áp dụng đồng thời:",
            ],
            bullets: [
              [
                {
                  text: "Chính sách Thanh toán",
                  href: "/privacy/chinh-sach-thanh-toan",
                  strong: true,
                },
              ],
              [
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
              ],
              [
                {
                  text: "Chính sách Giao hàng",
                  href: "/privacy/chinh-sach-giao-hang",
                  strong: true,
                },
              ],
              [
                {
                  text: "Chính sách Kiểm hàng",
                  href: "/privacy/chinh-sach-kiem-hang",
                  strong: true,
                },
              ],
              [
                {
                  text: "Chính sách Bảo hành",
                  href: "/privacy/chinh-sach-bao-hanh",
                  strong: true,
                },
              ],
              [
                {
                  text: "Chính sách Bảo mật & Cookie",
                  href: "/privacy/chinh-sach-bao-mat",
                  strong: true,
                },
              ],
            ],
          },
          {
            title: "",
            paragraphs: [
              "Các chính sách trên là một phần trong các điều kiện giao dịch được GamePiece Labs công bố cho khách hàng.",
            ],
          },
        ],
      },
      {
        title: "Thông tin trên website",
        number: "2",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs cố gắng cung cấp thông tin sản phẩm chính xác và cập nhật, bao gồm:",
            ],
            bullets: [
              "Tên sản phẩm",
              "Hình ảnh",
              "Mô tả",
              "Đặc điểm",
              "Giá hoặc thông tin báo giá nếu có",
              "Tình trạng sản phẩm",
              "Các thông tin liên quan khác.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Tuy nhiên, hình ảnh hiển thị trên website có thể có khác biệt nhỏ so với sản phẩm thực tế do:",
            ],
            bullets: [
              "Thiết bị hiển thị",
              "Điều kiện ánh sáng",
              "Sắc độ vật liệu",
              "Đặc tính của quá trình sản xuất",
              "Các yếu tố kỹ thuật khác.",
            ],
          },
          {
            title: "",
            paragraphs: [
              [
                { text: "Đối với sản phẩm Organizer in 3D, một số đặc điểm bề mặt thông thường của công nghệ in 3D được áp dụng theo " },
                {
                  text: "Chính sách Bảo hành",
                  href: "/privacy/chinh-sach-bao-hanh",
                  strong: true,
                },
                { text: " và " },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: "." },
              ],
              "Nếu phát hiện thông tin sản phẩm trên website có sai sót đáng kể, GamePiece Labs sẽ cập nhật hoặc thông báo cho khách hàng khi phù hợp.",
            ],
          },
        ],
      },
      {
        title: "Giá sản phẩm",
        number: "3",
        steps: [
          {
            title: "",
            paragraphs: [
              "Giá hiển thị trên website, nếu có, được áp dụng theo thông tin tại thời điểm công bố và có thể được cập nhật trong tương lai.",
              "Đối với những sản phẩm cần xác nhận giá trước khi sản xuất hoặc giao hàng, mức giá được GamePiece Labs và khách hàng xác nhận cho đơn hàng cụ thể sẽ là mức giá áp dụng cho đơn hàng đó.",
              "Sau khi đơn hàng và mức giá đã được xác nhận, GamePiece Labs không tự ý thay đổi giá của đơn hàng đã xác nhận, trừ khi:",
            ],
            bullets: [
              "Khách hàng yêu cầu thay đổi sản phẩm, mẫu, số lượng hoặc nội dung đơn hàng",
              "Phát sinh yêu cầu mới làm thay đổi chi phí",
              "Hai bên thống nhất điều chỉnh.",
            ],
          },
          {
            title: "",
            paragraphs: ["Mọi chi phí bổ sung sẽ được thông báo trước cho khách hàng."],
          },
        ],
      },
      {
        title: "Xác nhận đơn hàng",
        number: "4",
        steps: [
          {
            title: "",
            paragraphs: [
              "Website GamePiece Labs hiện không cung cấp chức năng thanh toán trực tuyến hoàn chỉnh.",
              "Khách hàng có thể được chuyển đến các kênh liên hệ chính thức của GamePiece Labs để:",
            ],
            bullets: [
              "Hỏi thông tin sản phẩm",
              "Xác nhận tình trạng sản phẩm",
              "Nhận báo giá",
              "Xác nhận đơn hàng",
              "Trao đổi thông tin liên quan đến giao dịch.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Một đơn hàng chỉ được xem là đã xác nhận khi GamePiece Labs và khách hàng đã thống nhất các thông tin cần thiết của đơn hàng.",
              [
                { text: "Đối với sản phẩm Organizer áp dụng đặt cọc, đơn hàng được xác nhận theo các điều kiện tại " },
                {
                  text: "Chính sách Thanh toán",
                  href: "/privacy/chinh-sach-thanh-toan",
                  strong: true,
                },
                { text: "." },
              ],
            ],
          },
        ],
      },
      {
        title: "Sản phẩm Organizer",
        number: "5",
        steps: [
          {
            title: "",
            paragraphs: [
              "Organizer là sản phẩm được GamePiece Labs trực tiếp sản xuất.",
              "Khách hàng có trách nhiệm kiểm tra các thông tin của đơn hàng trước khi xác nhận, bao gồm khi áp dụng:",
            ],
            bullets: [
              "Mẫu sản phẩm",
              "Phiên bản",
              "Số lượng",
              "Màu sắc",
              "Giá",
              "Các thông tin khác được hai bên xác nhận.",
            ],
          },
          {
            title: "",
            paragraphs: [
              [
                { text: "Sau khi khách hàng đã thanh toán khoản đặt cọc, việc hủy hoặc thay đổi đơn hàng được thực hiện theo " },
                {
                  text: "Chính sách Thanh toán",
                  href: "/privacy/chinh-sach-thanh-toan",
                  strong: true,
                },
                { text: "." },
              ],
              "Các vấn đề liên quan đến lỗi sản xuất, bảo hành, đổi trả hoặc sản phẩm không đúng đơn hàng được xử lý theo các chính sách tương ứng của GamePiece Labs.",
            ],
          },
        ],
      },
      {
        title: "Sản phẩm bán lại",
        number: "6",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs có thể kinh doanh hoặc phân phối các sản phẩm không do GamePiece Labs trực tiếp sản xuất.",
              "Đối với nhóm sản phẩm này:",
            ],
            bullets: [
              "Thông tin sản phẩm được cung cấp dựa trên thông tin mà GamePiece Labs có tại thời điểm đăng tải",
              [
                {
                  text: "Chính sách đổi trả được áp dụng theo ",
                },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
              ],
              "Sản phẩm mặc định không áp dụng bảo hành của GamePiece Labs, trừ trường hợp có thông tin bảo hành riêng được công bố cho sản phẩm đó.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Việc sản phẩm không có bảo hành không loại trừ trách nhiệm xử lý đối với trường hợp giao sai, giao thiếu, sản phẩm có lỗi tại thời điểm giao nhận hoặc không đúng với nội dung đã xác nhận.",
            ],
          },
        ],
      },
      {
        title: "Thanh toán",
        number: "7",
        steps: [
          {
            title: "",
            paragraphs: [
              [
                { text: "Phương thức, quy trình thanh toán, khoản đặt cọc và các điều kiện liên quan được quy định tại " },
                {
                  text: "Chính sách Thanh toán",
                  href: "/privacy/chinh-sach-thanh-toan",
                  strong: true,
                },
                { text: "." },
              ],
              "Khách hàng có trách nhiệm kiểm tra:",
            ],
            bullets: [
              "Số tiền",
              "Thông tin người nhận",
              "Nội dung chuyển khoản",
              "Thông tin đơn hàng",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Trước khi thực hiện thanh toán.",
              "GamePiece Labs không yêu cầu khách hàng cung cấp mật khẩu ngân hàng, mã OTP hoặc thông tin bảo mật tương tự.",
            ],
          },
        ],
      },
      {
        title: "Giao hàng",
        number: "8",
        steps: [
          {
            title: "",
            paragraphs: [
              [
                { text: "Việc giao hàng được thực hiện theo " },
                {
                  text: "Chính sách Giao hàng",
                  href: "/privacy/chinh-sach-giao-hang",
                  strong: true,
                },
                { text: " của GamePiece Labs." },
              ],
              "Khách hàng có trách nhiệm cung cấp thông tin giao nhận chính xác.",
              "Các vấn đề liên quan đến:",
            ],
            bullets: [
              "Phí vận chuyển",
              "Giao hàng không thành công",
              "Giao lại",
              "Thất lạc",
              "Hư hỏng trong quá trình vận chuyển",
            ],
          },
          {
            title: "",
            paragraphs: [
              [
                { text: "Được xử lý theo " },
                {
                  text: "Chính sách Giao hàng",
                  href: "/privacy/chinh-sach-giao-hang",
                  strong: true,
                },
                { text: " và các chính sách liên quan." },
              ],
            ],
          },
        ],
      },
      {
        title: "Đổi trả, hoàn tiền và bảo hành",
        number: "9",
        steps: [
          {
            title: "",
            paragraphs: [
              [
                { text: "Quyền và điều kiện đổi trả hoặc hoàn tiền được thực hiện theo " },
                {
                  text: "Chính sách Đổi trả & Hoàn tiền",
                  href: "/privacy/chinh-sach-doi-tra-hoan-tien",
                  strong: true,
                },
                { text: "." },
              ],
              [
                { text: "Sản phẩm Organizer thuộc phạm vi bảo hành được xử lý theo " },
                {
                  text: "Chính sách Bảo hành",
                  href: "/privacy/chinh-sach-bao-hanh",
                  strong: true,
                },
                { text: "." },
              ],
              "Các sản phẩm bán lại mặc định không có bảo hành, trừ trường hợp sản phẩm cụ thể có chính sách bảo hành được công bố riêng.",
              "Không có nội dung nào trong Điều khoản này được hiểu là loại trừ những trách nhiệm của GamePiece Labs mà pháp luật bắt buộc phải thực hiện.",
            ],
          },
        ],
      },
      {
        title: "Quyền sở hữu nội dung website",
        number: "10",
        steps: [
          {
            title: "",
            paragraphs: [
              "Trừ trường hợp được ghi chú khác, các nội dung do GamePiece Labs tạo và sở hữu trên website có thể bao gồm:",
            ],
            bullets: [
              "Tên thương hiệu",
              "Logo",
              "Hình ảnh sản phẩm",
              "Hình ảnh đồ họa",
              "Nội dung mô tả",
              "Bài viết",
              "Thiết kế giao diện",
              "Các tài liệu và nội dung sáng tạo khác.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Người dùng không được tự ý sao chép, sử dụng, chỉnh sửa, phân phối hoặc khai thác các nội dung thuộc quyền sở hữu của GamePiece Labs cho mục đích thương mại khi chưa được cho phép, trừ trường hợp pháp luật cho phép.",
              "Nội dung, thương hiệu, hình ảnh hoặc tài liệu thuộc quyền sở hữu của bên thứ ba tiếp tục thuộc quyền của chủ sở hữu tương ứng.",
            ],
          },
        ],
      },
      {
        title: "Hành vi không được phép",
        number: "11",
        steps: [
          {
            title: "",
            paragraphs: ["Khi sử dụng website, người dùng không được:"],
            bullets: [
              "Sử dụng website cho mục đích vi phạm pháp luật",
              "Cố gắng truy cập trái phép vào hệ thống, máy chủ hoặc khu vực không được phép",
              "Phát tán mã độc, phần mềm độc hại hoặc nội dung có khả năng gây ảnh hưởng đến website",
              "Cố tình gây gián đoạn hoạt động bình thường của website",
              "Sử dụng công cụ tự động với mục đích gây quá tải hoặc làm ảnh hưởng đến hệ thống",
              "Giả mạo GamePiece Labs hoặc sử dụng thương hiệu GamePiece Labs nhằm gây nhầm lẫn",
              "Sao chép hoặc khai thác trái phép nội dung thuộc quyền của GamePiece Labs hoặc bên thứ ba.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs có thể thực hiện các biện pháp kỹ thuật hợp lý để bảo vệ website và ngăn chặn hành vi gây ảnh hưởng đến hệ thống.",
            ],
          },
        ],
      },
      {
        title: "Liên kết đến website hoặc nền tảng bên thứ ba",
        number: "12",
        steps: [
          {
            title: "",
            paragraphs: [
              "Website có thể chứa liên kết đến các nền tảng hoặc dịch vụ của bên thứ ba, bao gồm Facebook.",
              "Khi người dùng truy cập các liên kết này, người dùng sẽ chuyển sang hệ thống do bên thứ ba vận hành.",
              "Việc sử dụng các nền tảng bên thứ ba chịu sự điều chỉnh bởi điều khoản và chính sách của bên thứ ba tương ứng.",
              "GamePiece Labs không kiểm soát toàn bộ hoạt động, nội dung hoặc chính sách của các nền tảng bên thứ ba.",
            ],
          },
        ],
      },
      {
        title: "Biểu mẫu liên hệ",
        number: "13",
        steps: [
          {
            title: "",
            paragraphs: [
              "Website có thể cung cấp biểu mẫu cho phép người dùng gửi tin nhắn đến GamePiece Labs.",
              "Người dùng có trách nhiệm cung cấp thông tin phù hợp và không nên gửi:",
            ],
            bullets: [
              "Mật khẩu",
              "Mã OTP",
              "Thông tin đăng nhập ngân hàng",
              "Thông tin thẻ thanh toán",
              "Thông tin nhạy cảm không cần thiết.",
            ],
          },
          {
            title: "",
            paragraphs: [
              [
                { text: "Việc xử lý thông tin được gửi thông qua biểu mẫu được thực hiện theo " },
                {
                  text: "Chính sách Bảo mật & Cookie",
                  href: "/privacy/chinh-sach-bao-mat",
                  strong: true,
                },
                { text: "." },
              ],
            ],
          },
        ],
      },
      {
        title: "Google Analytics, Meta Pixel và Cookie",
        number: "14",
        steps: [
          {
            title: "",
            paragraphs: [
              "Website sử dụng các công cụ phân tích hoặc đo lường như Google Analytics và Meta Pixel.",
              [
                { text: "Việc sử dụng cookie và dữ liệu liên quan được thực hiện theo " },
                {
                  text: "Chính sách Bảo mật & Cookie",
                  href: "/privacy/chinh-sach-bao-mat",
                  strong: true,
                },
                { text: "." },
              ],
              "Người dùng có thể được cung cấp công cụ để chấp nhận, từ chối hoặc tùy chỉnh các nhóm cookie không cần thiết.",
            ],
          },
        ],
      },
      {
        title: "Hoạt động của website",
        number: "15",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs cố gắng duy trì website hoạt động ổn định, tuy nhiên website có thể tạm thời không khả dụng do:",
            ],
            bullets: [
              "Bảo trì",
              "Cập nhật hệ thống",
              "Sự cố hosting hoặc hạ tầng",
              "Sự cố mạng",
              "Các vấn đề kỹ thuật",
              "Sự kiện nằm ngoài khả năng kiểm soát hợp lý.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "GamePiece Labs có thể tạm thời ngừng hoặc hạn chế một số chức năng khi cần thiết để bảo trì, bảo mật hoặc khắc phục sự cố.",
              "Việc website tạm thời không khả dụng không làm thay đổi các quyền và nghĩa vụ đã phát sinh từ những đơn hàng đã được xác nhận trước đó.",
            ],
          },
        ],
      },
      {
        title: "Sự kiện ngoài khả năng kiểm soát hợp lý",
        number: "16",
        steps: [
          {
            title: "",
            paragraphs: [
              "Trong một số trường hợp, việc thực hiện đơn hàng có thể bị ảnh hưởng bởi sự kiện nằm ngoài khả năng kiểm soát hợp lý, chẳng hạn như:",
            ],
            bullets: [
              "Thiên tai",
              "Hỏa hoạn",
              "Dịch bệnh",
              "Sự cố hạ tầng diện rộng",
              "Gián đoạn vận chuyển",
              "Quyết định của cơ quan có thẩm quyền",
              "Các sự kiện bất khả kháng khác theo quy định pháp luật.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Khi xảy ra tình huống ảnh hưởng đáng kể đến đơn hàng, GamePiece Labs sẽ thông báo cho khách hàng khi có thể và trao đổi về phương án xử lý phù hợp.",
            ],
          },
        ],
      },
      {
        title: "Phản ánh và khiếu nại",
        number: "17",
        steps: [
          {
            title: "",
            paragraphs: ["Nếu có vấn đề liên quan đến:"],
            bullets: [
              "Sản phẩm",
              "Thanh toán",
              "Giao hàng",
              "Đổi trả",
              "Bảo hành",
              "Thông tin trên website",
              "Hoặc các giao dịch với GamePiece Labs",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Khách hàng vui lòng liên hệ GamePiece Labs thông qua các kênh liên hệ chính thức.",
              "Khi gửi yêu cầu, khách hàng nên cung cấp các thông tin phù hợp để GamePiece Labs có thể kiểm tra và xác minh vấn đề.",
              "GamePiece Labs ưu tiên trao đổi trực tiếp với khách hàng để xác định nguyên nhân và tìm phương án giải quyết phù hợp.",
            ],
          },
        ],
      },
      {
        title: "Giải quyết tranh chấp",
        number: "18",
        steps: [
          {
            title: "",
            paragraphs: [
              "Trong trường hợp phát sinh tranh chấp, GamePiece Labs và khách hàng ưu tiên giải quyết thông qua trao đổi và thương lượng trên tinh thần thiện chí.",
              "Nếu hai bên không thể giải quyết thông qua thương lượng, tranh chấp có thể được giải quyết theo các phương thức và tại cơ quan có thẩm quyền theo quy định của pháp luật Việt Nam.",
              "Các Điều khoản này không hạn chế quyền của người tiêu dùng trong việc sử dụng các cơ chế giải quyết tranh chấp được pháp luật bảo vệ quyền lợi người tiêu dùng cho phép.",
            ],
          },
        ],
      },
      {
        title: "Thay đổi Điều khoản",
        number: "19",
        steps: [
          {
            title: "",
            paragraphs: [
              "GamePiece Labs có thể cập nhật Điều khoản này để phù hợp với:",
            ],
            bullets: [
              "Thay đổi của website",
              "Thay đổi sản phẩm hoặc hoạt động kinh doanh",
              "Thay đổi các chính sách liên quan",
              "Yêu cầu của pháp luật.",
            ],
          },
          {
            title: "",
            paragraphs: [
              "Phiên bản cập nhật sẽ được công bố trên website cùng ngày cập nhật.",
              "Các thay đổi không được áp dụng hồi tố theo cách làm bất lợi cho những quyền và nghĩa vụ đã được xác nhận đối với đơn hàng trước thời điểm thay đổi, trừ khi pháp luật có quy định khác hoặc các bên có thỏa thuận phù hợp.",
            ],
          },
        ],
      },
      {
        title: "Thông tin liên hệ",
        number: "20",
        steps: [
          {
            title: "",
            paragraphs: [
              "Nếu có câu hỏi về Điều khoản này, khách hàng có thể liên hệ GamePiece Labs thông qua:",
            ],
            bullets: [
              "Biểu mẫu liên hệ trên website",
              "Email chính thức",
              "Facebook Fanpage chính thức",
              "Các kênh liên hệ khác được GamePiece Labs công bố trên website.",
            ],
          },
        ],
      },
    ],
  },
};

export type PrivacyPolicySlug = keyof typeof privacyPolicies;
