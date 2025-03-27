export const navigationLinks = [
  { href: "/", label: "ホーム"},
  { href: "/about", label: "団体概要" },
  { href: "/resource", label: "リソース" },
  { href: "/ministries", label: "ミニストリー", children: [
    {
      href: "/articles/2021-09-01",
      label: "大学生ミニストリー",
      icon: "bi bi-vector-pen",
      description: "若者向け",
    },
    {
      href: "/articles/2021-09-02",
      label: "2021年9月2日",
      icon: "bi bi-vector-pen",
    },
    {
      href: "/articles/2021-09-03",
      label: "2021年9月3日",
      icon: "bi bi-vector-pen",
    },
    {
      href: "/articles/2021-09-04",
      label: "2021年9月4日",
      icon: "bi bi-vector-pen",
    },
  ] },
  { href: "/reference", label: "参考資料" },
];
